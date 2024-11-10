import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logout } from "@/services/AuthService";
import { toast } from "@/hooks/use-toast";
import { protectedRoutes } from "@/constant";
import { usePathname, useRouter } from "next/navigation";

import { useUserInformation } from "@/context/UserInfoProvider";
import { LogOutIcon, UserCircle } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";

const AvatarDropDown = () => {
  // const { user, setIsLoading: userLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const { user: userInfo, setIsLoading: userLoading } = useUserInformation();

  const handleLogout = () => {
    logout();
    userLoading(true);

    toast({
      title: "Logged out successfully",
    });
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={userInfo?.profilePicture}
            className=""
            alt="User Profile"
          />
          {/* <AvatarFallback>{getInitials(userInfo?.name)}</AvatarFallback> */}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-accent dark:bg-background z-[1000] relative">
        <div className="py-2 mb-2 bg-[#f2f2f2] dark:bg-[#121212] border-double border-b-2 px-3">
          <h2 className="text-base font-medium">{userInfo?.name}</h2>
          <p className="text-sm text-muted-foreground">{userInfo?.email}</p>
        </div>
        <ul className="">
          <li className="">
            <Link
              href={`/profile/${userInfo?._id}`}
              className="px-3 py-[10px] border-b border-border text-muted-foreground text-base font-normal hover:bg-primary hover:text-white  flex items-center gap-2"
            >
              <UserCircle className="" size={20} /> Profile
            </Link>
          </li>
          {userInfo?.role === "ADMIN" ? (
            <li className="">
              <Link
                href="/admin-dashboard"
                className="px-3 py-[10px] border-b border-border text-muted-foreground text-base font-normal hover:bg-primary hover:text-white  flex items-center gap-2"
              >
                <DashboardIcon fontSize={20} />
                Admin Dashboard
              </Link>
            </li>
          ) : (
            <li className="">
              <Link
                href="/user-dashboard"
                className="px-3 py-[10px] border-b border-border text-muted-foreground text-base font-normal hover:bg-primary hover:text-white  flex items-center gap-2"
              >
                <DashboardIcon fontSize={20} />
                User Dashboard
              </Link>
            </li>
          )}

          <li
            onClick={handleLogout}
            className="px-3 py-[10px] border-b border-border text-muted-foreground text-base font-normal hover:bg-primary hover:text-white  flex items-center gap-2"
          >
            <LogOutIcon size={20} />
            Log out
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDown;
