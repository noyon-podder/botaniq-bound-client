import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MoveLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const MenuSidebarToggle = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="lg:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <div className="flex items-center gap-10">
            <SheetClose>
              <MoveLeft size={32} />
            </SheetClose>
            <Link
              href={"/"}
              className="text-[24px] font-semibold text-foreground"
            >
              Botaniq <span className="text-primary">Bound</span>
            </Link>
          </div>

          <SheetDescription>
            <div className="mt-10">
              <Button className="w-full py-5 text-lg" size={"lg"}>
                Login
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSidebarToggle;
