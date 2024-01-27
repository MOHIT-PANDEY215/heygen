import React from 'react'
import style from './Feature.module.css'
import { Button } from '@/components/ui/button'
import { IoPlayOutline } from "react-icons/io5";
import Image from 'next/image';


const Feature = () => {
  return (
    <div className={`${style.section} px-12 flex item-center `}>
        <div className='lg:w-[80%] lg:mx-auto'>
        <div className=' p-8 py-12 my-12'>
            <div className=''>
                <div className='mb-8 text-[#0c062c]'>
                    <h2 className=' text-[60px] lg:text-[128px]'>Features for scale</h2>
                    <p className='text-[20px] lg:text-[24px]'>A full-featured platform for flawless video creation.</p>
                </div>
                
            </div>
            <div className='flex flex-col items-center gap-8 '>
                <div className={`${style.featureWrapper1}`}>
                    <VideoCard/>
                    <VideoCard2/>
                </div>
                <div className={`${style.featureWrapper2}`}>
                    <VideoCard3/>
                    <VideoCard4/>
                </div>
                <div className={`${style.featureWrapper3}`}>
                    <VideoCard2/>
                    <VideoCard3/>
                </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}

function VideoCard(){
    return(
        <div className='gap-4 flex flex-col relative rounded-[16px] w-full'>
            <div className="button absolute z-[3] ml-3 mt-3">
                <button className='rounded-[16px] p-4 text-white bg-[#1a1917] flex gap-1 items-center'>
                    <IoPlayOutline/>
                    <span>Nikki in Spanish</span>
                </button>
            </div>
            <div className="leading-none absolute bottom-0 z-[3] p-4 flex flex-col gap-3 text-white">
                <h2 className='text-[16px] sm:text-[20px]'>Video Translator</h2>
                <p className='text-[14px] sm:text-[16px]'>Effortlessly translate your videos using our one-click solution that clones your natural speaking voice and style for seamless delivery in other languages.</p>
                <div className='w-fit'>
                    <Button variant="outline">Learn More</Button>
                </div>
            </div>
            
                <video className='w-full aspect-[9/12]  h-full rounded-[16px] object-cover z-[2]' src="https://resource.heygencdn.com/homepage/vt5s2.mp4"  muted ></video>
            
            
        </div>
    )
}

function VideoCard2(){
    return(
        <div className='gap-4 flex flex-col justify-between bg-gradient-to-b from-[#f1eeff] to-[#bbadff] rounded-[16px] w-full'>
            <div className="leading-none z-[3] p-4 flex flex-col gap-3 text-[#0c062c]">
                <h2 className='text-[16px] sm:text-[24px] font-semibold'>API</h2>
                <p className='text-[#0c062c] text-[14px] sm:text-[16px]'>Integrate HeyGen&apos;s powerful AI capabilities into your product and create amazing avatar videos programmatically with HeyGen&apos;s API.</p>
            </div>
            
                <div className='w-full'>
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature.webp" alt="" sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, (max-width: 1439px) 46vw, 574px" srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-500.png 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-800.png 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-1080.png 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature.webp 1142w" width={100} height={100} className='w-full'/>
                </div>
            
            
        </div>
    )
}

function VideoCard3(){
    return(
        <div className='gap-4 flex flex-col justify-between bg-[#e3ddf2] rounded-[16px] w-full'>
            <div className="leading-none z-[3] p-8 flex flex-col gap-3 text-[#0c062c]">
                <h2 className='text-[16px] sm:text-[24px] font-semibold'>ChatGPT script writer</h2>
                <p className='text-[#0c062c] text-[14px] sm:text-[16px]'>Accelerate your video creation with our AI writing assistant.</p>
            </div>
            
                <div className='w-full px-4'>
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564332ddcbd1d3b7f4c98bd_feature_script_img.svg" alt=""  width={100} height={100} className='w-full rounded-t-[16px] object-cover' />
                </div>
            
            
        </div>
    )
}

function VideoCard4(){
    return(
        <div className='gap-4 flex flex-col justify-between bg-[#341da6] rounded-[16px] w-full'>
            <div className="leading-none z-[3] p-8 flex flex-col gap-3 text-white">
                <h2 className='text-[16px] sm:text-[24px] font-semibold'>AI Outfits</h2>
                <p className='text-[14px] sm:text-[16px]'>Elevate your avatar for any occasion with a wide range of customizable clothing options.</p>
            </div>
            
                <div className='w-full px-4'>
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4.webp" alt="" sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 29vw, 370px" srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4.webp 738w"  width={100} height={100} className='w-full object-cover rounded-t-[16px]'/>
                </div>
            
            
        </div>
    )
}

function VideoCard5(){
    return(
        <div className='gap-32 flex flex-col justify-between bg-[#e6e0f4] rounded-[16px] w-full'>
            <div className="leading-none z-[3] p-8 flex flex-col gap-3 text-[#0c062c]">
                <h2 className='text-[16px] sm:text-[24px] font-semibold'>Integrations</h2>
                <p className='text-[14px] sm:text-[16px]'>Using HeyGen couldn’t be easier, streamline your video creation process from your favorite platform.</p>
            </div>
            
                <div className='px-4 grid grid-cols-3'>
                    <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437be31f6f4a6fe2e16a6_zapier.webp" alt=""  width={100} height={100} className=' rounded-[24px] '/>
                    <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437c09837db5b566a7bae_canva.webp" alt=""  width={100} height={100} className=' rounded-[24px] '/>
                    <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437bdf32c4fcae5438b29_chatgpt.webp" alt=""  width={100} height={100} className=' rounded-[24px] '/>
                </div>
            
            
        </div>
    )
}
export default Feature
