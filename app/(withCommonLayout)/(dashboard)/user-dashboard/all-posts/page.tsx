"use client";

import TableSkeleton from "@/components/loading/TableSkeleton";

import TableData from "@/components/module/Dashboard/PostTable";
import { useGetPostByLoginUser } from "@/hooks/post.hook";

const AllPosts = () => {
  const { data, isLoading } = useGetPostByLoginUser();

  console.log("ALL POsts", data, "UserId");
  return (
    <div className="p-10">
      <h3 className="mb-5 lg:text-[28px] text-[22px] font-semibold">
        My Posts
      </h3>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <>
          {!data?.data?.length ? (
            <p className="text-center text-base font-normal text-gray-700 dark:text-gray-300">
              No posts found.
            </p>
          ) : (
            <TableData tableData={data?.data} />
          )}
        </>
      )}
    </div>
  );
};

export default AllPosts;
