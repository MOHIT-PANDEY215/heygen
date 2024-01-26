import React from 'react'
import { Button } from "@/components/ui/button"


const NavButton = ({text,icon}) => {
  return (
    <div className='px-4'>
      <Button variant="outline">{text}
        <span className='ml-2'>{icon}</span>
      </Button>
    </div>
  )
}

export default NavButton
