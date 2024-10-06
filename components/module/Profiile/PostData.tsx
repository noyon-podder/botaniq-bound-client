/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAllPostsByUserId } from "@/hooks/user.hook";
import Post from "./post/Post";

const PostData = ({ userId }: { userId: string }) => {
  const { data } = useGetAllPostsByUserId(userId);
  return (
    <div>
      {data?.data.map((item: any) => (
        <Post post={item} key={item._id} />
      ))}
    </div>
  );
};

export default PostData;
