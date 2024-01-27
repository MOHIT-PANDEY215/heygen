import React from 'react'
import style from './Feature.module.css'
import { Button } from '@/components/ui/button'
import { IoPlayOutline } from "react-icons/io5";


const Feature = () => {
  return (
    <div className={`${style.section} px-12`}>
        <div className=' p-8 py-12 my-12'>
            <div className=''>
                <div className='mb-8 text-white'>
                    <h2 className=' text-[60px] lg:text-[128px]'>Features for scale</h2>
                    <p className='text-[20px] lg:text-[24px]'>A full-featured platform for flawless video creation.</p>
                </div>
                
            </div>
            <div className='flex flex-col items-center gap-8 '>
                <div className={`${style.featureWrapper1}`}>
                    <VideoCard/>
                    <VideoCard/>
                </div>
                <div className={`${style.featureWrapper2}`}>
                    <VideoCard/>
                    <VideoCard/>
                </div>
                <div className={`${style.featureWrapper3}`}>
                    <VideoCard/>
                    <VideoCard/>
                </div>
            
            </div>
        </div>
    </div>
  )
}

function VideoCard({src,title,para}){
    return(
        <div className='gap-4 flex flex-col relative border-2 rounded-[16px] w-full'>
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

export default Feature
