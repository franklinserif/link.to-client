"use client";

import { FC, useState } from "react";
import { Tooltip } from "@components/tremor/Tooltip";

interface Props {
  children: React.ReactNode;
  side: "left" | "right" | "top" | "bottom";
  interval?: number;
  content: string;
  className: string;
}

export const SimplefyTooltip: FC<Props> = ({
  children,
  interval = 3000,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, interval);
  };

  return (
    <>
      <Tooltip open={isOpen} onClick={handleChange} {...rest}>
        {children}
      </Tooltip>
    </>
  );
};
