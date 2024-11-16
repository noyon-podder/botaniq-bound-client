// import Sidebar from "@/components/module/Dashboard/Sidebar";
// import React, { ReactNode } from "react";

// const DashboardLayout = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="lg:ml-[300px] w-full">{children}</div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { AppSidebar } from "@/components/module/Dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <Sidebar /> */}
      <main className="w-full">
        <div className="w-full h-14 bg-muted px-5 border-b flex items-center justify-between">
          <SidebarTrigger />

          <div>
            <Bell />
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
