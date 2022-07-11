import { GetStaticProps } from "next";
import SEO from "@/components/utility/seo";
import Layout from "@/components/utility/layout/home/HomeLayout";
import PiratesList, { IPiratesList } from "@/components/list/group/PiratesList";
import prisma from "../lib/prisma";
import { withFullPath } from "../lib/helper";

const Home = ({ feed, count }: IPiratesList) => {
  return (
    <>
      <SEO image={`${withFullPath("preview.png")}`} />
      <Layout>
        <PiratesList feed={feed} count={count} />
      </Layout>
    </>
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
        totalBounty: true,
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
