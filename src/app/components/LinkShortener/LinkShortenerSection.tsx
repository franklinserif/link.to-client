"use client";

import { FC } from "react";
import { LinkShortenerInput } from "@components/LinkShortener/LinkShortenerInput";

export const LinkShortenerSection: FC = () => {
  return (
    <section className="mt-20 max-w-[800px] w-full h-[600px] flex justify-center items-center flex-col">
      <h1 className="relative z-10 text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-main  text-center font-sans font-bold">
        Paste the URL to be shortened
      </h1>
      <br />
      <LinkShortenerInput />
    </section>
  );
};
