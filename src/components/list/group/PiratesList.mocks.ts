import { IPiratesList } from "./PiratesList";

const base: IPiratesList = {
  feed: [
    { name: 'Heart', image: 'heart.jpeg', totalBounty: 35000000 },
    { name: 'Kid', image: 'kidpirates.jpg', totalBounty: 45000000 },
    { name: 'Straw Hat', image: 'strawhat.jpg', totalBounty: 60000000 }
  ],
  count: 3,
};

export const mockPiratesListProps = {
  base,
};
