'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const NavBar = () => {
    const { data: session } = useSession();
    const isUserLoggedIn = false
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const settingProviders = async () => {
            const response = await getProviders();
            console.log(response)
            setProviders(response)
        } 
        settingProviders();
    }, [])
    return (
        <>
            <div className="nav-bar flex justify-between px-10 py-5">
                <div className="logo">
                    <Image src='/assets/logo.png' width={150} height={100} quality={100} className='cursor-pointer' />
                </div>
                <div className="links flex gap-10 justify-center items-center">
                    <a href="https://github.com/utkarshkushi/revaHack2023" className="link font-manrope text-lg hover:text-[#F1CEFA]">GitHub Code</a>
                    <a href="" className="link font-manrope text-lg hover:text-[#F1CEFA]">Whitepaper</a>
                    {session?.user ? (
                        <a href="" className="link font-manrope text-lg px-10 py-2 border-2 border-white rounded-3xl hover:text-[#F1CEFA] hover:border-[#F1CEFA] hover:scale-90 transition-all ">{session?.user.email}</a>
                    ): (
                        <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
                        
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default NavBar