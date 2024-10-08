// "use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetAllComment } from "@/hooks/comment.hook";

const CommentSection = ({ comments }: any) => {
  // const { data } = useGetAllComment(postId);

  return (
    <div>
      <div className="mt-10">
        {comments?.map((item) => (
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

            <div className="bg-white py-2 px-3 mt-3">
              <p className="text-lg text-gray-600">{item?.content}</p>
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
