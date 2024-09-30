import { FC } from "react";
import { TriangleSeparator } from "@components/TriangleSeparator";
import { PricingPlans } from "./PricingPlans";

export const Pricing: FC = () => {
  return (
    <div className="w-full">
      <TriangleSeparator main />
      <div className="w-full bg-main px-5 lg:px-0 flex justify-center">
        <div className="px-5 lg:px-0 w-full max-w-[1181px] flex flex-col items-center">
          <h3 className="text-5xl text-center text-white font-bold font-sans">
            Pricing Plans
          </h3>
          <span className="text-secondary font-sans mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.
          </span>
          <div className="w-full mt-20 flex gap-20 justify-center flex-wrap lg:flex-nowrap">
            <PricingPlans />
          </div>
        </div>
      </div>
    </div>
  );
};
