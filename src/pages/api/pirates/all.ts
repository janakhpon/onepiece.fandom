import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;
  let feed = null;
  let count = 0;

  if (method === "GET") {
    try {
      feed = await prisma.pirateGroup.findMany({
        select: {
          name: true,
          totalBounty: true,
          image: true,
          members: {
            orderBy: { name: "asc" },
          },
        },
      });
    } catch (err) {}
    try {
      const resp_count = await prisma.pirateGroup.aggregate({
        _count: {
          name: true,
        },
      });
      count = resp_count._count.name;
    } catch (err) {}
    return response.status(200).json({ feed, count });
  }
}
