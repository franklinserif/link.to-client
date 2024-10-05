"use client";

import { FC } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
  onCleanError?: () => void;
}

export const ErrorMessage: FC<Props> = ({ error, onCleanError = () => {} }) => {
  return (
    error && (
      <div className="relative w-full flex justify-center items-center">
        <div className="absolute top-1 bg-white/20 px-5 py-3 rounded-lg flex flex-col items-center mt-5 shadow-2xl">
          <button
            onClick={onCleanError}
            className="absolute top-0 z-10 ml-auto right-0 rounded-full w-5 h-5 text-pinkRed flex justify-center items-center"
          >
            x
          </button>
          <span className="text-pinkRed font-sans font-bold text-xl ">
            Ooops
          </span>
          <span className="text-main font-sans text-lg">
            {error.message || " Must provide a valid url"}
          </span>
        </div>
      </div>
    )
  );
};
