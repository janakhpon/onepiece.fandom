const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log(`\n Start seeding ...`);

  const pirateGroup = await prisma.PirateGroup.create({
    data: {
      name: "Straw Hat",
      totalBounty: 60000000,
      members: {
        create: [
          {
            name: "Brook",
            crewName: "Brook",
            name_jp: "ブルック",
            image: "brook.jpg",
            origin: "West Blue",
            age: "90",
            position: "Musician",
            devilfruit: "Yomi Yomi no Mi",
            summary: " SoulKing Brook[16] is the musician of the Straw Hat Pirates",
            crew: "Straw Hat",
            crew_img: "strawhat.jpg",
            battling: "Swordman - Use devil fruit power + sword",
            avatar: "brook_avatar.png",
            bounty: 1500000
          }
        ]
      }
    }
  })
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
