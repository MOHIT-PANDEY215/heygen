import Image from 'next/image'
import React from 'react'

const CardSection = () => {
  return (
    <div className='overflow-x-auto mx-auto w-full flex items-center'>
        <div className='px-8 pt-8 flex overflow-auto  gap-8 '>
      <Card number={`01`} text="Create or choose an avatar" para="Choose from over 100+ AI avatars or customize your own."/>
      <Card number={`02`} text="Record or choose a voice" para="Choose from a collection of high-quality voices or record your own."/>
      <Card number={`03`} text="Select a template or start from scratch" para="Select from an extensive array of ready-to-use templates for any scenario, or begin with a clean slate."/>
    </div>
    </div>
  )
}

function Card({number,text,para,img}){
    return(
        <div className='bg-white p-8 lg:p-12 min-w-[250px] w-full flex flex-col justify-between items-start rounded-[20px]'>
            <div>
            <Number number={number}/>
            <div>
                <h2 className='text-[#0c062c] text-[20px] md:text-[30px] font-semibold w-full'>{text}</h2>
                <p className='text-[#232833] text-[16px] opacity-70'>{para}</p>
            </div>
            </div>
            <div>
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01.webp" alt="" width={100} height={100}/>
            {/* <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01.webp" alt="" /> */}
            </div>
        </div>
    )
}

function Number({number}){
    return(
        <span className='text-[64px] md:text-[128px] leading-none tracking-[-5px] text-[#7559ff]'>
            {number}
        </span>
    )
}

export default CardSection
