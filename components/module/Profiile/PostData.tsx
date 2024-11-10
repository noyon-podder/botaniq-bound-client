/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAllPostsByUserId } from "@/hooks/user.hook";
import Post from "./post/Post";
import PostLoadingSkeleton from "@/components/shared/PostLoadingSkeleton";

const PostData = ({ userId }: { userId: string }) => {
  const { data, isPending } = useGetAllPostsByUserId(userId);

  return (
    <div>
      {isPending && <PostLoadingSkeleton />}
      {data?.data?.length === 0 && (
        <p className="text-center text-[20px] block  pt-10">
          No Post Available
        </p>
      )}

      {data?.data?.map((item: any) => (
        <Post post={item} key={item._id} />
      ))}
    </div>
  );
};

export default PostData;
