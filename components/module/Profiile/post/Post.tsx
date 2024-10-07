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
import TruncateText from "@/utils/TruncateText";
import { IPost } from "@/types";

const Post = ({ post }: { post: IPost }) => {
  console.log({ post });
  const {
    _id: postId,
    author,
    title,
    content,
    images,
    upvotes,
    downvotes,
    comments,
    views,
  } = post;
  const { name, profilePicture, _id: authorId } = author;

  const timeAgo = moment(post.createdAt).fromNow();
  const { mutate: handleUpvote } = useUpVotes();
  const { mutate: handleDownVote } = useDownVotes();
  const [upvotesIcon, setUpvotesIcon] = useState(false);

  const handleUpvoteFunction = () => {
    setUpvotesIcon(!upvotesIcon);
    handleUpvote(postId);
  };

  const handleDownvoteFunction = () => {
    handleDownVote(postId);
  };
  return (
    <div className="border p-5">
      {/* PROFILE INFO */}
      <div className="flex items-center gap-4">
        <Link href={`/profile/${authorId}`}>
          <Avatar className="cursor-pointer">
            <AvatarImage src={profilePicture} className="" alt="User Profile" />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex flex-col">
          <h2 className="font-medium text-lg">{name}</h2>
          <p className="text-sm text-muted-foreground">{timeAgo}</p>
        </div>
      </div>

      {/* POST INFO */}
      <div className="my-6">
        <Link href="/post">
          <h2 className="text-2xl font-medium">{title}</h2>
        </Link>
        <TruncateText text={content} wordLimit={10} />
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
              post?.upvotedBy?.includes(authorId)
                ? "text-blue-600" // Apply this class if the condition matches
                : "text-gray-400" // Apply this class if the condition doesn't match
            }`}
            size={24}
            fill={post?.upvotedBy?.includes(authorId) ? "#3B82F6" : "none"} // Fill icon if condition matches
          />
          Like
        </div>
        <div
          className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-md py-2"
          onClick={handleDownvoteFunction}
        >
          <ThumbsDown
            className={`${
              post?.downvotedBy?.includes(authorId)
                ? "text-blue-600" // Apply this class if the condition matches
                : "text-gray-400" // Apply this class if the condition doesn't match
            }`}
            size={24}
            fill={post?.downvotedBy?.includes(authorId) ? "#3B82F6" : "none"} // Fill icon if condition matches
          />
          Dislike
        </div>
        <div className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-md py-2">
          <MessageSquare className="text-gray-400" />
          Comment
        </div>
        <div className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-md py-2">
          <Copy className="text-gray-400" />
          Copy
        </div>
      </div>
    </div>
  );
};

export default Post;
