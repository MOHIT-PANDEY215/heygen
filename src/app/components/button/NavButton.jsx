import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const NavButton = ({text,icon,avatar}) => {
  return (
    <div>
      <Button variant="outline">
        {
          avatar &&
              <img src={avatar} alt="" className='h-auto max-w-[30%] mr-4' />
        }
        {text}
        <span className='ml-2'>{icon}</span>
      </Button>
    </div>
  )
}

export default NavButton
