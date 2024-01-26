import Image from "next/image";
import React from "react";
// import Typewriter from "typewriter-effect";

const VideoCard = () => {
  return (
    <div className=" border border-b flex items-center justify-center">
        <video
          src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
          autoPlay
          loop
          muted
          className="rounded-[25px] w-[80%]"
        ></video>
    </div>
  );
};

function SingleImage({ src }) {
  return (
    <Image src={src} width={100} height={100} className="rounded-full" />
  );
}

export default VideoCard;
