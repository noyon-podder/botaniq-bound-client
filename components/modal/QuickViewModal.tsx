/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPost } from "@/types";
import Modal from "./Modal";
import Image from "next/image";

interface IProps {
  trigger: any;
  post: IPost;
}
const QuickViewModal = ({ trigger, post }: IProps) => {
  return (
    <>
      <Modal triggerButton={trigger} title={"Quick View"}>
        <div className="py-4">
          <div>
            <Image
              src={post?.images[0]}
              alt={post?.title}
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>

          <div className="py-4">
            <h3 className="text-[20px] mb-5 font-semibold text-black dark:text-white">
              {post?.title}
            </h3>
            <p
              className="text-gray-800 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            ></p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default QuickViewModal;
