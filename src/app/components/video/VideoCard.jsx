import Image from "next/image";
import React from "react";
import TypeEffect from "../hero/TypeEffect";


const VideoCard = () => {
  return (
    <div className="my-6 border border-b flex items-center justify-center relative mt-32">
        <video
          src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
          autoPlay
          loop
          muted
          className="rounded-[25px] w-[80%] lg:w-[60%]"
        ></video>

<div 
  className="absolute top-[-8rem] left-3 md:left-8 bg-[#e9e4f5] min-h-[50%] leading-tight md:p-4 rounded-[16px]" 
  style={{backdropFilter: "blur(30px)", boxShadow: "0 60px 120px rgba(11,0,70,.7)" }}
>
  <TypeEffect/> 
</div>
    </div>
  );
};

function SingleImage({ src }) {
  return (
    <Image src={src} width={100} height={100} className="rounded-full" alt="" />
  );
}

export default VideoCard;
