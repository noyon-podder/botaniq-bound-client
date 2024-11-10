"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useFollowUser } from "@/hooks/user.hook";

const FollowButton = ({ userId }: { userId: string }) => {
  const { mutate: followingUser } = useFollowUser();
  const [isFlowing, setIsFlowing] = useState(false);

  const handleFollow = () => {
    if (isFlowing) {
      // console.log("unfollow the  user");
    } else {
      followingUser(userId);
      setIsFlowing(true);
    }
  };
  return (
    <div className="flex justify-end mt-10 lg:mr-10">
      <Button
        onClick={handleFollow}
        className={`capitalize text-lg font-medium ${
          isFlowing ? "bg-red-500 hover:bg-red-600" : ""
        }`}
      >
        {isFlowing ? "unfollowing" : "following"}
      </Button>
    </div>
  );
};

export default FollowButton;
