// import { PrismaClient } from "@prisma/client";
// import data from "../data/group.json";
const { PrismaClient } = require("@prisma/client");
const data = require("../data/group.json")

const prisma = new PrismaClient();

async function main() {
  console.log(`\n Start seeding ...`);
  for (const group of data.feed) {
    const pirateGroup = await prisma.PirateGroup.create({
      data: {
        name: group.name,
        totalBounty: group.totalBounty,
        members: group.members
      }
    });
    console.log(`Created pirateGroup: ${pirateGroup.name}`);
  }
  console.log(`\n Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
