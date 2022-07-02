import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from "../../../lib/prisma";
import MemberCard, { IMemberCard } from "@/components/cards/member/MemberCard";

export interface IParams extends ParsedUrlQuery {
  crewname: string;
}

export interface MemberProps {
  feed: IMemberCard;
}
export interface IeachPirateMember {
  name: string;
}
export interface IeachPirateGroup {
  name: string;
  members: IeachPirateMember[];
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
  const groupFeed:IeachPirateGroup[] = await prisma.pirateGroup.findMany({
    select: { name: true, members: { select: { name: true } } },
  });
  const paths = groupFeed
    .map((group:IeachPirateGroup) =>
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
