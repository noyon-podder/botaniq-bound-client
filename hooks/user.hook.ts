// get single user

import { getSingleUser } from "@/services/User";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleUser = (email: string) => {
  return useQuery({
    queryKey: ["SINGLE_USER", email],
    queryFn: async () => await getSingleUser(email),
  });
};
