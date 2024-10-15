import NewsSidebar from "@/components/module/Newsfeed/NewsSidebar";
import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";

import React, { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="grid grid-cols-12 gap-10 lg:mt-[100px] mt-[80px]">
          <div className="lg:col-span-3 md:col-span-3 col-span-0">
            <div className="sticky top-[100px]">
              {" "}
              {/* Adjust top as needed */}
              <NewsSidebar />
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-9 col-span-12">
            {children}
          </div>
          <div className="lg:col-span-3 hidden lg:block">Followers</div>
        </div>
      </Container>
    </>
  );
};

export default UserLayout;
