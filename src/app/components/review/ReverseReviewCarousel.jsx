import React from 'react'
import style from './ReverseReviewCarousel.module.css'
import { AvatarCard } from './ReviewCarousel';

const avatardata=[
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    },
    {
        text:"\"Your Personal Stage Director for Stellar Videos\"",
        para:"It\'s like having a magic wand for video creation. It\'s not just a tool; it\'s more like a backstage crew always ready to put on a show.",
        src:"https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567240703e1c7eae2a6d8ab_image%202.webp",
        name:"Bently H.",
        duration:"Mid-Market(51-1000emp.)"
    }
]

const ReverseReviewCarousel = () => {
    return (
        <div>
          <div className={`${style.marquee}`} >
      <div className={`${style.marqueeInner} `}>
        <span >
            {
                avatardata.map((ind,key)=>{
                    return(
                        <AvatarCard key={key} text={ind.text} para={ind.para} src={ind.src} name={ind.name} duration={ind.duration} />
                    )
                })
            }
        </span>
        <span >
        {
                avatardata.map((ind,key)=>{
                    return(
                        <AvatarCard key={key} text={ind.text} para={ind.para} src={ind.src} name={ind.name} duration={ind.duration} />
                    )
                })
            }
        </span>
    
      </div>
    </div>
        </div>
      )
}



export default ReverseReviewCarousel
