import Link from "next/link";
import { IMemberCard } from "../../cards/member/MemberCard";
import { withBasePath } from "@/lib/helper";

export interface ICrewFeed {
  feed: IMemberCard[];
  dataType: string;
}
export default function CardList({ feed, dataType }: ICrewFeed) {
  return (
    <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" id="cardList" data-testid="cardList">
      {feed.map(({ name, name_jp, image, position }: IMemberCard) => (
        <div key={name} className="relative group">
          <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={withBasePath(`images/${image}`)}
              alt={name}
              className="object-cover object-center w-full h-full lg:w-full lg:h-full"
            />
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h3 className="text-sm text-gray-700">
                <Link href={`/${dataType}${name.replace(/\s/g, "_")}`}>
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </a>
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{position}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
