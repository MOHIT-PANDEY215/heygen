import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'


const NavButton = ({text,icon,avatar}) => {
  return (
    <div>
      <Button variant="outline">
        {
          avatar &&
              <Image src={avatar} alt="" className='h-auto max-w-[30%] mr-4' width={100} height={100}/>
        }
        {text}
        <span className='ml-2'>{icon}</span>
      </Button>
    </div>
  )
}

export default NavButton
