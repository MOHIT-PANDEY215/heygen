import React from 'react'

const GridHero = () => {
  return (
    <div className="py-12 px-4 bg-gradient-to-b from-[#49389e] to-[#100933]">
      <div className="heading py-4">
        <h2 className='text-[60px] text-white text-semibold'>Create videos for every team</h2>
        <p className='my-[24px] text-semibold text-[18px] text-white'>Engage, explain, entertain - AI-Powered video creation for any need.</p>
      </div>
      <div className='grid grid-cols-2 grid-flow-row gap-x-[24px] gap-y-[24px]'>
        
            <GridCard src="https://resource.heygencdn.com/homepage/usecase_sales2.mp4" text="Sales Outreach" spanText="that converts" para="Create personalized outreach videos at scale"/>

            <GridCard src="https://resource.heygencdn.com/homepage/usecase_mailchimp2.mp4" text="Content Marketing" spanText="that engage" para="Supercharge your content calendar with videos"/>
        
            <GridCard src="https://resource.heygencdn.com/homepage/usecase_productmarketing2.mp4" text="Product Marketing" spanText="that resonates" para="Produce engaging & concise product videos"/>

            <GridCard src="https://resource.heygencdn.com/website/vera_remove/usecase_lnd2_new_output.mp4" text="Learning & Development" spanText="that teaches" para="Create training videos your team will actually watch"/>
        
      </div>
    </div>
  )
}

function GridCard({src,text,spanText,para}){
    return(
        <div className='text-white'>
            <video src={src} muted autoplay loop className='rounded-[25px]'></video>
            <div>
            <div className='relative'>
                <h2 className='text-[20px]'>
                    {text}
                    <br />
                    <span className='text-[#bbadff]'>{spanText}</span>
                </h2>
                <p className='text-[#bcc1cc] text-[14px]'>{para}</p>
            </div>
            <div className="h-full bg-gradient-to-r from-[#0b071e] to-[#0b071e] blur-[8px] absolute top-auto bottom-0 left-0 right-0"></div>
            </div>
        </div>
    )
}

export default GridHero
