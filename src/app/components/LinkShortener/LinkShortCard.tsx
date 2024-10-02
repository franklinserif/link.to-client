import { FC } from "react";
import QRCode from "react-qr-code";
import { IoCopyOutline } from "react-icons/io5";
import { BsCloudDownload } from "react-icons/bs";
import { PrimaryLink } from "../PrimaryLink";

export const LinkShortCard: FC = () => {
  return (
    <div className="w-full flex justify-center items-center z-10 px-5">
      <div className="w-full max-w-[420px] bg-secondary/40 p-5 flex flex-col justify-start items-center rounded-xl">
        <button className="cursor-pointer relative group mt-5">
          <QRCode
            value="https://link-to.com/x2ddsl"
            bgColor="#ff00"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: 170,
              maxHeight: 170,
            }}
          />
          <BsCloudDownload
            size={20}
            className="absolute top-0 right-[-42px] text-mainDeepDarked group-hover:text-pinkRed transition-colors hidden sm:block"
          />
        </button>
        <div className="h-[1px] w-full px-5 bg-main/30 my-5"></div>
        <button className="text-lg sm:text-2xl font-sans text-white/70 font-medium relative group">
          link-to.com/x2ddsl
          <IoCopyOutline
            size={20}
            className="absolute top-1 right-[-35px] text-mainDeepDarked group-hover:text-pinkRed transition-colors hidden sm:block"
          />
        </button>
        <div className="h-[1px] w-full px-5 bg-main/30 my-5"></div>
        <div className="flex flex-wrap gap-x-5 text-sm font-bold uppercase text-white/40 font-sans justify-center items-center">
          <p className="flex flex-wrap justify-center items-center">
            <span className="text-mainDeepDarked min-w-[100px]">
              created at:{" "}
            </span>
            mon 20, oct 2024
          </p>
          <p className="flex flex-wrap justify-center items-center">
            <span className="text-mainDeepDarked  min-w-[100px]">
              expire in:{" "}
            </span>
            mon 20, oct 2025
          </p>
        </div>
        <div className="h-[1px] w-full px-5 bg-main/30 my-5"></div>

        <PrimaryLink href="/">Try another link!</PrimaryLink>
      </div>
    </div>
  );
};
