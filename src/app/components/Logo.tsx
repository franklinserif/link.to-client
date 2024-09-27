import { FC } from "react";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <div className="relative h-[30px] w-[120px] md:h-[40px] md:w-[152px]">
      <Image src="/logo.svg" alt="link-to" layout="fill" objectFit="contain" />
    </div>
  );
};
