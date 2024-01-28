import React from 'react'
import { FaDiscord, FaFacebook, FaLinkedin, FaTiktok, FaYoutube,FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NavButton from '../button/NavButton';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex flex-col gap-4  p-12 bg-[#5c46c8]'>
      
        <FooterContent/>
        <FooterSignature/>
    </div>
  )
}

function FooterContent(){
    return(
        <div className='flex flex-col lg:flex-row gap-8' >
            <div className='relative lg:h-full grow-0 lg:w-[50%] rounded-[16px]' style={{boxShadow:"0 4px 4px rgba(0,0,0,.07), 0 10px 9px rgba(0,0,0,.1), 0 19px 17px rgba(0,0,0,.13), 0 26px 30px rgba(0,0,0,.15), 0 5px 56px rgba(0,0,0,.18), 0 4px 134px rgba(0,0,0,.25)"}}>
                <div className='p-4 absolute w-full bottom-2'>
                    <NavButton className="px-4 w-full" text="Get Started for free" icon={<FaArrowRight />}/>
                </div>
                <div>
                    <div className=''>
                        <video src="https://resource.heygencdn.com/website/vera_remove/footer_new2.mp4" muted autoPlay loop className='aspect-video h-full w-auto mr-auto ml-auto object-cover rellative rounded-[16px]'></video>
                    </div>
                </div>
            </div>

            <div className='bg-[#e6e0f4] rounded-[16px] p-8 flex flex-col grow-[2] md:flex-row md:justify-between gap-8' style={{boxShadow:"0 4px 4px rgba(0,0,0,.07), 0 10px 9px rgba(0,0,0,.1), 0 19px 17px rgba(0,0,0,.13), 0 34px 30px rgba(0,0,0,.15), 0 64px 56px rgba(0,0,0,.18), 0 150px 134px rgba(0,0,0,.25)"}}>
                <div>
                    <div className='text-[#7559ff] mb-4 font-semibold'>Use Cases</div>
                    <div className='text-[#0c062c] text-[14px]'>
                        <p>Explainer & How to</p>
                        <p>Marketing</p>
                        <p>Training & Onboarding</p>
                    </div>
                </div>
                <div>
                <div className='text-[#7559ff] mb-4 font-semibold'>Features</div>
                    <div className='text-[#0c062c] text-[14px]'>
                        <p>Instant Avatar</p>
                        <p>Studio Avatar </p>
                        <p>Video Translate </p>
                        <p>Voice Cloning </p>
                        <p>Photo Avatar </p>
                        <p>AI Voices </p>
                        <p>Personalised Video </p>
                        <p>Streaming Avatar </p>
                        <p>AI Avatars </p>
                        <p>HeyGen API </p>
                        <p>Zapier</p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <div className='text-[#7559ff] mb-4 font-semibold'>Resources</div>
                    <div className='text-[#0c062c] text-[14px]'>
                        <p>FAQ </p>
                        <p>Blog </p>
                        <p>Tutorial </p>
                        <p>Weekly Webinar </p>
                        <p>Case Studies </p>
                        <p>Help Center </p>
                        <p>Alternative </p>
                        <p>Ambassador Program </p>
                        <p>Creator Fund </p>
                        <p>Affiliate Program </p>
                        <p>Status</p>
                    </div>
                    
                </div>
                <div>
                <div className='text-[#7559ff] mb-4 font-semibold'>Company</div>
                <div className='text-[#0c062c] text-[14px]'>
                <p>About Us </p>
                <p>Careers </p>
                <p>Privacy Policy </p>
                <p>Terms of Service </p>
                <p>Security Portal </p>
                <p>Ethics </p>
                <p>Moderation Policy </p>
                <p>Contact</p>
                </div>
                
                </div>
            </div>
        </div>
    )
}

function FooterSignature(){
    return(
        <div className='flex flex-col gap-8 md:flex-row md:justify-between md:items-center ' >
        <div className='flex flex-col gap-12 items-center sm:items-start' >
            <div className='text-[#c3c3c3] flex flex-col items-center sm:items-start text-[12px]'>
                <div>
                    ©Copyright 2023 HeyGen
                </div>
                <div>
                    12130 Millennium Drive Suite 300, Los Angeles, CA 90094
                </div>
            </div>
            <div className='flex gap-8'>
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65647d34db6c7206296b9b5a_cai.svg" alt="" width={60} height={20} className='max-w-full'/>
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65647d339c017f844ae8fe20_c2pa.svg" alt="" width={30} height={10} className='max-w-full'/>
            </div>
        </div>

        <div className="logo flex gap-4 text-[#bbbbbb] justify-between sm:justify-normal ">
            <div className='w-[24px]'>
                <FaLinkedin className='text-[24px] sm:text-[18px]'/>
            </div>
            <div>
                <FaTiktok className='text-[24px] sm:text-[18px]'/>
            </div>
            <div>
                <FaYoutube className='text-[24px] sm:text-[18px]'/>
            </div>
            <div>
                <FaXTwitter className='text-[24px] sm:text-[18px]'/>
            </div>
            <div>
                <FaFacebook className='text-[24px] sm:text-[18px]'/>
            </div>
            <div>
                <FaDiscord className='text-[24px] sm:text-[18px]'/>
            </div>
        </div>
      </div>
    )
}



export default Footer
