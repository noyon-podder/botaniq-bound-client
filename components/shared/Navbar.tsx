"use client";

import Link from "next/link";
import { Input } from "../ui/input";
import { Search, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import MenuSidebarToggle from "../custom/MenuSidebarToggle";
import AvatarDropDown from "../custom/AvatarDropDown";
import { useUserInformation } from "@/context/UserInfoProvider";

const Navbar = () => {
  const [searchShow, setSearchShow] = useState(false);
  const { user } = useUserInformation();

  // const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-accent lg:h-[80px] h-[70px] py-4 xl:px-8 lg:px-6 px-5 fixed top-0 w-full z-[500] shadow-sm ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 ">
          <MenuSidebarToggle />
          <Link href={"/"} className="text-[22px] font-bold text-foreground">
            Leaf<span className="text-primary">Link</span>
          </Link>
        </div>

        <div className=" justify-center flex">
          <div className="lg:flex xl:gap-16 lg:gap-10 items-center hidden ">
            <div className=" h-full">
              <div className="relative xl:w-[600px] lg:w-[450px]">
                <Input
                  placeholder="Search"
                  className="pl-10 "
                  // onChange={(e) => setSearchValue(e.target.value)}
                />
                <Search className="absolute top-1/2 left-[6px] -translate-y-1/2 text-gray-500 " />
              </div>
            </div>

            {user?.role === "USER" && (
              <Link href="/user-dashboard/create-post">
                <Button>Write Post</Button>
              </Link>
            )}
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
