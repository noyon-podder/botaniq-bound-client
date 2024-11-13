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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <Sidebar /> */}
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
