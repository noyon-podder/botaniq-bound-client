"use client";

import Link from "next/link";
import { Input } from "../ui/input";
import { Search, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import MenuSidebarToggle from "../custom/MenuSidebarToggle";
import { useUser } from "@/context/UserProvider";
import AvatarDropDown from "../custom/AvatarDropDown";
import { useUserInformation } from "@/context/UserInfoProvider";

const Navbar = () => {
  const [searchShow, setSearchShow] = useState(false);
  const { user } = useUser();
  const { user: userInfo } = useUserInformation();

  console.log("user Information: ", userInfo);

  return (
    <div className="bg-accent lg:h-[80px] py-4 lg:px-10 px-5 fixed top-0 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 ">
          <MenuSidebarToggle />
          <Link href={"/"} className="text-[22px] font-bold text-foreground">
            Leaf<span className="text-primary">Link</span>
          </Link>
        </div>

        <div className=" justify-center flex">
          <div className="lg:flex xl:gap-16 lg:gap-10 items-center hidden ">
            <div className="relative xl:w-[600px] lg:w-[450px]">
              <Input placeholder="Search" className="pl-10 " />
              <Search className="absolute top-1/2 left-[6px] -translate-y-1/2 text-gray-500 " />
            </div>

            <Button>Write Post</Button>
          </div>
        </div>

        <div className="flex items-center gap-5 ">
          <SearchIcon
            onClick={() => setSearchShow(!searchShow)}
            size={28}
            className="cursor-pointer lg:hidden text-foreground"
          />
          {!user?.email ? (
            <Link href="/login" className="hidden lg:block">
              <Button>Login</Button>
            </Link>
          ) : (
            // <Button
            //   onClick={() => handleLogout()}
            //   className=""
            //   variant={"outline"}
            //   size="sm"
            // >
            //   Logout
            // </Button>
            <AvatarDropDown />
          )}
          <ThemeToggle />
        </div>
      </div>
      {searchShow && (
        <div className="mt-4 block">
          <div className="relative w-full">
            <Input placeholder="Search" className="pl-10 " />
            <Search className="absolute top-1/2 left-[6px] -translate-y-1/2 text-gray-500 " />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
