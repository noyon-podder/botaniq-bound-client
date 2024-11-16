"use client";

import moment from "moment";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/utils/getInitials";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import { Copy, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { useDownVotes, useUpVotes } from "@/hooks/post.hook";
import { IPost } from "@/types";
import { useUserInformation } from "@/context/UserInfoProvider";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

const Post = ({ post }: { post: IPost }) => {
  const { user } = useUserInformation();

  const {
    _id: postId,
    author,
    title,
    images,
    upvotes,
    downvotes,
    comments,
    views,
  } = post;
  const { name, _id: authorId } = author;
  const router = useRouter();

  const timeAgo = moment(post.createdAt).fromNow();
  const { mutate: handleUpvote } = useUpVotes();
  const { mutate: handleDownVote } = useDownVotes();
  const [upvotesIcon, setUpvotesIcon] = useState(false);

  const handleUpvoteFunction = () => {
    if (!user) {
      return router.push("/login");
    }
    setUpvotesIcon(!upvotesIcon);
    handleUpvote(postId);
  };

  const handleDownvoteFunction = () => {
    if (!user) {
      return router.push("/login");
    }

    handleDownVote(postId);
  };

  const copyCurrentURL = (postURL: string) => {
    const currentURL = window.location.href + postURL;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        toast({
          title: "Link Copy",
        });
      })
      .catch((error) => {
        console.error("Failed to copy the URL: ", error);
      });
  };

  return (
    <div className="border p-5 mb-5 bg-white dark:bg-accent">
      {/* PROFILE INFO */}
      <div className="flex items-center gap-4">
        <Link href={`/profile/${authorId}`}>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={author?.profilePicture}
              className=""
              alt="User Profile"
            />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex flex-col">
          <Link href={`/profile/${authorId}`} className="font-medium text-lg">
            {name}
          </Link>
          <p className="text-sm text-muted-foreground">{timeAgo}</p>
        </div>
      </div>

      {/* POST INFO */}
      <div className="my-6">
        <Link href={`/post/${postId}`}>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">
            {title}
          </h2>
        </Link>
        {/* <div className={`${content?.length > 30 ? "" : ""}`}>
          <p
            dangerouslySetInnerHTML={{
              __html:
                content.length > 30
                  ? `${content.substring(0, 30)}...`
                  : content,
            }}
          ></p>
        </div> */}
      </div>

      <div>
        <ImageGallery images={images} />
      </div>

      {/* total like and total  comment */}

      <div className="py-3 border-b flex justify-between items-center">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-1">
            <ThumbsUp size={20} strokeWidth={2} className="text-blue-600" />
            {upvotes} Likes
          </div>
          <div className="flex items-center gap-1">
            <ThumbsDown size={20} strokeWidth={2} className="text-blue-600" />
            {downvotes} Dislikes
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {comments.length} comments
          </div>
          <div className="flex items-center gap-1">{views} views</div>
        </div>
      </div>
      <div className="pt-5 flex items-center justify-between">
        <div
          className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-md py-2"
          onClick={handleUpvoteFunction}
        >
          <ThumbsUp
            className={`${
              post?.upvotedBy?.find(
                (id) => id.toString() === user?._id.toString()
              )
                ? "text-blue-600"
                : "text-gray-400"
            }`}
            size={24}
            fill={
              post?.upvotedBy?.find(
                (id) => id.toString() === user?._id.toString()
              )
                ? "#3B82F6" // Fill with blue color if user has downvoted
                : "none" // No fill if user has not downvoted
            }
          />
          Like
        </div>
        <div
          className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-md py-2"
          onClick={handleDownvoteFunction}
        >
          <ThumbsDown
            className={`${
              post?.downvotedBy?.some(
                (id) => id.toString() === user?._id.toString()
              )
                ? "text-blue-600"
                : "text-gray-400"
            }`}
            size={24}
            fill={
              post?.downvotedBy?.some(
                (id) => id.toString() === user?._id.toString()
              )
                ? "#3B82F6"
                : "none"
            }
          />
          Dislike
        </div>
        <Link href={`/post/${postId}`}>
          <div className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-md py-2">
            <MessageSquare className="text-gray-400" />
            Comment
          </div>
        </Link>
        <div
          onClick={() => copyCurrentURL(`/post/${postId}`)}
          className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-md py-2"
        >
          <Copy className="text-gray-400" />
          Copy
        </div>
      </div>
    </div>
  );
};

export default Post;
