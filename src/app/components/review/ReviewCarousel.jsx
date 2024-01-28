import React from 'react'
import style from './ReviewCarousel.module.css'
import { IoIosStar } from "react-icons/io";
import Image from 'next/image';

const avatardata=[
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    }
]

const ReviewCarousel = () => {
    return (
        <div>
          <div className={`${style.marquee}`} >
      <div className={`${style.marqueeInner} `}>
        <span >
            {
                avatardata.map((ind,key)=>{
                    return(
                        <AvatarCard key={key} text={ind.text} para={ind.para} src={ind.src} name={ind.name} duration={ind.duration} />
                    )
                })
            }
        </span>
        <span >
        {
                avatardata.map((ind,key)=>{
                    return(
                        <AvatarCard key={key} text={ind.text} para={ind.para} src={ind.src} name={ind.name} duration={ind.duration} />
                    )
                })
            }
        </span>
    
      </div>
    </div>
        </div>
      )
}

export function AvatarCard({text,para,src,name,duration}){
    return(
        <div className='bg-white rounded-[16px] py-[26px] px-[24px] flex flex-col gap-x-[16px] gap-y-[16px] w-fit min-w-[320px]' style={{boxShadow:"0 2px 3px rgba(117,89,255,.13), 0 5px 9px rgba(117,89,255,.18), 0 22px 40px rgba(117,89,255,.31)"}}>
            <div className='flex'>
                <IoIosStar size={24} color='#7559ff'/>
                <IoIosStar size={24} color='#7559ff'/>
                <IoIosStar size={24} color='#7559ff'/>
                <IoIosStar size={24} color='#7559ff'/>
                <IoIosStar size={24} color='#7559ff'/>
            </div>
            <div className='font-semibold max-w-[320px] text-[18px]'>
                {text}
            </div>
            <p className='text-[14px] max-w-[320px]'>{para}</p>
            <div className='flex gap-2 items-center'>
                <Image src={src} alt="" width={24} height={24} className='h-[24px] rounded-full'/>

                <div className='flex flex-col'>
                    <div className='text-[#0c062c] text-[12px] font-semibold'>{name}</div>
                    <div className='text-[14px] text-[#4e5666]'>{duration}</div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCarousel
