import Followers from "@/components/module/SidebarThree/Followers";
import TopWriters from "./TopWriters";
import PopularPost from "./PopularPost";

const FollowersSidebar = () => {
  return (
    <>
      <Followers />
      <TopWriters />
      <PopularPost />
    </>
  );
};

export default FollowersSidebar;
