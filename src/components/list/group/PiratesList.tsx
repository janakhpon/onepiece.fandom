import { CrewType } from "../../../pages/index";
import CardList from "../card/CardList";

export default function MemberList({ feed, count }: CrewType) {
  return (
    <div className="rounded-lg bg-slate-50">
      <div className="max-w-2xl px-4 py-2 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Notorious Pirate Groups
        </h2>
        <CardList feed={feed} dataType={""} />
      </div>
    </div>
  );
}
