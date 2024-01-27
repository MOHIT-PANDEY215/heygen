import React from "react";
import NavButton from "../button/NavButton";
import { FaArrowRight } from "react-icons/fa";
import VideoCard from "../video/VideoCard";

const Hero = () => {
  return (
    <section>
      <div className="pt-[4rem] w-full ">
        <div className="flex flex-col items-center text-center max-w-[740px] mx-auto px-8 gap-2">
          <h1 className="text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-medium">
            <span className="text-[#7559ff]">AI-powered video </span>
            creations at scale
          </h1>
          <p className="max-w-[450px] text-[#0c062c] text-[1rem] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            Effortlessly produce studio quality videos with AI-generated avatars
            and voices.
          </p>
          <div>
            <NavButton className="px-4" text="Get Started for free" icon={<FaArrowRight />} />
            <p className="text-sm text-[#4e5666]">No credit card needed</p>
          </div>
        </div>
      </div>
      <VideoCard/>

    </section>
  );
};

export default Hero;
