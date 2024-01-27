import React from 'react'
import NavButton from '../button/NavButton'
import { FaArrowRight } from "react-icons/fa";
import CardSection from './CardSection';

const Main = () => {
  return (
    <div className='pt-16 overflow-x-hidden flex flex-col gap-4'>
      <div className='px-4 w-full max-w-[77rem] mx-auto flex flex-col-reverse lg:flex-row gap-8 '>
        <div className='xl:max-w-[30%]'>
            <h2 className='text-[#0c062c] text-[60px] sm:text-[64px] lg:text-[128px] font-semibold tracking-[-5px] leading-none'>How it works</h2>
        </div>
        <div>
            <video src="https://resource.heygencdn.com/website/vera_remove/howitworks_new2.mp4" className='w-[110%] rounded-[20px]' autoPlay muted loop></video>
        </div>
      </div>
      <div className='px-4 lg:max-w-[77rem] lg:mx-auto flex flex-col-reverse lg:flex-row justify-around  gap-4'>
      <NavButton className="px-4 w-full" text="Get Started for free" icon={<FaArrowRight />} />
      <p className='text-[#0c062c] xl:w-[60%]  w-full lg:text-[24px] text-balance'>Whether you&apos;re a professional or beginner, you can create stunning videos in minutes instead of hours.</p>
      </div>
      <CardSection/>
    </div>
  )
}

export default Main
