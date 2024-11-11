import React from "react";
import NewsSidebar from "../Newsfeed/NewsSidebar";
import RecentPosts from "./RecentPosts";

const SidebarOne = () => {
  return (
    <div className="lg:block hidden">
      <NewsSidebar />
      <RecentPosts />
    </div>
  );
};

export default SidebarOne;
