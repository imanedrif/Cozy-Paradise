import React from 'react'
import FadeIn from '../components/Fadeln'
import { careTitle , careSubtitle , care } from '../data'
import imgCare from '../assets/image-care.svg'

export const Care = () => {
  return (
    <div id='care' className=' px-10 max-w-[1490px] mx-auto mb-[200px]'>
        <FadeIn delay={0.2} direction="down">
            <h1 className=' text-fontBlack text-center text-5xl lg:text-[64px] font-medium mb-6'>
                {careTitle}
            </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="down">
            <h5 className=' text-lg text-center text-[#4F4F4F] xs:text-xl mb-12'>
                {careSubtitle}
            </h5>
        </FadeIn>
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col items-start gap-8">
                {care.map((C,i)=>(
                    <FadeIn key={i} delay={(i+1)*0.2} direction="left">
                        <div className=" flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                            <img src={C.img} alt={C.title}  className='h-[88px] w-[68px] '/>
                            <div>
                                <h3 className=' text-fontBlack font-medium text-2xl text-center xs:text-start lg:text-[28px] mb-2'>
                                    {C.title}
                                </h3>
                                <h6 className=' text-fontGray text-base font-medium lg:text-lg text-center xs:text-start'>
                                    {C.subtitle}
                                </h6>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
            <FadeIn delay={0.6} direction="right">
                <img src={imgCare} alt="Plants"/>
            </FadeIn>
        </div>
    </div>
  )
}
