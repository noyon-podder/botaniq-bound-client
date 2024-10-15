"use client";
import Post from "@/components/module/Profiile/post/Post";

import PostLoadingSkeleton from "@/components/shared/PostLoadingSkeleton";
import { useGetAllPost } from "@/hooks/post.hook";
import { IPost } from "@/types";
import React from "react";

const HomePage = () => {
  const { data, isPending, isLoading } = useGetAllPost();
  console.log(data);

  return (
    <div className="">
      {isPending || (isLoading && <PostLoadingSkeleton />)}
      {data?.data?.map((item: IPost) => (
        <Post key={item._id} post={item} />
      ))}
    </div>
  );
};

export default HomePage;
