import React from 'react'
import { IoPlayOutline } from "react-icons/io5";

const carddata1=[
    {
        name:'Levi',
        char:'Friendly'
    },
    {
        name:'Charles',
        char:'Natural'
    },
    {
        name:'Ethan',
        char:'Professional'
    },
    {
        name:'Scarlett',
        char:'Professional'
    },
    {
        name:'Belle',
        char:'Natural'
    },
    {
        name:'Alison',
        char:'Cheerful'
    },
]

const carddata2=[
    {
        logo:'JP',
        name:'Japanese'
    },
    {
        logo:'ES',
        name:'Spanish'
    },
    {
        logo:'DE',
        name:'Germany'
    },
    {
        logo:'FR',
        name:'French'
    },
    {
        logo:'KR',
        name:'Korean'
    },
    {
        logo:'IT',
        name:'Italian'
    },
]

const CardContainer = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div>
        <Card numtitle={`300+`} title={`voices`} cardData={carddata1}/>
      </div>
      <div>
        <Card numtitle={`40+`} title={`languages`} cardData={carddata2}/>
      </div>
    </div>
  )
}

function Card({numtitle,title,cardData}){
    return(
        <div className='bg-white p-8 rounded-[16px] overflow-x-auto'>
            <div>
                <h2 className='text-[#4e5666] text-[28px]'>
                    <span className='text-[#7559ff]'>{numtitle}</span>
                    {title}
                </h2>
            </div>
            <div className='w-full flex gap-4'>
                {
                    cardData.map((ind,key)=>{
                        return(
                            <CardValue key={key} logo={ind.logo} name={ind.name} char={ind.char} />
                        )
                    })
                }
            </div>
        </div>
    )
}

function CardValue({logo,name,char}){
    return(
        <div className='p-4 flex items-center text-[#0c062c] w-fit border-solid border-[#7559ff1a] gap-2' style={{boxShadow:"0 9px 20px rgba(117,89,255,0.11),0 2px 4px rgba(117,89,255,0.07),0 1px 1px rgba(117,89,255,0.04)"}}>
            <IoPlayOutline/>
            <span className='text-[12px]'>{logo}</span>
            <div className='flex flex-col'>
                <div>
                {name}
                </div>
                <div>
                {char}
                </div>
            </div>
        </div>
    )
}

export default CardContainer
