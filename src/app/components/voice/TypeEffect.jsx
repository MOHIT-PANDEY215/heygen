"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

const TypeEffect = () => {
  return (
    <div className=' flex flex-col justify-between p-4 w-[300px] md:w-[350px] min-h-[250px]' >
        <div>
        <h2 className='text-[#7559ff]'>Script</h2>
        <h2 className='text-[#232833] text-[24px]'>
            <Typewriter
                options={{
                    strings: ['Hey there! Welcome to HeyGen! This is what we sound like in another language.'],
                    autoStart: true,
                    loop: true,
                    cursor:''
                }}
            />
        </h2>
        </div>
        <button className='rounded-full px-4 py-4 bg-[#0c062c] text-white'>
            Generate voice
        </button>
    </div>
  )
}

export default TypeEffect
