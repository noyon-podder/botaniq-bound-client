import { IPost } from "@/types";
import Image from "next/image";

interface IProps {
  postData: IPost;
}

const PostDetails = ({ postData }: IProps) => {
  //   const { title, content } = postData;
  return (
    <div className="py-10">
      <h2 className="text-[32px] font-semibold mb-4">{postData?.title}</h2>

      <span className="text-primary font-normal my-3 block">
        {postData?.category}
      </span>
      {/* <ImageGallery images={postData?.images} /> */}
      <div className="w-full lg:h-[500px] h-[300px]">
        <Image
          src={postData?.images[0]}
          alt="Post Image"
          width={1200}
          height={700}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex justify-end my-2">
        <h2 className="text-base font-medium text-muted-foreground">
          <span className="font-semibold text-primary">Written By: </span>
          {postData?.author?.name}
        </h2>
      </div>

      <div>
        <p dangerouslySetInnerHTML={{ __html: postData?.content }}></p>
      </div>
    </div>
  );
};

export default PostDetails;
