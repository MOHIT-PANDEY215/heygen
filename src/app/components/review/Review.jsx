import Image from 'next/image'
import React from 'react'
import ReviewCarousel from './ReviewCarousel'
import ReverseReviewCarousel from './ReverseReviewCarousel'

const Review = () => {
  return (
    <div className='bg-[#d5cfe4]'>
        <div className='p-8 pt-12 md:px-10 bg-[#d5cfe4]'>
      <div className='flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center gap-8'>
                <h2 className='text-[#0c062c] text-[60px] lg:text-[128px] leading-none font-semibold text-center'>A <span className='text-[#7559ff]'>beloved</span> industry leader</h2>
                <p className='text-[#342e51] text-[16px] sm:text-[20px] lg:text-[24px]'>Over 15,000 5-star reviews from across the internet</p>
            </div>

            <div className='grid grid-cols-7 max-w-[432px] sm:max-w-[472px] md:max-w-[574px] '>
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a0394c8c9dbd18f2835_users-love-us%204.svg" alt="" width={100} height={100} className='w-full object-cover'  />
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a0398f36d836d5cad57_NaturalLanguageProcessing(NLP)_BestUsability_Total.svg" alt="" width={100} height={100} className='w-full object-cover'  />
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03716ff72e09e1b1de_NaturalLanguageProcessing(NLP)_EasiestToUse_EaseOfUse.svg" alt="" width={100} height={100} className='w-full object-cover'  />
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03abe8100901131b16_TexttoSpeech_BestMeetsRequirements_MeetsRequirements.svg" alt="" width={100} height={100} className='w-full object-cover'  />
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03f1c2220b60bbbdf8_NaturalLanguageProcessing(NLP)_Leader_Leader.svg" alt="" width={100} height={100} className='w-full object-cover'  />
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a04984ffc68fed12227_TexttoSpeech_HighPerformer_Enterprise_HighPerformer.svg" alt="" width={100} height={100} className='w-full object-cover'  />
                <Image src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03bf6c7d2cf9ff627f_TexttoSpeech_HighPerformer_Mid-Market_HighPerformer.svg" alt="" width={100} height={100} className='w-full object-cover'  />
            </div>
      </div>
      
    </div>
    <div className='overflow-hidden w-screen '>
      <ReviewCarousel/>
      <ReverseReviewCarousel/>

      </div>
    </div>
  )
}

export default Review
