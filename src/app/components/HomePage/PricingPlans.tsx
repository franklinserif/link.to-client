import { FC } from "react";
import { cn } from "@libs/utils";
import { PRICING_PLANS } from "@constants/pricing";
import { PrimaryLink } from "@components/PrimaryLink";

export const PricingPlans: FC = () => {
  return (
    <>
      {PRICING_PLANS.map((pricingPlan) => (
        <div
          className={cn(
            " w-[340px] bg-mainDeepDarked h-[440px] flex items-center flex-col rounded-[30px] p-[50px]",
            {
              "bg-white": pricingPlan.white,
            }
          )}
          key={pricingPlan.id}
        >
          <h4
            className={cn("font-sans text-[30px] text-main font-medium", {
              "text-white": !pricingPlan.white,
            })}
          >
            {pricingPlan.title}
          </h4>
          <span className="text-secondary font-sans text-[18px] mt-3">
            {pricingPlan.description}
          </span>
          <div
            className={cn("w-full h-[1px] bg-[#D3D9E9] mt-10 font-sans", {
              "bg-[#2A407C]": !pricingPlan.white,
            })}
          ></div>
          <p
            className={cn("mt-7 text-main text-[60px] font-sans", {
              "text-white": !pricingPlan.white,
            })}
          >
            <span className="text-[30px]">$</span>
            {pricingPlan.pricing}
          </p>
          <span className="text-secondary font-sans mt-[-20px]">
            {pricingPlan.pricingDetails}
          </span>
          <PrimaryLink
            href={pricingPlan.link}
            secondary={pricingPlan.white ? false : true}
            third={pricingPlan.white ? true : false}
            className="mt-10"
          >
            Order
          </PrimaryLink>
        </div>
      ))}
    </>
  );
};
