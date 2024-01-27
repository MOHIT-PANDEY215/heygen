import React from 'react'
import NavButton from '../button/NavButton'
import { FaArrowRight } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";

import AvatarContainer from './AvatarContainer';

const Section = () => {
  return (
    <section className='bg-[#0b002c] py-8'>
      <div className='pt-8 w-[80%] mx-auto'>
        <div className='text-center p-8'>
            <h2 className='text-[60px] md:text-[64px] lg:text-[128px] text-white '>AI avatar</h2>
            <p className='text-[18px] md:text-[20px] lg:text-[24px] text-[#bbadff] '>Choose your perfect avatar covering different ethnicities, ages, poses and clothes.</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mb-4'>
          
            <NavButton className="px-4 w-full" text="Get Started for free" icon={<FaArrowRight />} avatar="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp" />

            <p className='text-[#bbadff]'>or</p>
            <div className='border-[#7559ff]'>
                <button className={`bg-[#7559ff1a] rounded-[12px] border border-[#7559ff] p-2 md:p-[1rem] backdrop-blur flex items-center gap-2`}>
                    <IoVideocamOutline size={24} color='white'/>
                    <span className='text-white'>Create your own custom avatar</span>
                </button>
            </div>
        </div>
      </div>
      <div className='my-8 overflow-x-hidden'>
        <AvatarContainer/>
      </div>
    </section>
  )
}

export default Section
