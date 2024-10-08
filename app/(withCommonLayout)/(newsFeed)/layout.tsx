import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";

import React, { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="grid grid-cols-12 gap-10 lg:mt-[100px] mt-[80px]">
          <div className="col-span-3 ">SIdebar</div>
          <div className="col-span-6">{children}</div>
          <div className="col-span-3 ">Followers</div>
        </div>
      </Container>
    </>
  );
};

export default UserLayout;
