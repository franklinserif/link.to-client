"use client";

import { FC } from "react";
import { ShortButton } from "@components/LinkShortener/ShortButton";

export const LinkShortenerInput: FC = () => {
  return (
    <div className="w-full flex px-5">
      <input
        type="text"
        placeholder="write your link e.g https://www.johndoe.com"
        className="z-10 px-5 py-3 rounded-l-full w-full max-w-[700px] text-white bg-secondary/40 shadow-inner outline-none placeholder:italic placeholder:text-main"
      />
      <ShortButton />
    </div>
  );
};
