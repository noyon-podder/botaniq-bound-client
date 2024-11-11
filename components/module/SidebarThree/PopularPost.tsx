import Image from "next/image";
import Link from "next/link";

const PopularPost = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Popular Posts</h2>

      <div className="mt-3">
        <div className="flex items-center gap-3 mt-2">
          <div>
            <Image
              src={"https://picsum.photos/200"}
              alt="profile Image"
              width={60}
              height={60}
              className="w-[60px] h-[40px] rounded-[10px] object-cover object-center"
            />
          </div>

          <div>
            <Link href={"#"} className="text-sm font-semibold">
              Post Name
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
