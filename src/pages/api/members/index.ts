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
      feed = await prisma.member.findMany({
        skip: 0,
        take: 12,
        orderBy: { name: "asc" },
        select: {
          name: true,
          image: true,
          position: true,
        },
      });
    } catch (err) {}
    try {
      const resp_count = await prisma.member.aggregate({
        _count: {
          name: true,
        },
      });
      count = resp_count._count.name;
    } catch (err) {}
    return response.status(200).json({ feed, count });
  }
}
