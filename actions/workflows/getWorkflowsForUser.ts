"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const GetWorkflowsForUser = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not found");
  }

  return prisma.workflow.findMany({
    where: {
      userId,
    },
    orderBy: {
      createAt: "asc",
    },
  });
};
