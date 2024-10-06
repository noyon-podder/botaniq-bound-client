"use client";

import moment from "moment";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/utils/getInitials";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import React from "react";
import ImageGallery from "./ImageGallery";
import { Copy, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { useUpVotes } from "@/hooks/post.hook";
import TruncateText from "@/utils/TruncateText";

const Post = ({ post }) => {
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
  const { name, profilePicture, email, _id } = author;

  const timeAgo = moment(post.createdAt).fromNow();
  const { mutate: handleUpvote } = useUpVotes();

  const handleUpvoteFunction = () => {
    handleUpvote(postId);
  };
  return (
    <div className="border p-5">
      {/* PROFILE INFO */}
      <div className="flex items-center gap-4">
        <Link href={`/profile/${_id}`}>
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
          className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 cursor-pointer rounded-md py-2"
          onClick={handleUpvoteFunction}
        >
          <ThumbsUp />
          Like
        </div>
        <div className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 cursor-pointer rounded-md py-2">
          <ThumbsDown />
          Dislike
        </div>
        <div className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 cursor-pointer rounded-md py-2">
          <MessageSquare />
          Comment
        </div>
        <div className="flex items-center gap-2 px-4 bg-transparent hover:bg-gray-200 cursor-pointer rounded-md py-2">
          <Copy />
          Copy
        </div>
      </div>
    </div>
  );
};

export default Post;
