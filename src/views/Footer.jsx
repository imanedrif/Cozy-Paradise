import React from 'react'
import { contactUs ,footerLinksColumnOne,footerLinksColumnTwo } from '../data'

export const Footer = () => {
  return (
    <div className=' bg-gradient-to-r from-[#2D4269] to-[#081027]'>
        <div className="mx-auto max-w-[1490px] px-10 py-[80px]">
            <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-12">
                <div className='w-full xl:w-auto flex flex-col items-center xl:items-start'>
                    <h2 className="text-white text-center xl:text-start font-medium text-3xl lg:text-[32px]">
                        {contactUs}
                    </h2>
                    <div className="relative w-full xs:w-[380px] xl:w-[450px] mt-11">
                        <input type="text" placeholder='Email' 
                        className='rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-base xs:text-lg placeholder-white text-white' />
                        <div className='rounded-full py-2.5 px-6 text-white cursor-pointer absolute top-2/4 right-3 -translate-y-2/4 bg-[linear-gradient(90deg,_#22407C_16.7%,_#9F7A64_91.4%)]'>
                            Subscribe
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 w-full">
                    <div className=" flex flex-col xs:flex-row gap-12 w-full md:w-auto">
                        {footerLinksColumnOne.map((item,i)=>(
                            <div key={i} className=" text-white flex-1 max-w-screen md:max-w-[340px] md:flex-auto">
                                <h6 className='text-base mb-8 text-center xl:text-start lg:text-lg font-medium'>
                                    {item.title}
                                </h6>
                                <ul className='flex flex-col gap-4'>
                                    {item.links.map((link,i)=>(
                                        <div className="w-full flex mx-auto justify-center xl:justify-start">
                                            <li key={i} 
                                                className='text-sm md:text-base items-center xl:items-start cursor-pointer w-fit font-light'>
                                                {link}
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {footerLinksColumnTwo.map((item,i)=>(
                            <div key={i} className=" text-white flex-1 max-w-screen md:max-w-[340px] md:flex-auto">
                                <h6 className='text-base mb-8 text-center xl:text-start lg:text-lg font-medium'>
                                    {item.title}
                                </h6>
                                <ul className='flex flex-col gap-4'>
                                    {item.links.map((link,i)=>(
                                        <div className="w-full flex mx-auto justify-center xl:justify-start">
                                            <li key={i} 
                                                className='text-sm md:text-base items-center xl:items-start w-fit font-light'>
                                                {link}
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full bg-white h-[0.5px] my-10'/>
            <h6 className=' text-white text-center text-base lg:text-lg font-thin'> 
                @ CozyParadise - All rights reserved
            </h6>
        </div>
    </div>
  )
}
