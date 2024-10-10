"use client";

import { FC } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import { BsCloudDownload } from "react-icons/bs";
import { PrimaryLink } from "@components/PrimaryLink";
import { CoopyTooltip } from "@/app/components/CopyTooltip";
import { formatDate } from "@libs/date";
import { Link } from "@interfaces/entities";

interface Props {
  link: Link;
}

export const LinkShortCard: FC<Props> = ({ link }) => {
  return (
    <div className="w-full flex justify-center items-center z-10 px-5">
      <motion.div
        className="relative w-full max-w-[420px] bg-secondary/40 p-5 flex flex-col justify-start items-center rounded-xl"
        initial={{ opacity: 0, top: 100 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="cursor-pointer relative group mt-5">
          <CoopyTooltip
            side="right"
            content="copy"
            className="relative top-[-75px] right-[-42px]"
            clipboardText={`link-to-api.onrender.com/${link.shortURL}`}
          >
            <QRCode
              value={`link-to-api.onrender.com/${link.shortURL}`}
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
          </CoopyTooltip>
        </div>
        <div className="h-[1px] w-full px-5 bg-main/30 my-5"></div>
        <div className="text-lg sm:text-xl font-sans text-white/70 font-medium relative group">
          <CoopyTooltip
            side="right"
            content="copy"
            className="relative right-[-35px]"
            clipboardText={`link-to-api.onrender.com/${link.shortURL}`}
          >
            {`link-to-api.onrender.com/${link.shortURL}`}
            <IoCopyOutline
              size={20}
              className="absolute top-1 right-[-35px] text-mainDeepDarked group-hover:text-pinkRed transition-colors hidden sm:block"
            />
          </CoopyTooltip>
        </div>
        <div className="h-[1px] w-full px-5 bg-main/30 my-5"></div>
        <div className="flex flex-col gap-x-5 text-sm font-bold uppercase text-white/40 font-sans justify-center items-center">
          <p className="flex flex-wrap justify-center items-center">
            <span className="text-mainDeepDarked min-w-[100px]">
              created at:{" "}
            </span>
            {formatDate(new Date(link.createdAt))}
          </p>
          <p className="flex flex-wrap justify-center items-center">
            <span className="text-mainDeepDarked min-w-[100px]">
              expire in:{" "}
            </span>
            {formatDate(new Date(link.expirationDate))}
          </p>
        </div>
        <div className="h-[1px] w-full px-5 bg-main/30 my-5"></div>

        <PrimaryLink href="/">Try another link!</PrimaryLink>
      </motion.div>
    </div>
  );
};
