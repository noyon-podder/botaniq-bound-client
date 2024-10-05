"use client";

import { LayoutDashboard, SquarePen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/user-dashboard",
    label: "Dashboard",
    id: "01",
    icon: <LayoutDashboard />,
  },

  {
    path: "/user-dashboard/create-post",
    label: "Create Post",
    id: "02",
    icon: <SquarePen />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="lg:block hidden max-w-[300px] w-full bg-primary h-screen fixed top-0 left-0">
      <div className="text-center py-5 border-b">
        <Link href={"/"} className="text-[32px] font-bold text-white">
          LeafLink
        </Link>
      </div>

      <div className="py-5">
        <ul>
          {routes?.map((route) => (
            <li key={route.id}>
              <Link
                href={route.path}
                className={`flex gap-4 px-5 py-4 text-lg font-medium ${
                  pathname === route.path
                    ? "bg-white text-foreground"
                    : "text-white bg-primary"
                }`}
              >
                {route.icon}
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
