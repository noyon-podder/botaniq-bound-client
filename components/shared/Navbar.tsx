"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-accent  py-5 px-10">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href={"/"}
            className="text-[22px] font-semibold text-foreground"
          >
            Botaniq <span className="text-primary">Bound</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
