"use client";

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShortButton } from "@components/LinkShortener/ShortButton";
import { Input } from "@components/Form/Input";
import { ErrorMessage } from "@components/LinkShortener/ErrorMessage";
import { linkShortenerFormSchema } from "@schemas/linkShortenerForm";
import { TLinkShortenerForm } from "@interfaces/linkShortenerForm";

export const LinkShortenerForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<TLinkShortenerForm>({
    mode: "onSubmit",
    resolver: zodResolver(linkShortenerFormSchema),
  });

  const onSubmit: SubmitHandler<TLinkShortenerForm> = (data) => {
    console.log("linkInput: ", data);
  };

  return (
    <form
      className="w-full flex flex-col px-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex w-full">
        <Input
          type="text"
          register={register("linkInput")}
          error={errors?.linkInput}
          required
          placeholder="write your link e.g https://www.johndoe.com"
          className="z-10 px-5 py-3 rounded-l-full w-full max-w-[700px] text-white bg-secondary/70 shadow-inner outline-none placeholder:italic placeholder:text-main"
        />
        <ShortButton isLoading={false} />
      </fieldset>
      <ErrorMessage
        error={errors.linkInput}
        onCleanError={() => clearErrors("linkInput")}
      />
    </form>
  );
};
