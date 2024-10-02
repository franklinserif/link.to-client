"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { cn } from "@libs/utils";
import { Logo } from "@components/Logo";
import { PrimaryLink } from "@components/PrimaryLink";
import { Button } from "@components/Button";
import { MAIN_MENU } from "@constants/navbar";

export const Navbar: FC = () => {
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);

  const handleResponiveMenu = () => {
    setIsResponsiveMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="z-30 w-full flex flex-col items-center">
      <nav className="flex items-center lg:mt-[50px] py-8 lg:py-0 w-full h-[30px] max-w-[1181px] px-5 bg-main md:md-transparent box-border shadow-2xl lg:shadow-none">
        <ul className="flex mr-auto lg:mr-[81px] items-center">
          <li>
            <Logo />
          </li>
        </ul>
        <ul className="hidden lg:flex gap-[36px] flex-nowrap items-center mr-auto">
          {MAIN_MENU.map((link) => (
            <li key={link.id} className="hidden md:block">
              <PrimaryLink href={link.href}>{link.text}</PrimaryLink>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-10 flex-nowrap text-xl lg:text-base">
          <li>
            <PrimaryLink href="/singin">Sign In</PrimaryLink>
          </li>
          <li className="hidden lg:block">
            <PrimaryLink href="/signup" secondary>
              Sign up
            </PrimaryLink>
          </li>
          <li className="block lg:hidden">
            <Button onClick={handleResponiveMenu}>
              <Image
                src={isResponsiveMenuOpen ? "/x-menu.svg" : "/menu-icon.svg"}
                width={30}
                height={30}
                alt="hamburger menu"
              />
            </Button>
          </li>
        </ul>
      </nav>
      <div
        className={cn(
          "absolute lg:hidden bg-main top-0 right-0 left-0 bottom-[100%] transition-all duration-300 z-[100] opacity-0  overflow-hidden shadow-xl",
          {
            "top-[64px] right-0 left-0 bottom-[69%] opacity-[100%]":
              isResponsiveMenuOpen,
          }
        )}
      >
        <ul className="flex flex-col justify-center bg-main ">
          <div className="mt-[20px]"></div>
          {MAIN_MENU.map((link) => (
            <li
              key={link.id}
              className="py-4 px-10 w-full text-lg text-right border-b-[1px] border-[#15234d] hover:bg-secondary/10"
            >
              <PrimaryLink href={link.href}>{link.text}</PrimaryLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
