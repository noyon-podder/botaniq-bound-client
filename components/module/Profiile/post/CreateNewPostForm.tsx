/* eslint-disable @next/next/no-img-element */
"use client";

import LeafForm from "@/components/form/LeafForm";
import LeafInput from "@/components/form/LeafInput";
import LeafRichEditor from "@/components/form/LeafRichEditor";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@/context/UserProvider";
import { useCreatePost } from "@/hooks/post.hook";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const CreateNewPostForm = () => {
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const { mutate: handleCreateNewPost, isPending } = useCreatePost();

  // SUbmit value
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    const postData = {
      title: data.title,
      content: data.content,
      category: selectedCategory,
      author: user?._id,
    };

    formData.append("data", JSON.stringify(postData));

    for (const image of imageFiles) {
      formData.append("postImages", image);
    }

    handleCreateNewPost(formData);
    setImageFiles([]);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {isPending && <Loading />}
      <div className="mt-10 lg:px-20 px-10">
        <LeafForm onSubmit={onSubmit}>
          <div>
            <LeafInput type="text" label="Title" name="title" />
          </div>

          <div className="mb-4">
            <LeafRichEditor name="content" label="Write your post " />
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <div className="min-w-fit flex-1">
                <label
                  className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400 text-base bg-gray-100 dark:bg-[#2f2f31]"
                  htmlFor="image"
                >
                  Upload image
                </label>
                <input
                  multiple
                  className="hidden"
                  id="image"
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
              {imagePreviews.length > 0 && (
                <div className="flex gap-5 my-5 flex-wrap">
                  {imagePreviews.map((imageDataUrl) => (
                    <div
                      key={imageDataUrl}
                      className="relative size-40 rounded-xl border-2 border-dashed border-default-300 p-2"
                    >
                      <img
                        alt="item"
                        className="h-full w-full object-cover object-center rounded-md"
                        src={imageDataUrl}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-full h-12 focus:border-primary outline-none focus:outline-none bg-gray-100 dark:bg-[#2f2f31]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=" Vegetables"> Vegetables</SelectItem>
                  <SelectItem value="Flowers">Flowers</SelectItem>
                  <SelectItem value="Landscaping">Landscaping</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-start mt-10">
            <Button type="submit" className="px-10 py-4">
              Submit
            </Button>
          </div>
        </LeafForm>
      </div>
    </div>
  );
};

export default CreateNewPostForm;
