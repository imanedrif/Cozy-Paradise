import React, { useState } from 'react'
import heroimg from '../assets/hero-image.svg'
import logo from '../assets/logo.svg'
import NavLink from '../components/NavLink'
import cart from "../assets/ShoppingCart.svg"
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

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
    </div>
  )
}
