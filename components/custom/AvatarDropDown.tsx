import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useUser } from "@/context/UserProvider";
import { logout } from "@/services/AuthService";
import { toast } from "@/hooks/use-toast";
import { protectedRoutes } from "@/constant";
import { usePathname, useRouter } from "next/navigation";
import { getInitials } from "@/utils/getInitials";
import { useUserInformation } from "@/context/UserInfoProvider";

const AvatarDropDown = () => {
  const { user, setIsLoading: userLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const { user: userInfo } = useUserInformation();

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
          <AvatarFallback>
            {getInitials(user?.name as string) || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-accent dark:bg-background">
        <ul className="">
          <li className="">
            <Link
              href="/profile"
              className="px-5 py-[10px] border-b border-border text-base font-normal hover:bg-primary hover:text-white  block "
            >
              Profile
            </Link>
          </li>
          {user?.role === "ADMIN" ? (
            <li className="">
              <Link
                href="/admin-dashboard"
                className="text-base font-normal hover:bg-primary hover:text-white px-5 py-[10px] border-b border-border block"
              >
                Admin Dashboard
              </Link>
            </li>
          ) : (
            <li className="">
              <Link
                href="/user-dashboard"
                className="text-base font-normal hover:bg-primary hover:text-white  px-5 py-[10px] border-b border-border block"
              >
                User Dashboard
              </Link>
            </li>
          )}

          <li
            onClick={handleLogout}
            className="px-5 py-[10px] cursor-pointer hover:bg-primary hover:text-white"
          >
            Log out
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDown;
