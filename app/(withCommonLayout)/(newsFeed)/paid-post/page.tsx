"use client";

import Post from "@/components/module/Profiile/post/Post";
import PostLoadingSkeleton from "@/components/shared/PostLoadingSkeleton";
import { Button } from "@/components/ui/button";
import { useUserInformation } from "@/context/UserInfoProvider";
import { useGetAllPaidPost } from "@/hooks/post.hook";
import { useVerifiedUser } from "@/hooks/user.hook";
import { IPost } from "@/types";

const PaidPostPage = () => {
  // const { user } = useUser();
  const { user } = useUserInformation();
  const { data, isLoading } = useGetAllPaidPost();
  const { mutate: verifiedUser } = useVerifiedUser();

  const handleVerifiedUser = () => {
    verifiedUser();
  };

  return (
    <div>
      {isLoading && <PostLoadingSkeleton />}
      {!user?.verified ? (
        <div className="h-screen   flex justify-center items-center">
          <div className="p-10 text-center dark:bg-[#121212] bg-white rounded-md">
            <h2 className="capitalize text-[22px] font-semibold ">Payment</h2>
            <p className="text-base font-normal text-mutate-foreground mt-1">
              Please pay and access to premium content
            </p>

            <Button className="mt-5" onClick={() => handleVerifiedUser()}>
              Pay ONline
            </Button>
          </div>
        </div>
      ) : (
        data?.data?.map((item: IPost) => <Post key={item?._id} post={item} />)
      )}
    </div>
  );
};

export default PaidPostPage;
