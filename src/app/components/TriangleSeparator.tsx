import { FC } from "react";
import { cn } from "@libs/utils";

interface Props {
  main?: boolean;
}

export const TriangleSeparator: FC<Props> = ({ main }) => {
  return (
    <div className="w-full relative overflow-hidden pt-7">
      <div
        className={cn("clip-triangle z-20 bg-white h-[200px] w-full relative", {
          "bg-main": main,
        })}
      ></div>
      <div className="clip-triangle-background z-10 bg-pinkRed h-[200px] w-full absolute scale-110 bottom-[10px] left-0 right-0"></div>
    </div>
  );
};
