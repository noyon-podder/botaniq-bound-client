"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LeafInput = ({
  name,
  type,
  placeholder,
  className,
  label,
  value,
  onChange,
  defaultValue,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { onChange: formOnChange, ...rest } = register(name);

  const isError = !!errors[name];
  return (
    <div className="mb-5">
      {label ? (
        <Label
          htmlFor={name}
          className="mb-3 block font-semibold text-popover capitalize"
        >
          {label}
        </Label>
      ) : null}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        id={name}
        className={cn(
          className,
          isError
            ? "border-red-500 dark:border-red-700"
            : "focus:dark:border-primary focus:border-primary"
        )}
        onChange={(e) => {
          formOnChange(e);
          if (onChange) {
            onChange(e);
          }
        }}
        {...rest}
      />
      {isError && (
        <p className="text-red-500 mt-1 dark:text-red-700 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default LeafInput;
