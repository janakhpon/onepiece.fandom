import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from "../../lib/prisma";
import MemberList from "@/components/list/member/MemberList";
import CrewLayout from "@/components/utility/layout/crew/CrewLayout";
import { CrewType } from "@/pages/index";

interface IParams extends ParsedUrlQuery {
  name: string;
}
const Detail = ({ feed, count }: CrewType) => {
  return (
    <CrewLayout>
      <MemberList feed={feed} count={count} />;
    </CrewLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as IParams;
  const result = await prisma.pirateGroup.findUnique({
    where: {
      name: name.replace(/_/g, " "),
    },
    select: {
      members: {
        skip: 0,
        take: 8,
        orderBy: { name: "asc" },
        select: {
          name: true,
          image: true,
          position: true,
          crew: true,
        },
      },
    },
  });
  return {
    props: {
      feed: result?.members,
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
