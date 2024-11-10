"use client";

import PostData from "@/components/module/Profiile/PostData";
import ProfileHeader from "@/components/module/Profiile/ProfileHeader";
import Container from "@/components/shared/Container";

import { useGetSingleUser } from "@/hooks/user.hook";

interface IProps {
  params: { profileId: string };
}
const ProfileDetailsPage = ({ params }: IProps) => {
  // const accessToken = cookies().get("accessToken")?.value;

  // if (!accessToken) {
  //   throw new Error("Access token is required");
  // }

  // const res = await fetch(
  //   `${envConfig?.baseApi}/user/single-user/${params?.profileId}`,

  //   {
  //     cache: "no-cache",
  //     headers: {
  //       Authorization: `${accessToken}`,
  //     },
  //   }
  // );
  // const userInfo = await res.json();

  const { data: userInfo } = useGetSingleUser(params?.profileId);

  return (
    <Container>
      <ProfileHeader userInfo={userInfo?.data} paramsId={params?.profileId} />
      <div className="mt-40">
        <PostData userId={params.profileId} />
      </div>
    </Container>
  );
};

export default ProfileDetailsPage;
