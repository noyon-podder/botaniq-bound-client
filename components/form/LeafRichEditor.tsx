"use client";

import dynamic from "next/dynamic";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
// import ReactQuill from "react-quill";

interface IProps {
  label: string;
  name: string;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const LeafRichEditor = ({ label, name }: IProps) => {
  const {
    control,
    // register,
    formState: { errors },
  } = useFormContext();
  const isError = !!errors[name];
  return (
    <div className="mb-5">
      {Label ? (
        <Label
          htmlFor={name}
          className="mb-3 block font-semibold text-popover capitalize"
        >
          {label}
        </Label>
      ) : null}
      <Controller
        name="content"
        control={control}
        defaultValue="" // Initial value for the editor
        render={({ field }) => (
          <ReactQuill
            {...field}
            className=" text-base bg-gray-100 focus:border-primary custom-quill dark:bg-[#2f2f31] border-[#2f2f31] dark:text-white"
          />
        )}
      />
      {isError && (
        <p className="text-red-500 mt-1 dark:text-red-700 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default LeafRichEditor;
