import { GetStaticProps } from "next";
import Layout from "@/components/utility/layout/home/HomeLayout";
import PiratesList from "@/components/list/group/PiratesList";
import { IMemberCard } from "@/components/cards/member/MemberCard";
import prisma from "../lib/prisma";

export interface CrewType {
  feed: IMemberCard[];
  count: number;
}

const Home = ({ feed, count }: CrewType) => {
  return (
    <Layout>
      <PiratesList feed={feed} count={count}/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getFeed = () =>
    prisma.pirateGroup.findMany({
      skip: 0,
      take: 8,
      orderBy: { name: "asc" },
      select: {
        name: true,
        image: true,
      },
    });

  const getCount = () =>
    prisma.pirateGroup.aggregate({
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
