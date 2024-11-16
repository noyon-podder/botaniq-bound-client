"use client";

import PopularPostLoadingSkeleton from "@/components/loading/PopularPostLoadingSkeleton";
import { useGetAllPost } from "@/hooks/post.hook";
import { IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

const RecentPosts = () => {
  const { data, isLoading } = useGetAllPost();
  return (
    <div className="xl:mt-10 lg:mt-9 md:mt-8 mt-5">
      <h2 className="text-lg font-semibold">Recent Posts</h2>

      {isLoading && <PopularPostLoadingSkeleton />}
      {data?.data?.map((item: IPost) => (
        <div key={item?._id} className="mt-3">
          <div className="flex items-center gap-3 mt-2">
            <div>
              <Image
                src={item?.images[0]}
                alt="Post Image"
                width={60}
                height={60}
                className="w-[60px] h-[40px] rounded-[10px] object-cover object-center"
              />
            </div>

            <div>
              <Link
                href={`/post/${item?._id}`}
                className="text-sm font-medium hover:text-primary"
              >
                {item?.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
