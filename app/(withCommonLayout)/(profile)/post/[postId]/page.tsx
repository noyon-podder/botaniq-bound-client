"use client";

import CommentSection from "@/components/module/Post/CommentSection";
import PostDetails from "@/components/module/Post/PostDetails";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import { useUser } from "@/context/UserProvider";
import { useCreateComment } from "@/hooks/comment.hook";
import { useGetPostById } from "@/hooks/post.hook";
import { Send } from "lucide-react";
import { useState } from "react";

const SinglePostPage = ({ params }: { params: { postId: string } }) => {
  const { user } = useUser();
  const postId = params.postId;
  const { data, isLoading } = useGetPostById(postId);
  const { mutate: handleCreateComment } = useCreateComment();

  const [comment, setComment] = useState("");

  const postData = data?.data;

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(comment);

    const commentData = {
      authorId: user?._id,
      postId: postId,
      content: comment,
    };

    handleCreateComment(commentData);

    setComment("");
  };

  console.log(data?.data);

  // if (isSuccess) {
  //   setComment("");
  // }

  return (
    <Container>
      {isLoading && <Loading />}
      <PostDetails postData={postData} />

      <div className="py-5 border-t">
        <form onSubmit={handleCommentSubmit} className="flex gap-5 mb-5">
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            id=""
            placeholder="Enter your comment"
            className="w-full px-5 py-6 outline-none focus:border-primary resize-none"
          ></textarea>
          <button
            className="flex items-center gap-2 px-3 py-1 bg-primary text-white h-10 rounded-md justify-center hover:bg-green-600"
            type="submit"
          >
            Send
            <Send size={16} />
          </button>
        </form>
        <h2 className="font-medium capitalize">
          Comments <span>{postData?.comments?.length}</span>
        </h2>

        {postData?.comments?.length === 0 ? (
          <p className="text-center">No comments yet</p>
        ) : (
          <div>
            {/* here the all comment section */}
            <CommentSection comments={postData?.comments} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default SinglePostPage;
