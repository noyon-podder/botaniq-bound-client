import { useGetAllPost } from "@/hooks/post.hook";
import React from "react";

const AllPost = () => {
  const { data } = useGetAllPost();

  console.log(data);
  return <div>Total Post : {data.length}</div>;
};

export default AllPost;
