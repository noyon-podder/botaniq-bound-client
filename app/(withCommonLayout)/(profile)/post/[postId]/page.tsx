"use client";

import CommentSection from "@/components/module/Post/CommentSection";
import PostDetails from "@/components/module/Post/PostDetails";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";

import { useGetPostById } from "@/hooks/post.hook";

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
