import { FC } from "react";
import Image from "next/image";

export const SecondarySection: FC = () => {
  return (
    <section className="w-full max-w-[1181px] mt-[60px] flex justify-center items-center gap-x-2 flex-wrap px-5 lg:px-0">
      <div className="w-full lg:w-[45%] order-1 lg:order-none">
        <h3 className="text-main text-5xl font-bold font-sans">
          Automated Reports & Widget Alerts
        </h3>
        <p className="text-secondary mt-[30px] text-[18px] font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet.
        </p>
      </div>
      <div className="relative w-full lg:w-[53%] h-[600px] order-2 lg:order-none">
        <Image src="/eg-client1.svg" alt="dashboard" fill />
      </div>

      <div className="relative w-full lg:w-[53%] h-[600px] order-4 lg:order-none">
        <Image src="/eg-client2.svg" alt="dashboard" fill />
      </div>
      <div className="w-full lg:w-[45%] lg:order-none order-3">
        <h3 className="text-main text-5xl font-bold font-sans">
          Fully customizable to address your needs
        </h3>
        <p className="text-secondary mt-[30px] text-[18px] font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet.
        </p>
      </div>

      <div className="w-full lg:w-[45%] order-5 lg:order-none">
        <h3 className="text-main text-5xl font-bold font-sans">
          Pre-built Dashboard Templates
        </h3>
        <p className="text-secondary mt-[30px] text-[18px] font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet.
        </p>
      </div>
      <div className="relative w-full lg:w-[53%] h-[600px] order-6 lg:order-none">
        <Image src="/eg-client3.svg" alt="dashboard" fill />
      </div>
    </section>
  );
};
