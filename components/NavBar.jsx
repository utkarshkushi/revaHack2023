import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className="nav-bar flex justify-between px-10 py-5">
        <div className="logo">
        <Image src='/assets/logo.png' width={150} height={100} quality={100}  className='cursor-pointer' />
        </div>
        <div className="links flex gap-10 justify-center items-center">
        <a href="" className="link font-manrope text-lg hover:text-[#F1CEFA]">GitHub Code</a>
            <a href="" className="link font-manrope text-lg hover:text-[#F1CEFA]">Whitepaper</a>
            <a href="" className="link font-manrope text-lg px-10 py-2 border-2 border-white rounded-3xl hover:text-[#F1CEFA] hover:border-[#F1CEFA] hover:scale-90 transition-all ">Sign In</a>
        </div>
    </div>
    </>
  )
}

export default NavBar