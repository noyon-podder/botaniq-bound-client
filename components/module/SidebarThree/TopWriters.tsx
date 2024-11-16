/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PopularPostLoadingSkeleton from "@/components/loading/PopularPostLoadingSkeleton";
import { useTopWriters } from "@/hooks/user.hook";
import { defaultUserImage } from "@/utils/defaultUser";
import Link from "next/link";

const TopWriters = () => {
  const { data, isLoading } = useTopWriters();

  const topWriterData = data?.data?.slice(0, 5);

  return (
    <div className="xl:mb-10 lg:mb-9 md:mb-8 mb-5">
      <h2 className="text-lg font-semibold">Top Writers</h2>

      {isLoading && <PopularPostLoadingSkeleton />}
      <div>
        {topWriterData?.map((item: any) => (
          <div key={item?._id} className="">
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10">
                <img
                  src={item?.profilePicture || defaultUserImage}
                  alt="profile Image"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>

              <div>
                <Link
                  href={`/profile/${item?._id}`}
                  className="text-sm font-medium hover:text-primary"
                >
                  {item?.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWriters;
