"use client";

import PopularPostLoadingSkeleton from "@/components/loading/PopularPostLoadingSkeleton";
import { useGetPopularPost } from "@/hooks/post.hook";
import { IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PopularPost = () => {
  const { data, isLoading } = useGetPopularPost();
  return (
    <div>
      <h2 className="text-lg font-semibold">Popular Posts</h2>

      {isLoading && <PopularPostLoadingSkeleton />}

      {data?.data?.map((post: IPost) => (
        <div key={post?._id} className="">
          <div className="flex items-center gap-3 mt-2">
            <div>
              <Image
                src={post?.images[0]}
                alt="profile Image"
                width={60}
                height={60}
                className="w-[60px] h-[40px] rounded-[10px] object-cover object-center"
              />
            </div>

            <div>
              <Link
                href={`/post/${post?._id}`}
                className="text-sm font-medium hover:text-primary"
              >
                {post?.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularPost;
