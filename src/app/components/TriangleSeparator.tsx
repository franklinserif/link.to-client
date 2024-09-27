import { FC } from "react";

export const TriangleSeparator: FC = () => {
  return (
    <div className="w-full relative overflow-hidden pt-7">
      <div className="clip-triangle z-20 bg-white h-[200px] w-full relative"></div>
      <div className="clip-triangle-background z-10 bg-pinkRed h-[200px] w-full absolute scale-110 bottom-[10px] left-0 right-0"></div>
    </div>
  );
};
