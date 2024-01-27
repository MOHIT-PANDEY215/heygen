import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import NavButton from '../button/NavButton';
import CardContainer from './CardContainer';

const VoiceSection = () => {
  return (
    <div className='mt-8 p-8 px-12 '>
      <div className='flex flex-col lg:flex-row gap-8 px-8'>
      <div className='flex flex-col gap-8 items-center lg:items-start lg:justify-evenly'>
        <div className='text-[#0c062c] text-center lg:text-start'>
            <h2 className='font-semibold text-[64px] lg:text-[128px] leading-none'>AI voices</h2>
            <p className='text-[20px] md:text-[24px] text-balance'>Select a premium voice across any style or language. Benefit from our AI-Driven text reader, infusing human-like intonation and inflections with exceptional accuracy.</p>
        </div>
        <div className='flex w-[60%] min-w-[270px]'>
          <NavButton className="px-4" text="Get Started for free" icon={<FaArrowRight />} avatar="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp" />
        </div>
      </div>
        <div className='lg:w-[50%]'>
            <CardContainer/>
        </div>
      </div>
    </div>
  )
}

export default VoiceSection
