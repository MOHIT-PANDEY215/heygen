import React from 'react'
import NavButton from '../button/NavButton'
import { FaArrowRight } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

const AvatarContainer = () => {
  return (
    <div className='p-8 min-w-full flex flex-col gap-8 lg:ml-[80px] '>
      <div>
      <AvatarCard text="Instant avatar" para="A lifestyle avatar in a natural setting" video="https://resource.heygencdn.com/homepage/AIavatar_instant4.mp4"/>
      </div>
      <div>
      <AvatarCard text="Studio avatar" para="A professional-grade avatar for diverse application" video="https://resource.heygencdn.com/website/vera_remove/aiavatar_studio3.mp4"/>
      </div>
      <div>
      <AvatarCard text="Photo avatar" para="A dynamically animated photograph" video="https://resource.heygencdn.com/homepage/AIavatar_photo4.mp4"/>
      </div>
    </div>
  )
}

function AvatarCard({text,para,video}){
    return(
        <div className='flex flex-col lg:flex-row gap-8  items-start mx-auto lg:items-center justify-between'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col'>
                    <h3 className='text-[48px] text-white'>{text}</h3>
                    <p className='text-[20px] text-[#bbadff] max-w-[300px]'>{para}</p>
                </div>
                <div>
                    <NavButton className="w-full" text="Get Started for free" icon={<FaArrowRight />} />
                </div>
            </div>
                <div className='w-full md:w-[80%] '>
                    
                    <div className='w-[80%] lg:ml-auto relative'>
                    <span className='absolute left-2 top-2 cursor-pointer z-[3] '>
                        <button className={` rounded-[12px] border-2 border-[#ffffff1a] p-3 bg-[#00000080] flex items-center gap-2`}>
                            <IoPlayOutline color='white' size={12}/>
                        </button>
                    </span>
                    <video src={video} className='rounded-[25px]' autoPlay muted loop></video>
                    </div>
                </div>
            
        </div>
    )
}

export default AvatarContainer
