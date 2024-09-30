import { FC } from "react";
import Image from "next/image";
import { PrimaryLink } from "./PrimaryLink";
import { MAIN_MENU } from "@constants/navbar";

export const Footer: FC = () => (
  <footer className="mt-[100px] w-full flex justify-center px-5">
    <div className="w-full max-w-[1181px] flex flex-col">
      <div className="w-full h-[1px] bg-[#2A407C]"></div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[63px] pb-5">
        <div className="relative h-[30px] w-[120px] md:h-[40px] md:w-[152px]">
          <Image src="/logo-gray.svg" alt="link-to" fill />
        </div>
        <ul className="flex gap-[36px] flex-wrap lg:flex-nowrap items-center justify-center mt-8 lg:mt-0">
          {MAIN_MENU.map((link) => (
            <li key={link.id}>
              <PrimaryLink href={link.href}>{link.text}</PrimaryLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
