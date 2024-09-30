import { FC } from "react";
import { MainSection } from "./MainSection";
import { SecondarySection } from "./SecondarySection";
import { Pricing } from "./Pricing";

export const HomePageContent: FC = () => {
  return (
    <div className="w-full z-10 bg-white flex flex-col justify-center items-center">
      <MainSection />
      <SecondarySection />
      <Pricing />
    </div>
  );
};
