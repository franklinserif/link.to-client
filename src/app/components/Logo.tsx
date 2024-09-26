import { FC } from "react";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="link-to"
        height={40}
        width={153}
        priority
        style={{ width: 153, height: 40 }}
      />
    </div>
  );
};
