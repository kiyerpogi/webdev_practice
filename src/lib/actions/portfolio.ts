import { prisma } from "@/lib/prisma";

export const getPortfolioData = async (email: string) => {
  if (!email) {
    throw new Error("Email is required");
  }
  try {
    const user = await prisma.profiles.findUnique({
        where:{ email },
        include: {
            achievements: true,
            educations: true,
            objectives: true,
            projects: true,
            skills: true,
            softskills: true,
            strips: true,
            tools: true,
        },
    });
    return user;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    throw new Error("Failed to fetch portfolio data");
  }
};