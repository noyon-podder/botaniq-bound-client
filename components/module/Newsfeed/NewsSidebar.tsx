"use client";

import { useUserInformation } from "@/context/UserInfoProvider";
import { PaddingIcon } from "@radix-ui/react-icons";
import { AlbumIcon, AlignHorizontalDistributeCenterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/about-us",
    label: "About Us",
    id: "01",
    icon: <AlignHorizontalDistributeCenterIcon />,
  },

  {
    path: "/gallery",
    label: "Gallery",
    id: "02",
    icon: <AlbumIcon />,
  },
  {
    path: "/paid-post",
    label: "Paid Post",
    id: "03",
    icon: <PaddingIcon />,
  },
];

const NewsSidebar = () => {
  const pathname = usePathname();
  const { user } = useUserInformation();

  return (
    <div className="">
      {user && (
        <>
          <div className="flex items-center gap-3 mt-2">
            <div>
              <Image
                src={
                  user?.profilePicture ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="profile Image"
                width={70}
                height={70}
                className="w-[40px] h-[40px] rounded-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col">
              <Link href={"#"} className="text-base font-semibold">
                Jhon Doe
              </Link>
              <span className="lowercase text-primary text-xs">
                {user?.role}
              </span>
            </div>
          </div>
        </>
      )}
      <ul className="mt-4 ">
        {routes?.map((route) => (
          <li key={route.id}>
            <Link
              href={route.path}
              className={`hover:bg-white dark:hover:bg-[#121212] flex gap-4 px-3 py-3 mb-1 text-lg font-medium hover:text-primary ${
                pathname === route.path ? "text-primary" : "text-foreground"
              }`}
            >
              {route.icon}
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    // <div className="bg-white dark:bg-[#121212] py-5">

    // </div>
  );
};

export default NewsSidebar;
