import { Request, Response } from "express";

import { prisma } from "../db";
import { z } from "zod";
import bcrypt from "bcrypt";

const inputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email(),
  number: z.string().min(10, "Number must be at least 10 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  balance: z.number(),
});
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string) || "";

    const skip = (page - 1) * limit;
    const users = await prisma.user.findMany({
      where: {
        role: "USER",
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      },
      orderBy: {
        id: "asc",
      },
      include: {
        Balance: true,
      },
      skip,
      take: limit,
    });

    const total = await prisma.user.count({
      where: {
          role: "USER",
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      },
    });

    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    res.status(200).json({
      data: users,
      meta: {
        total,
        page,
        limit,
        hasNextPage,
        hasPreviousPage,
      },
    });

    return;
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const freezeUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (user.isFrozen) {
      res.status(400).json({ error: "User is already frozen" });
      return;
    }

    await prisma.user.update({
      where: { id: userId },
      data: { isFrozen: true },
    });

    res.status(200).json({ message: "User account frozen successfully" });
    return;
  } catch (error) {
    console.error("Error freezing user:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const unfreezeUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (!user.isFrozen) {
      res.status(400).json({ error: "User is not frozen" });
      return;
    }

    await prisma.user.update({
      where: { id: userId },
      data: { isFrozen: false },
    });

    res.status(200).json({ message: "User account unfrozen successfully" });
    return;
  } catch (error) {
    console.error("Error unfreezing user:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const parsedInput = inputSchema.safeParse(req.body);
  if (!parsedInput.success) {
    res.status(400).json({ error: parsedInput.error });
    return;
  }
  const { name, email, number, password, balance } = parsedInput.data;
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        number,
        email,
        password: hashPassword,
        role: "USER",
        isFrozen: false,
        Balance: {
          create: {
            amount: balance || 0, // Default to 0 if no balance is provided
          },
        },
      },
    });

    res.status(201).json({
      data: newUser,
      message: "User created successfully",
    });
    return;
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    res.status(200).json({ message: "User deleted successfully" });
    return;
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

// export const updateUser = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { id } = req.params;
//   const { name, email, number, password, balance } = req.body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: Number(id) },
//     });
//     if (!user) {
//       res.status(404).json({ error: "User not found" });
//       return;
//     }

//     const updatedUser = await prisma.user.update({
//       where: { id: Number(id) },
//       data: {
//         name,
//         email,
//         number,
//         password,
//         Balance:{
//             update:{
//                 amount: balance
//             }
//         },
//       },
//     });

//     res.status(200).json({
//       data: updatedUser,
//       message: "User updated successfully",
//     });
//     return;
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ error: "Internal server error" });
//     return;
//   }
// };
