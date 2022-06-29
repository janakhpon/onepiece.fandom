import { PrismaClient } from "@prisma/client";
import data from "../data/all.json";

const prisma = new PrismaClient();

async function main() {
  console.log(`\n Start seeding ...`);
  for (const u of data) {
    const member = await prisma.member.create({
      data: u,
    });
    console.log(`Created member: ${member.name}`);
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
