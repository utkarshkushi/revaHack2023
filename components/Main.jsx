import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <>
    <div className="hero-section flex justify-around mt-20">
        <div className="text">
            <div className="highlightText">
                <h1 className="heroText font-poppins text-6xl font-medium my-5">Predict the gas fee.</h1>
                <h1 className="heroText font-poppins text-6xl font-medium my-5">Lock the funds.</h1>
                <h1 className="heroText font-poppins text-6xl font-medium my-5">Send.</h1>
            </div>
            <div className="tagText w-[700px]">
                <h1 className="descTes font-poppins text-sm text-gray-300">
                A custodial wallet, that helps you make gas efficient transactions, by setting up the time and date, and automates the transaction by locking your funds so you don’t run out of money
                </h1>
            </div>
        </div>
        <div className="hero-img">
        <Image src='/assets/hero-img.png' width={456} height={342} quality={100}  className='cursor-pointer' />
        </div>
    </div>
    </>
  )
}

export default Main
