import { FC } from "react";

export const ShortButton: FC = () => {
  return (
    <button className="relative inline-flex h-12 w-[170px] overflow-hidden rounded-r-lg p-[1px] focus:ring-2 z-10 outline-none">
      <span className="absolute cursor-pointer inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex uppercase h-full w-full cursor-pointer items-center justify-center rounded-r-lg bg-pinkRed hover:bg-pinkRed/40 px-3 py-1 text-nowrap text-sm font-medium text-white backdrop-blur-3xl outline-none transition-all">
        shorten link
      </span>
    </button>
  );
};
