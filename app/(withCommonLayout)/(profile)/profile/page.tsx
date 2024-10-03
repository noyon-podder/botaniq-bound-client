"use client";

// Import your custom hook
import { useUser } from "@/context/UserProvider";
import { useGetSingleUser } from "@/hooks/user.hook";

const ProfilePage = () => {
  const { user } = useUser();
  const { data, error, isLoading } = useGetSingleUser(user?.email as string);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Profile Page</h1>
      {data && (
        <div>
          <p>Email: {data.email}</p>
          <p>Name: {data?.data.name}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
