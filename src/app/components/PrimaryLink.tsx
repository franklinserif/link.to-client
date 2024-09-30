import { FC } from "react";
import Link from "next/link";
import { cn } from "@libs/utils";

interface Props {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  third?: boolean;
  className?: string;
}

export const PrimaryLink: FC<Props> = ({
  href,
  children,
  secondary = false,
  third = false,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "box-border text-secondary font-sans cursor-pointer hover:text-secondary/90 transition-colors text-nowrap",
        className,
        {
          "px-[50px] py-[7px] rounded-full border-[1px] border-secondary hover:bg-secondary/70 hover:text-main":
            secondary,
          "px-[50px] py-[7px] rounded-full border-[1px] border-pinkRed bg-pinkRed hover:bg-pinkRed/40 text-white hover:text-pinkRed":
            third,
        }
      )}
    >
      {children}
    </Link>
  );
};
