"use client";

import { FC } from "react";
import { cn } from "@libs/utils";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<Props> = ({
  children,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button onClick={onClick} className={cn(className)}>
      {children}
    </button>
  );
};
