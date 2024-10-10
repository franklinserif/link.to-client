"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShortButton } from "@components/LinkShortener/ShortButton";
import { InputIntelligent } from "@components/Form/InputIntelligent";
import { ErrorMessage } from "@components/LinkShortener/ErrorMessage";
import { linkShortenerFormSchema } from "@schemas/linkShortenerForm";
import { HTTPLinks } from "@http/links";
import { TLinkShortenerForm } from "@interfaces/linkShortenerForm";

export const LinkShortenerForm: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<TLinkShortenerForm>({
    mode: "onSubmit",
    resolver: zodResolver(linkShortenerFormSchema),
  });

  const onSubmit: SubmitHandler<TLinkShortenerForm> = async (data) => {
    setIsLoading(true);
    const [link, error] = await HTTPLinks.createLink(data.linkInput);

    setIsLoading(false);
    if (error) {
      return setErrorMessage(error);
    }

    if (link) {
      router.push(`/?id=${link.id}`);
    }
  };

  return (
    <form
      className="w-full flex flex-col px-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex w-full">
        <InputIntelligent
          type="text"
          prefix="https://"
          register={register("linkInput")}
          error={errors?.linkInput}
          required
          placeholder="https://www.subdomain.example.com/services/web-development/mobile-development"
          className="z-10 px-5 py-3 rounded-l-full w-full text-white bg-secondary/70 shadow-inner outline-none placeholder:italic placeholder:text-main focus:border-none"
        />
        <ShortButton isLoading={isLoading} />
      </fieldset>
      <ErrorMessage
        error={errors.linkInput || errorMessage}
        onCleanError={() => clearErrors("linkInput")}
      />
    </form>
  );
};
