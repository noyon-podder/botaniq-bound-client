/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Modal from "./Modal";
import { Button } from "../ui/button";

interface IProps {
  triggerButton: any;
}
const DeletePostModal = ({ triggerButton }: IProps) => {
  return (
    <div>
      <Modal triggerButton={triggerButton}>
        <div className="flex items-center justify-center flex-col">
          <p className="dark:text-white text-[#121212] text-lg font-medium">
            This will permanently delete the post.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <Button
              className="bg-red-600 hover:bg-red-500"
              onClick={() => console.log("Delete Post")}
            >
              Delete
            </Button>
            <Button
              className="bg-primary text-white"
              onClick={() => console.log("Cancel")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePostModal;
