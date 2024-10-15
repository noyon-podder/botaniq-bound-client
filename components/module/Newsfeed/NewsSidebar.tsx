"use client";

import { PaddingIcon } from "@radix-ui/react-icons";
import { AlbumIcon, AlignHorizontalDistributeCenterIcon } from "lucide-react";
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

  return (
    <div className="bg-white dark:bg-[#121212] py-5">
      <ul className="">
        {routes?.map((route) => (
          <li key={route.id}>
            <Link
              href={route.path}
              className={`flex gap-4 px-5 py-4 text-lg font-medium hover:text-primary ${
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
  );
};

export default NewsSidebar;
