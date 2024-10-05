"use client";

import { FC, useState } from "react";
import { Tooltip } from "@components/tremor/Tooltip";

interface Props {
  children: React.ReactNode;
  side: "left" | "right" | "top" | "bottom";
  onClick?: () => void;
  clipboardText: string;
  interval?: number;
  content: string;
  className: string;
}

export const CoopyTooltip: FC<Props> = ({
  children,
  interval = 2000,
  clipboardText,
  onClick = () => {},
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(clipboardText).then(
      () => {
        setIsOpen(true);

        setTimeout(() => {
          setIsOpen(false);
        }, interval);
      },
      () => {}
    );
  };

  return (
    <>
      <Tooltip open={isOpen} onClick={copyToClipBoard} {...rest}>
        {children}
      </Tooltip>
    </>
  );
};
