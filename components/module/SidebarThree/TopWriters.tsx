import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const TopWriters = () => {
  return (
    <div className="xl:mb-10 lg:mb-9 md:mb-8 mb-5">
      <h2 className="text-lg font-semibold">Top Writers</h2>

      <div className="mt-3">
        <div className="flex items-center justify-between mt-2">
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

          <div>
            <Button size={"sm"}>Follow</Button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
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

          <div>
            <Button size={"sm"}>Follow</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopWriters;
