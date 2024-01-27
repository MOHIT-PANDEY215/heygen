import React from 'react'
import { AvatarCard } from './DivCarousel'
import style from './Reverse.module.css'

const avatardata=[
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd4c0886512e6dc092c_05.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccf7db78031ca7c4c2d_01.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65854d2b5bd2e3203e00e948_Avatar.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd08397f73bfbbc02fb_03.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd403de1871d2d426cb_07.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccebdf82350d6317b90_08.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd894bb4d7d86799639_13.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd909abf7d03dbac4fb_10.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd2a7d01fc94a727fab_06.webp',
    },
    {
        src:'https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd7da46e743b668a1d5_12.webp',
    }
]

const Reverse = () => {
    return (
        <div>
          <div className={`${style.marquee}`} >
      <div className={`${style.marqueeInner} `}>
        <span >
            {
                avatardata.map((ind,key)=>{
                    return(
                        <AvatarCard key={key} src={ind.src}/>
                    )
                })
            }
        </span>
        <span >
        {
                avatardata.map((ind,key)=>{
                    return(
                        <AvatarCard key={key} src={ind.src}/>
                    )
                })
            }
        </span>
    
      </div>
    </div>
        </div>
      )
}

export default Reverse
