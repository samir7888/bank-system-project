import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

interface Transaction {
  receiverId: number;
  amount: number;
  timestamp: Date;
}

interface Graph {
  get(key: number): Transaction[] | undefined;
  has(key: number): boolean;
  set(key: number, value: Transaction[]): void;
}

async function buildGraph(sinceMinutes = 10): Promise<Map<number, Transaction[]>> {
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

  transfers.forEach(({ fromUserId, toUserId, amount, timestamp }) => {
    if (!graph.has(fromUserId)) graph.set(fromUserId, []);
    graph.get(fromUserId)!.push({ receiverId: toUserId, amount, timestamp });
  });

  return graph;
}

function dfs(
  graph: Graph,
  current: number,
  visited: Set<number>,
  path: number[],
  startTime: Date,
  maxHops: number,
  maxMinutes: number
): number[] {
  if (path.length >= maxHops) return path;

  visited.add(current);

  const neighbors = graph.get(current) || [];
  for (const { receiverId, timestamp } of neighbors) {
    const timeDiff = (timestamp.getTime() - startTime.getTime()) / 60000; // in minutes
    if (timeDiff <= maxMinutes && !visited.has(receiverId)) {
      const result = dfs(graph, receiverId, new Set(visited), [...path, receiverId], startTime, maxHops, maxMinutes);
      if (result.length >= maxHops) return result;
    }
  }

  return path;
}

export async function checkFraudChain(
  senderId: number,
  maxHops: number = 3,
  maxMinutes: number = 10
): Promise<number[] | null> {
  const graph = await buildGraph(maxMinutes);
  const path = dfs(graph, senderId, new Set<number>(), [senderId], new Date(), maxHops, maxMinutes);
  return path.length >= maxHops ? path : null;
}
