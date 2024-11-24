import DeletePostModal from "@/components/modal/DeletePostModal";
import QuickViewModal from "@/components/modal/QuickViewModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IPost } from "@/types";
import { Eye } from "lucide-react";
import Image from "next/image";

interface IProps {
  tableData: IPost[];
}
const PostTable = ({ tableData }: IProps) => {
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
          {tableData?.map((post: IPost) => (
            <TableRow key={post._id} className="dark:border-[#444] ">
              <TableCell className="font-medium">
                {" "}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    <Image
                      src={post?.images[0]}
                      width={60}
                      height={50}
                      alt="Product"
                    />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    {post?.title}
                  </p>
                </div>
              </TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{post.views}</TableCell>
              <TableCell className="">{post.upvotes}</TableCell>
              <TableCell className="">
                <div className="flex items-center gap-4">
                  <Tooltip>
                    <TooltipTrigger>
                      <QuickViewModal
                        trigger={
                          <button className="">
                            <Eye
                              size={20}
                              className="text-gray-500 dark:text-gray-300 transition-colors hover:text-purple-600 dark:hover:text-purple-500"
                            />
                          </button>
                        }
                        post={post}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Quick View</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger>
                      <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger>
                      <DeletePostModal
                        triggerButton={
                          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        }
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
