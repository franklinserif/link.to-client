import { FC } from "react";
import Image from "next/image";

export const MainSection: FC = () => {
  return (
    <section className="w-full min-h-[500px] pb-5 flex items-center flex-col bg-white z-10 px-5 lg:px-0">
      <h2 className="text-5xl font-bold text-main font-sans">Main Features</h2>
      <div className="max-w-[1181px] w-full">
        <p className="text-secondary w-full text-justify mt-8 font-sans">
          Shorten, Manage, and Analyze Your Links Easily Welcome to our link
          shortening platform, designed to simplify the management of your URLs
          and help you gain valuable insights into your links. With us, you can:
          Shorten your links in just one click, turning long and complex URLs
          into short, easy-to-share links.
          <br />
          <br />
          Register your account to access a personalized dashboard where you can
          manage all the links you've created. Monitor your links with detailed
          statistics, including the number of visits each link receives. Manage
          temporary links that automatically expire to keep your database
          organized.
        </p>

        <div className="w-full flex flex-wrap lg:flex-nowrap  gap-5 justify-center items-center mt-[81px]">
          <div className="w-full flex items-center flex-col">
            <picture className="h-[60px] w-[60px] relative">
              <Image src="/clock.svg" fill alt="Monitoring 24/7" />
            </picture>
            <span className="font-bold text-main mt-[28px] font-sans">
              Monitoring 24/7
            </span>
            <p className="max-w-[500px] text-secondary text-center mt-4 font-sans">
              Monitor your links with detailed statistics, manage temporary
              links, visits, and specific information about every vists like
              browser, os, ip, etc
            </p>
          </div>

          <div className="w-full flex items-center flex-col">
            <picture className="h-[60px] w-[60px] relative">
              <Image src="/computer.svg" fill alt="Monitoring 24/7" />
            </picture>
            <span className="font-bold text-main mt-[28px] font-sans">
              Create account
            </span>
            <p className="max-w-[500px] text-secondary text-center mt-4 font-sans">
              Access a personalized dashboard where you can manage all the links
              you have created, and have controll all over your links, manage
              the states.
            </p>
          </div>

          <div className="w-full flex items-center flex-col">
            <picture className="h-[60px] w-[60px] relative">
              <Image src="/rocket.svg" fill alt="Monitoring 24/7" />
            </picture>
            <span className="font-bold text-main mt-[28px] font-sans">
              Acortar tus enlaces
            </span>
            <p className="max-w-[500px] text-secondary text-center mt-4 font-sans">
              Just one click, transforming long and complex URLs into short and
              easy-to-share links. And record every visits and click your link
              have
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
