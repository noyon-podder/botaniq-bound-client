/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import CommentDropDownAction from "./CommentDropDownAction";
import { useDeleteComment } from "@/hooks/comment.hook";

const CommentSection = ({ comments }: any) => {
  const sortedComments = comments?.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const { mutate: deleteComment } = useDeleteComment();

  const handleDeleteComment = (commentId: string) => {
    deleteComment(commentId);
  };

  console.log(sortedComments);
  return (
    <div>
      <div className="mt-10">
        {sortedComments?.map((item: any) => (
          <div key={item.id} className="my-5">
            <div className="flex items-center gap-3">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={item?.author?.profilePicture}
                  className=""
                  alt="User Profile"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <h2 className="text-base font-medium">{item?.author?.name}</h2>
            </div>

            <div className="bg-white dark:bg-[#121212]  py-2 px-3 mt-3 relative">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {item?.content}
              </p>

              {/* hover the show action  */}
              <div className="absolute right-5 top-3">
                <CommentDropDownAction
                  handleDeleteComment={handleDeleteComment}
                  commentId={item._id}
                />
              </div>
            </div>

            {item?.replies?.length > 0 &&
              item?.replies?.map((replay: any, index: number) => (
                <div key={index} className="ml-10 mt-5">
                  <div className="flex items-center gap-3">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={replay?.author?.profilePicture}
                        className=""
                        alt="User Profile"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>

                    <h2 className="text-base font-medium">
                      {replay?.author?.name}
                    </h2>
                  </div>

                  <div className="bg-white py-2 px-3 mt-3">
                    <p className="text-lg text-gray-600">{replay?.content}</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
