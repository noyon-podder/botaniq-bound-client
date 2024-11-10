/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Modal from "@/components/modal/Modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import LeafForm from "@/components/form/LeafForm";
import LeafInput from "@/components/form/LeafInput";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUpdateComment } from "@/hooks/comment.hook";

const CommentDropDownAction = ({ handleDeleteComment, commentId }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: handleUpdateComment } = useUpdateComment();

  const handleClose = () => {
    setIsOpen(false); // Close the dropdown
  };

  const handleUpdateCommentHandler: SubmitHandler<FieldValues> = (data) => {
    const commentData = {
      commentId: commentId,
      content: data.content,
    };

    handleUpdateComment(commentData);
    handleClose(); // Close the dropdown after updating
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Ellipsis
          className="text-gray-500 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)} // Toggle the dropdown open/close
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-accent dark:bg-background z-[1000] relative">
        <ul className="">
          <li className="py-1 px-1 cursor-pointer hover:text-primary">
            <Modal
              triggerButton="Edit your comment"
              title="Comment Update"
              //   onOpenChange={handleClose}
            >
              <LeafForm onSubmit={handleUpdateCommentHandler}>
                <LeafInput name="content" type="text" className="mt-6" />

                <Button type="submit">Submit</Button>
              </LeafForm>
            </Modal>
          </li>
          <li
            onClick={() => {
              handleDeleteComment(commentId);
              handleClose(); // Close the dropdown after delete
            }}
            className="py-1 px-1 cursor-pointer hover:text-primary"
          >
            Delete your comment
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CommentDropDownAction;
