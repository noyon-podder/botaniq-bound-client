/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  ClipboardEdit,
  Users,
  Settings,
  User,
  CreditCardIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "@radix-ui/react-icons";
import { useUserInformation } from "@/context/UserInfoProvider";
import React, { useState } from "react";
import SidebarSkelleton from "@/components/loading/SidebarSkelleton";

// Define the type for a sidebar item and its sub-items
type SidebarItem = {
  title: string;
  url: string;
  icon: any;
  // icon: string;
  subItems?: {
    title: string;
    url: string;
    icon?: any;
  }[];
};

// Menu items with explicit types
const adminSidebarItems: SidebarItem[] = [
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

const userSidebarItems: SidebarItem[] = [
  { title: "User Dashboard", url: "/user-dashboard", icon: DashboardIcon },
  {
    title: "Manage Posts",
    url: "#",
    icon: ClipboardEdit,
    subItems: [
      { title: "Create Post", url: "/create-post", icon: CreditCardIcon },
      { title: "Update Post", url: "/update-post", icon: CreditCardIcon },
      { title: "All Posts", url: "/all-posts", icon: CreditCardIcon },
    ],
  },
  { title: "My Profile", url: "#", icon: User },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useUserInformation();
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (title: string) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [title]: !prevOpenItems[title],
    }));
  };

  const renderSidebarItems = (items: SidebarItem[]) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        {item.subItems ? (
          <Collapsible
            open={openItems[item.title] || false}
            onOpenChange={() => toggleItem(item.title)}
          >
            <CollapsibleTrigger className="flex items-center justify-between cursor-pointer p-2 w-full">
              <React.Suspense fallback={<SidebarSkelleton />}>
                <div className="flex items-center gap-2 w-full">
                  <item.icon size={20} />{" "}
                  {/* Icon is rendered as a component */}
                  <span>{item.title}</span>
                </div>
                <span>
                  {openItems[item.title] ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </span>
              </React.Suspense>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4">
              {item.subItems.map((subItem) => (
                <SidebarMenuItem key={subItem.title}>
                  <SidebarMenuButton
                    asChild
                    className={`text-sm mb-1 font-medium hover:bg-primary hover:text-white ${
                      pathname === subItem.url ? "bg-primary text-white" : ""
                    }`}
                  >
                    <Link
                      href={subItem.url}
                      className="flex items-center gap-1"
                    >
                      <subItem.icon size={20} />
                      <span>{subItem.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <SidebarMenuButton
            asChild
            className={`text-base mb-1 font-medium hover:bg-primary hover:text-white ${
              pathname === item.url ? "bg-primary text-white" : ""
            }`}
          >
            <Link href={item.url} className="flex items-center gap-2">
              <item.icon size={20} /> {/* Icon rendered as a component */}
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        )}
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
