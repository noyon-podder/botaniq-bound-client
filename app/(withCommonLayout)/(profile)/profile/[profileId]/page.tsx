"use server";

import Post from "@/components/module/Profiile/post/Post";
import PostData from "@/components/module/Profiile/PostData";
import ProfileHeader from "@/components/module/Profiile/ProfileHeader";
import Container from "@/components/shared/Container";
import envConfig from "@/config/envConfig";
import { cookies } from "next/headers";

interface IProps {
  params: { profileId: string };
}
const ProfileDetailsPage = async ({ params }: IProps) => {
  const id = params?.profileId;
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    throw new Error("Access token is required");
  }

  const res = await fetch(
    `${envConfig?.baseApi}/user/single-user/${params?.profileId}`,

    {
      cache: "no-cache",
      headers: {
        Authorization: `${accessToken}`,
      },
    }
  );
  const userInfo = await res.json();

  // const { data: userInfo } = useGetSingleUser(params?.profileId);

  console.log("Post Data", userInfo?.data.posts);
  return (
    <Container>
      <ProfileHeader userInfo={userInfo.data} paramsId={id} />
      <div className="mt-40">
        <PostData userId={params.profileId} />
      </div>
    </Container>
  );
};

export default ProfileDetailsPage;
