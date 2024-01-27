import React from 'react'
import NavButton from '../button/NavButton'
import { FaArrowRight } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";
import PlayButton from '../button/PlayButton';

const GridHero = () => {
  return (
    <div className="py-12 px-4 md:px-[2rem] lg:px-[6rem] bg-gradient-to-b from-[#49389e] to-[#100933] mx-auto">
        <div className="py-4">
            <h2 className='text-[60px] md:text-[72px] w-full md:w-[70%] lg:w-[50%] text-white text-semibold'>Create videos for every team</h2>
            <p className='md:hidden my-[24px] text-semibold text-[18px] text-white'>Engage, explain, entertain - AI-Powered video creation for any need.</p>
        </div>
        <div className='grid grid-cols-2 gap-x-[24px] gap-y-[24px]'>
            <div className="flex flex-col gap-4">
                <GridCard src="https://resource.heygencdn.com/homepage/usecase_sales2.mp4" text="Sales Outreach" spanText="that converts" para="Create personalized outreach videos at scale"/>

                <GridCard src="https://resource.heygencdn.com/homepage/usecase_mailchimp2.mp4" text="Content Marketing" spanText="that engage" para="Supercharge your content calendar with videos"/>
            </div>
            <div className="flex flex-col gap-4">
                <p className='hidden md:block my-[24px] text-semibold text-[24px] text-white'>Engage, explain, entertain - AI-Powered video creation for any need.</p>
            
                <GridCard src="https://resource.heygencdn.com/homepage/usecase_productmarketing2.mp4" text="Product Marketing" spanText="that resonates" para="Produce engaging & concise product videos"/>
                

                <GridCard src="https://resource.heygencdn.com/website/vera_remove/usecase_lnd2_new_output.mp4" text="Learning & Development" spanText="that teaches" para="Create training videos your team will actually watch" />
            </div>
            

            
      </div>
    </div>
  )
}

function GridCard({src,text,spanText,para}){
    return(
        <div className='text-white relative'>
            <video src={src} muted autoPlay loop className='rounded-[16px] md:rounded-[25px] md:rounded-b-none '></video>
            <span className='md:hidden flex absolute top-8 sm:top-24 left-4 sm:left-6 z-[2] '>
            <PlayButton className="md:hidden absolute top-0" icon={<IoPlayOutline />} blur/>
            </span>
            <div className='relative p-2 md:p-4 pb-8'>
                <div className='relative z-[1] flex justify-between'>
                    <div>
                        <h2 className='text-[16px] md:text-[20px]'>
                            {text}
                            <br />
                            <span className='text-[#bbadff]'>{spanText}</span>
                        </h2>
                        <p className='text-[#bcc1cc] text-[14px]'>{para}</p>
                    </div>
                    <div className='hidden lg:flex items-end gap-2'>
                    <NavButton className="px-4" text="Get Started" icon={<FaArrowRight />} />
                    <PlayButton icon={<IoPlayOutline />}/>
                    </div>
                </div>
                <div className="hidden md:block h-full bg-gradient-to-r from-[#0b071e] to-[#0b071e] absolute top-auto bottom-0 left-0 right-0 p-2 rounded-b-[25px]"></div>
            </div>
        </div>
    )
}

export default GridHero
