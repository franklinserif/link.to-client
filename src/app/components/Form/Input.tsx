import { FC, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { cn } from "@libs/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const Input: FC<Props> = ({ register, error, className, ...props }) => {
  return <input {...props} {...register} className={cn(className)} />;
};
