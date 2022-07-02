import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from "../../../lib/prisma";
import MemberCard, { IMemberCard } from "@/components/cards/member/MemberCard";

interface IParams extends ParsedUrlQuery {
  crewname: string;
}
interface MemberProps {
  feed: IMemberCard;
}

const Detail = ({ feed }: MemberProps) => {
  return <MemberCard {...feed} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { crewname } = context.params as IParams;
  const result = await prisma.member.findUnique({
    where: {
      name: crewname?.replace(/_/g, " "),
    },
  });
  return {
    props: {
      feed: result,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const groupFeed = await prisma.pirateGroup.findMany({
    select: { name: true, members: { select: { name: true } } },
  });
  const paths = groupFeed
    .map((group) =>
      group.members.map((groupMember) => {
        return {
          params: {
            name: group.name.replace(/\s/g, "_"),
            crewname: groupMember.name.replace(/\s/g, "_"),
          },
        };
      })
    )
    .flat();
  return {
    paths: paths,
    fallback: false,
  };
};

export default Detail;
