"use client";

import CommentSection from "@/components/module/Post/CommentSection";
import PostDetails from "@/components/module/Post/PostDetails";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";

import { useGetPostById } from "@/hooks/post.hook";
import { Send } from "lucide-react";

const SinglePostPage = ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;
  const { data, isLoading } = useGetPostById(postId);

  const postData = data?.data;

  console.log(postData);

  return (
    <Container>
      {isLoading && <Loading />}
      <PostDetails postData={postData} />

      <div className="py-5 border-t">
        <div className="lg:px-10 px-5 flex gap-5">
          <textarea
            name=""
            id=""
            placeholder="Enter your comment"
            className="w-full px-5 py-6 outline-none focus:border-primary"
          ></textarea>
          <button className="flex items-center gap-2 px-3 py-1 bg-primary text-white h-10 ">
            Send
            <Send size={16} />
          </button>
        </div>
        <h2 className="font-medium capitalize">
          Comments <span>{postData?.comments?.length}</span>
        </h2>

        <div>
          <CommentSection comments={postData?.comments} />
        </div>
      </div>
    </Container>
  );
};

export default SinglePostPage;
