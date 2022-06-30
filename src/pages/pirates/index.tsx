import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "@/components/utility/layout/crew/CrewLayout";
import MemberList from "@/components/list/member/MemberList";
import { IMemberCard } from "@/components/cards/member/MemberCard";
import prisma from "../../lib/prisma";

// export interface MemberType {
//   name: string;
//   name_jp: string;
//   image: string;
//   origin: string;
//   age: string;
//   position: string;
//   devilfruit: string;
//   summary: string;

//   // [key: string]: string;
// }

// export interface IMemberCard {
//   name: string;
//   name_jp: string;
//   image: string;
//   origin: string;
//   age: string;
//   position: string;
//   devilfruit: string;
//   summary: string;
// }

export interface CrewType {
  feed: IMemberCard[];
  count: number;
}

const Home = ({ feed, count }: CrewType) => {
  return (
    <Layout>
      <MemberList feed={feed} count={count} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getFeed = () =>
    prisma.member.findMany({
      skip: 0,
      take: 8,
      orderBy: { name: "asc" },
      select: {
        name: true,
        image: true,
        position: true,
      },
    });

  const getCount = () =>
    prisma.member.aggregate({
      _count: {
        name: true,
      },
    });

  const [feed, resp_count] = await Promise.all([getFeed(), getCount()]);
  return {
    props: {
      feed,
      count: resp_count._count.name,
    },
  };
};

export default Home;
