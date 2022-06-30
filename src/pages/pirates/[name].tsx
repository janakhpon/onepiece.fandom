import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from "../../lib/prisma";
import MemberCard, { IMemberCard } from "@/components/cards/member/MemberCard";

interface IParams extends ParsedUrlQuery {
  name: string;
}
interface MemberProps {
  feed: IMemberCard;
}

const Detail = ({ feed }: MemberProps) => {
  console.log("feed", feed);
  return <MemberCard {...feed} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as IParams;
  const result = await prisma.member.findUnique({
    where: {
      name: name.replace(/_/g, " "),
    },
  });
  return {
    props: {
      feed: result,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const feed = await prisma.member.findMany({
    select: {
      name: true,
    },
  });

  return {
    paths: feed?.map((member: any) => ({
      params: { name: member.name.replace(/\s/g, "_") },
    })),
    fallback: false,
  };
};

export default Detail;
