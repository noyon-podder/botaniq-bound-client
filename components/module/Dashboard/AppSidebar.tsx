/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ChevronUp, ChevronDown, LogOut } from "lucide-react";
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

import { useUserInformation } from "@/context/UserInfoProvider";
import React, { useState } from "react";
import SidebarSkelleton from "@/components/loading/SidebarSkelleton";
import { adminSidebarItems, userSidebarItems } from "@/utils/sidebarRoutes";
import { TSidebarItem } from "@/types";

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

  const renderSidebarItems = (items: TSidebarItem[]) =>
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
                  <item.icon size={20} /> <span>{item.title}</span>
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
              <SidebarMenuButton>
                <LogOut />
                <span>Log Out</span>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
