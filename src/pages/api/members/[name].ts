import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  name: string;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;
  const { name } = request.query as IParams;
  let feed = null;
  if (method === "GET") {
    try {
      feed = await prisma.member.findUnique({
        where: {
          name: name.replace(/_/g, " "),
        },
      });
    } catch (err) {}
    return response.status(200).json({ feed });
  }
}
