"use client";

import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";

import { useUserInformation } from "@/context/UserInfoProvider";

import {
  useCoverPhotoUpload,
  useProfilePictureUpload,
} from "@/hooks/user.hook";
import { CameraIcon, VerifiedIcon } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const ProfilePage = () => {
  const { user: userInfo, isLoading } = useUserInformation();
  // const { user } = useUser();
  // const { data: userData, isLoading } = useGetSingleUser(user?.email as string);
  const { mutate: handleCoverUpload, isPending } = useCoverPhotoUpload();
  const { mutate: handleProfilePhotoUpload, isPending: profilePhotoPending } =
    useProfilePictureUpload();
  // const userInfo = userData?.data;
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null
  );

  if (isLoading) return <Loading />;

  // handle cover image
  const handleCoverPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
      handleCoverUpload(formData);

      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  // handle profile image
  const handleProfilePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
      handleProfilePhotoUpload(formData);

      const reader = new FileReader();
      reader.onloadend = () => {};
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <div className="relative w-full lg:h-[400px] h-[200px]">
        {/* Cover Photo */}
        <div className="group  relative border h-full">
          {isPending && <Loading />}
          {userInfo?.coverPhoto && (
            <Image
              src={coverImagePreview || userInfo?.coverPhoto}
              alt="Cover Photo"
              width={1280}
              height={600}
              className="w-full h-full object-cover"
            />
          )}

          {!coverImagePreview && !userInfo?.coverPhoto && (
            <div>
              <div className="lg:h-[400px] h-[200px] flex items-center justify-center w-full flex-col gap-4">
                <h2 className="text-lg capitalize">Upload Cover Photo</h2>
                <label
                  htmlFor="cover"
                  className="px-5 py-2 bg-primary text-white cursor-pointer rounded-md"
                >
                  <input
                    type="file"
                    id="cover"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleCoverPhotoChange(e)}
                  />
                  upload
                </label>
              </div>
            </div>
          )}

          {/* Cover Photo Upload Icon (Visible only on hover) */}
          {userInfo?.coverPhoto && !coverImagePreview && (
            <div className="absolute bottom-5 right-5  ease-in-out duration-300">
              <label
                htmlFor="coverPhoto"
                className="px-2 cursor-pointer py-1 bg-primary text-white rounded-sm flex items-center gap-2"
              >
                <input
                  type="file"
                  id="coverPhoto"
                  className="hidden"
                  accept="image/*"
                  onChange={handleCoverPhotoChange}
                />
                <CameraIcon size={18} className="cursor-pointer" />
                Edit cover photo
              </label>
            </div>
          )}
        </div>

        {/* Profile Picture */}
        <div className=" absolute lg:left-[40px] lg:-bottom-[100px] -bottom-[110px]">
          {profilePhotoPending && <Loading />}

          <div className="flex items-center gap-6">
            <div className="group lg:size-[150px] size-[140px] relative">
              <div className="lg:size-[150px] size-[140px] absolute rounded-full inset-0 bg-transparent group-hover:bg-black/50"></div>
              <Image
                src={
                  userInfo?.profilePicture ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile Photo"
                width={400}
                height={400}
                className="w-full h-full rounded-full"
              />
              <div className="size-[50px] rounded-full opacity-0 group-hover:opacity-100 ease-in duration-300 bg-primary text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
                <label htmlFor="profilePhoto">
                  <input
                    type="file"
                    id="profilePhoto"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfilePhotoChange}
                  />
                  <CameraIcon size={30} className="cursor-pointer" />
                </label>
              </div>
            </div>
            {/* profile name */}
            <div className="lg:mt-20">
              <h2 className="capitalize text-[20px] lg:text-[26px] font-bold text-foreground flex items-center gap-2">
                {userInfo?.name}
                {!userInfo?.verified && (
                  <VerifiedIcon className="text-primary" size={18} />
                )}
              </h2>
              {/* following and followers */}
              <div>
                <p className="text-[16px] text-foreground">
                  {userInfo?.followers?.length} Followers{" "}
                  <b className="mx-1">.</b>
                  {userInfo?.following?.length} Followers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
