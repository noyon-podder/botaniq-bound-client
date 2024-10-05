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

  const res = await fetch(
    `${envConfig.baseApi}/user/single-user/${params?.profileId}`,

    {
      next: { revalidate: 60 },
      headers: {
        Authorization: `${accessToken}`,
      },
    }
  );
  const userInfo = await res.json();
  console.log({ id });

  console.log(userInfo);
  return (
    <Container>
      <ProfileHeader userInfo={userInfo.data} paramsId={id} />
    </Container>
  );
};

export default ProfileDetailsPage;
