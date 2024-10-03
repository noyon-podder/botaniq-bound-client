import { TUser } from "@/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUser } from "./UserProvider";

import { useGetSingleUser } from "@/hooks/user.hook";

interface IUserProviderValues {
  user: TUser | null;
  isLoading: boolean;
  setUser: (user: TUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useUser();

  const { data } = useGetSingleUser(user?.email as string);

  useEffect(() => {
    if (data?.data) {
      setUserInfo(data.data);
      setIsLoading(false);
    }
  }, [data?.data]);

  return (
    <UserContext.Provider
      value={{
        user: userInfo, // Fix the key here
        setUser: setUserInfo,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserInformation = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "useUserInformation must be used within the UserInfoProvider context"
    );
  }

  return context;
};

export default UserInfoProvider;
