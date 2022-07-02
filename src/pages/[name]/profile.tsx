import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from "../../lib/prisma";
import GroupCard from "@/components/cards/group/GroupCard";
import { IPirates } from "@/components/list/group/PiratesList";

interface IParams extends ParsedUrlQuery {
  name: string;
}
interface MemberProps {
  feed: IPirates;
}

const Detail = ({ feed }: MemberProps) => {
  return <GroupCard {...feed} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as IParams;
  const result = await prisma.pirateGroup.findUnique({
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
  const feed = await prisma.pirateGroup.findMany({
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
