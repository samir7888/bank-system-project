import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Transaction {
  receiverId: number;
  amount: number;
  timestamp: Date;
}

async function buildGraph(
  sinceMinutes = 10
): Promise<Map<number, Transaction[]>> {
  const sinceDate = new Date(Date.now() - sinceMinutes * 60 * 1000);

  const transfers = await prisma.p2pTransfer.findMany({
    where: {
      timestamp: {
        gt: sinceDate,
      },
    },
    select: {
      fromUserId: true,
      toUserId: true,
      amount: true,
      timestamp: true,
    },
  });

  const graph = new Map<number, Transaction[]>();

  for (const { fromUserId, toUserId, amount, timestamp } of transfers) {
    if (!graph.has(fromUserId)) {
      graph.set(fromUserId, []);
    }
    graph.get(fromUserId)!.push({ receiverId: toUserId, amount, timestamp });
  }

  return graph;
}

function dfsCycle(
  graph: Map<number, Transaction[]>,
  current: number,
  visited: Set<number>,
  path: number[],
  origin: number,
  lastTimestamp: Date,
  maxHops: number,
  maxMinutes: number
): number[] | null {
  if (path.length > maxHops) return null;

  visited.add(current);

  const neighbors = graph.get(current) || [];
  for (const { receiverId, timestamp } of neighbors) {
    const timeDiff = (timestamp.getTime() - lastTimestamp.getTime()) / 60000;
    if (timeDiff < 0 || timeDiff > maxMinutes) continue;

    if (receiverId === origin && path.length >= 2) {
      return [...path, origin]; // cycle found
    }

    if (!visited.has(receiverId)) {
      const result = dfsCycle(
        graph,
        receiverId,
        new Set(visited),
        [...path, receiverId],
        origin,
        timestamp,
        maxHops,
        maxMinutes
      );
      if (result) return result;
    }
  }

  return null;
}

export async function checkFraudCycle(
  senderId: number,
  maxHops: number = 3,
  maxMinutes: number = 3
): Promise<number[] | null> {
  const graph = await buildGraph(maxMinutes);
  const firstTransfers = graph.get(senderId);

  if (!firstTransfers) return null;

  for (const { receiverId, timestamp } of firstTransfers) {
    const path = dfsCycle(
      graph,
      receiverId,
      new Set([senderId]),
      [senderId, receiverId],
      senderId,
      timestamp,
      maxHops,
      maxMinutes
    );

    if (path) return path;
  }

  return null;
}
