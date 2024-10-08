import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

const CommentDropDownAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis className="text-gray-500 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-accent dark:bg-background z-[1000] relative">
        <ul className="">
          <li className="py-1 px-1 cursor-pointer hover:text-primary">Edit</li>
          <li className="py-1 px-1 cursor-pointer hover:text-primary">
            Delete
          </li>
          {/* <li className="py-1 px-1 cursor-pointer hover:text-primary">
            Replay
          </li> */}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CommentDropDownAction;
