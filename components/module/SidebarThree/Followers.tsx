import Image from "next/image";
import Link from "next/link";
import React from "react";

const Followers = () => {
  return (
    <div className="xl:mb-10 lg:mb-9 md:mb-8 mb-5">
      <h2 className="text-lg font-semibold">Followers</h2>

      <div className="mt-3">
        <div className="flex items-center gap-3 mt-2">
          <div>
            <Image
              src={"https://picsum.photos/200"}
              alt="profile Image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full object-cover object-center"
            />
          </div>

          <div>
            <Link href={"#"} className="text-sm font-semibold">
              Jhon Doe
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div>
            <Image
              src={"https://picsum.photos/200"}
              alt="profile Image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full object-cover object-center"
            />
          </div>

          <div>
            <Link href={"#"} className="text-sm font-semibold">
              Jhon Doe
            </Link>
          </div>
        </div>

        <Link
          href="#"
          className="w-full  font-medium bg-[#fff] dark:bg-[#121212] block py-2 text-center mt-5 rounded-md"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Followers;
