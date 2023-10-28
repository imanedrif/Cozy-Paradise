import React, { useState } from 'react'
import heroimg from '../assets/hero-image.svg'
import logo from '../assets/logo.svg'
import Search from '../assets/SearchOutline.svg'
import NavLink from '../components/NavLink'
import cart from "../assets/ShoppingCart.svg"
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import FadeIn from '../components/Fadeln'
import {heroTitle,heroSubtitle} from '../data'

export const Hero = () => {

    const [ShowMobileMenu , setShowMobileMenu]=useState(false)

  return (
    <div className="h-screen relative flex flex-col items-center" style={{
        background:`url(${heroimg})`,
        backgroundPosition:'bottom',
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }}>
        <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-8 mx-auto px-10">
            <img src={logo} alt=""  className="h-28"/>
            <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
                <NavLink to="services">Services</NavLink>
                <NavLink to="products">Shop</NavLink>
                <NavLink to="references">References</NavLink>
                <NavLink to="care">Care</NavLink>
            </ul>
            <img src={cart} alt="" className='hidden md:block cursor-pointer h-10'/>
            <HiMenuAlt3 
                size={30}
                className='block md:hidden cursor-pointer text-white'
                onClick={()=>setShowMobileMenu((prev)=>!prev)}
            />
            <div className={`block md:hidden w-full fixed ${!ShowMobileMenu ? "-top-[410px]":"top-0"} left-0 bg-[#B8C4DA] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}>
                <AiOutlineClose size={25} className='absolute top-5 right-5 cursor-pointer' onClick={()=>setShowMobileMenu(false)}/>
                <ul className='pt-[60px] flex flex-col items-center gap-8'>
                <NavLink to="services" mobileMenu>Services</NavLink>
                <NavLink to="products" mobileMenu>Shop</NavLink>
                <NavLink to="references" mobileMenu>References</NavLink>
                <NavLink to="care" mobileMenu>Care</NavLink>
                <img src={cart} alt="" className='mt-8 mx-auto cursor-pointer'/>
                </ul>
            </div>
        </div>
        <FadeIn delay={0.2} direction="down" padding fullWidth>
            <h1 className='mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]'>
                {heroTitle}
            </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="down" padding fullWidth>
            <h5 className='mt-6 text-center text-lg xs:text-xl text-white max-w-[500px] font-light'> 
                {heroSubtitle}
            </h5>
        </FadeIn>
        <FadeIn delay={0.2} direction="up" fullWidth padding>
            <div className="relative w-full xs:w-[460px] mt-11">
                <input type='text' placeholder='Search' className='rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white text-base xs:text-lg placeholder-white'/>
            <img src={Search} alt="" className='absolute top-2/4 -translate-y-2/4 right-3 h-8 w-8 cursor-pointer ' />
            </div>
        </FadeIn>
        <div className='absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#fff_200%)] '/>
    </div>
  )
}
