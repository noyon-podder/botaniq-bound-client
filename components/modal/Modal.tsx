import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface IProps {
  triggerButton: string;
  title: string;
  children: ReactNode;
}

const Modal = ({ triggerButton, title, children }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <p>{triggerButton}</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
