import { Button } from '@/components/ui/button';
import React from 'react'


const PlayButton = ({text,icon}) => {
  return (
    <span>
      <button className={`rounded-[12px] border-2 border-[#ffffff1a] p-[1rem] backdrop-blur flex items-center gap-2`}>
        {icon}
        {
          text &&
          <span className='text-white'>{text}</span>
        }
        
      </button>
    </span>
  )
}

export default PlayButton
