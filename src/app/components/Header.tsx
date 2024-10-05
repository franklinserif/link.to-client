import { FC } from "react";
import { Navbar } from "@components/Navbar";
import { ShootingStars } from "@components/ShootingStars";
import { StarsBackground } from "@components/StarsBackground";
import { TriangleSeparator } from "@components/TriangleSeparator";

interface Props {
  children: React.ReactNode;
}

export const Header: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center flex-col items-center w-full ">
      <Navbar />
      {children}
      <ShootingStars />
      <StarsBackground />
      <div className="mt-[100px]"></div>
      <TriangleSeparator />
      <div className="h-[100px] w-full bg-white"></div>
    </div>
  );
};
