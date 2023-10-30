import React from 'react'
import FadeIn from '../components/Fadeln'
import imageOne from '../assets/image-one.svg'
import imageTwo from '../assets/image-two.svg'
import imageThree from '../assets/image-three.svg'
import { referencesTitle , referencesSubtitle} from '../data'

export const Reference = () => {
  return (
    <div id='references' className='mb-[200px] px-10 max-w-[1490px] mx-auto'>
        <FadeIn delay={0.2} direction="down">
            <h1 className='text-center text-5xl font-medium text-fontBlack lg:text-[64px] mb-6'>
                {referencesTitle}
            </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="down">
            <h5 className='text-center font-light text-[#4F4F4F] text-lg xs:text-xl mb-12'>
                {referencesSubtitle}
            </h5>
        </FadeIn>
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <FadeIn delay={0.2} direction="right">
                <div className='flex flex-col gap-8'>
                    <img src={imageOne} alt="" className=''/>
                    <img src={imageTwo} alt="" />
                </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
                <div>
                    <img src={imageThree} alt=""  className=''/>
                </div>
            </FadeIn>
        </div>
    </div>
  )
}
