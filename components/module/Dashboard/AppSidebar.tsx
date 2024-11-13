/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ClipboardEdit, Settings, User, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "@radix-ui/react-icons";
import { useUserInformation } from "@/context/UserInfoProvider";

// Menu items.
const adminSidebarItems = [
  { title: "Admin Dashboard", url: "/admin-dashboard", icon: DashboardIcon },
  { title: "Manage Users", url: "/", icon: Users },
  { title: "Manage Posts", url: "#", icon: ClipboardEdit },
  { title: "My Profile", url: "#", icon: User },
  { title: "Settings", url: "#", icon: Settings },
];

const userSidebarItems = [
  { title: "User Dashboard", url: "/user-dashboard", icon: DashboardIcon },
  { title: "Manage Posts", url: "#", icon: ClipboardEdit },
  { title: "My Profile", url: "#", icon: User },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useUserInformation();

  // Helper function to render menu items based on user role
  const renderSidebarItems = (items: any[]) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          className={`text-base mb-1 font-medium hover:bg-primary hover:text-white ${
            pathname === item.url ? "bg-primary text-white" : ""
          }`}
        >
          <Link href={item.url} className="flex items-center gap-2">
            <item.icon />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <Sidebar>
      <div className="text-center py-5 border-b">
        <Link href="/" className="text-[22px] font-bold text-foreground">
          Leaf<span className="text-primary">Link</span>
        </Link>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {user?.role === "ADMIN"
                ? renderSidebarItems(adminSidebarItems)
                : renderSidebarItems(userSidebarItems)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
