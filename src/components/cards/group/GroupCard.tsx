import { FC } from "react";
import { withBasePath } from "../../../lib/helper";

export interface IGroupCard {
  name: string;
  totalBounty: Number;
  image: string;
}

const GroupCard: FC<IGroupCard> = ({ name, totalBounty, image }) => {
  return (
    <div className="px-4 mx-auto my-16 max-w-7xl sm:px-6 lg:px-8">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div>
            <img
              className="object-cover w-full h-32 rounded-sm lg:h-64 ring-4 ring-gray-100"
              src={withBasePath(`/images/${image}`)}
              alt={name}
            />
          </div>
          {/* <div className="max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="rounded-sm w-36 h-36 ring-4 ring-white sm:h-32 sm:w-32"
                  src={withBasePath(`/images/${avatar}`)}
                  alt={name}
                />
              </div>
              <div className="sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden min-w-0 mt-2 sm:block 2xl:hidden">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {name}
              </h1>
            </div>
          </div> */}
        </div>
        <div className="px-4 py-5 border-t border-gray-200 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">Margot Foster</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Application for
              </dt>
              <dd className="mt-1 text-sm text-gray-900">Backend Developer</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                margotfoster@example.com
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
