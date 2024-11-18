import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableSkeleton = () => {
  return (
    <div>
      <Table className="bg-accent border-accent ">
        <TableHeader>
          <TableRow className="py-4 dark:border-[#444]">
            <TableHead className="">Post Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Views</TableHead>
            <TableHead className="">Upvotes</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index} className="dark:border-[#444] animate-pulse">
              <TableCell className="font-medium">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md bg-gray-300 dark:bg-gray-700"></div>
                  <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
                </div>
              </TableCell>
              <TableCell>
                <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
              </TableCell>
              <TableCell>
                <div className="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
              </TableCell>
              <TableCell>
                <div className="h-4 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  {Array.from({ length: 3 }).map((_, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-700"
                    ></div>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableSkeleton;
