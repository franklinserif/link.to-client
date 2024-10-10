import { FC, useState, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@libs/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError;
  prefix: string;
}

export const InputIntelligent: FC<Props> = ({
  register,
  error,
  className,
  placeholder,
  ...props
}) => {
  const [missMatchPlaceholder, setMissMatchPlaceholder] =
    useState<boolean>(true);
  const { onChange } = register;

  const handleMatchPrefix = (text: string) => {
    const matchesPlaceholder = Boolean(placeholder?.startsWith(text));
    setMissMatchPlaceholder(matchesPlaceholder);
  };

  return (
    <div className="w-full relative z-10 px-0 m-0 bg-secondary/40 rounded-s-full border-none">
      <input
        onChange={() => {}}
        type="text"
        autoComplete="off"
        value={missMatchPlaceholder ? placeholder : ""}
        className="z-20 bg-transparent absolute w-full h-[49px] ring-0 focus:ring-0 border-none focus:border-none text-secondary rounded-s-full"
      ></input>
      <input
        {...props}
        {...register}
        onChange={(event) => {
          onChange(event);
          handleMatchPrefix(event.target.value?.trim());
        }}
        className={cn(
          className,
          "z-30 bg-transparent absolute ring-0 focus:ring-0 border-none focus:border-none w-full h-[49px] p-3"
        )}
      />
    </div>
  );
};
