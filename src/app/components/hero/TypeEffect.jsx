import React from 'react'
import Typewriter from 'typewriter-effect'

const TypeEffect = () => {
  return (
    <div className='w-[200px] p-4' >
        <h2 className='text-[#7559ff]'>Script</h2>
        <h2>
            <Typewriter
                options={{
                    strings: ['Hey there! Welcome to HeyGen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media, presentations, education and more'],
                    autoStart: true,
                    loop: true,
                    cursor:''
                }}
            />
        </h2>
    </div>
  )
}

export default TypeEffect
