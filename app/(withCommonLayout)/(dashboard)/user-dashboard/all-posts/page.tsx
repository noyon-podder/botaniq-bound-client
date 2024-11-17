"use client";

import Table from "@/components/module/Dashboard/Table";
import { useGetPostByLoginUser } from "@/hooks/post.hook";

const AllPosts = () => {
  const { data, isLoading } = useGetPostByLoginUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("ALL POsts", data, "UserId");
  return (
    <div className="p-10">
      <div>Table Header</div>

      {/* {isPending && <div>Loading...</div>} */}
      {data?.data?.length > 0 && <Table tableData={data?.data} />}
    </div>
  );
};

export default AllPosts;
