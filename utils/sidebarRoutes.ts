import {
  ClipboardEdit,
  Users,
  Settings,
  User,
  CreditCardIcon,
  Cog,
  FilePlus2,
  FileSpreadsheet,
} from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";
import { TSidebarItem } from "@/types";

export const adminSidebarItems: TSidebarItem[] = [
  { title: "Admin Dashboard", url: "/admin-dashboard", icon: DashboardIcon },
  {
    title: "Manage Users",
    url: "#",
    icon: Users,
    subItems: [
      { title: "All Users", url: "/all-users", icon: CreditCardIcon },
      { title: "Create User", url: "/create-user", icon: CreditCardIcon },
      { title: "Update User", url: "/update-user", icon: CreditCardIcon },
    ],
  },
  {
    title: "Manage Posts",
    url: "#",
    icon: ClipboardEdit,
    subItems: [
      { title: "Create Post", url: "/create-post", icon: CreditCardIcon },
      { title: "Update Post", url: "/update-post", icon: CreditCardIcon },
    ],
  },
  { title: "My Profile", url: "#", icon: User },
  { title: "Settings", url: "#", icon: Settings },
];

export const userSidebarItems: TSidebarItem[] = [
  { title: "User Dashboard", url: "/user-dashboard", icon: DashboardIcon },
  {
    title: "Manage Posts",
    url: "#",
    icon: Cog,
    subItems: [
      {
        title: "Create Post",
        url: "/user-dashboard/create-post",
        icon: FilePlus2,
      },
      {
        title: "Update Post",
        url: "/user-dashboard/update-post",
        icon: ClipboardEdit,
      },
      {
        title: "All Posts",
        url: "/user-dashboard/all-posts",
        icon: FileSpreadsheet,
      },
    ],
  },
  { title: "Profile", url: "#", icon: User },
  { title: "Settings", url: "#", icon: Settings },
];
