'use client'

import React from 'react'
import myPhoto from '../assets/skocev.png'
import Image from 'next/image'

const Aboutme2 = (): React.ReactNode => {
    return (

        <div className='flex p-12 xs:p-2 xs:gap-2 sm:gap-4 md:gap-4 text-xl xs:flex-col sm:p-6 sm:flex-col md:p-8 md:flex-col bg-base-200 gap-24 xl:gap-24 lg:flex lg:justify-center xl:justify-center'>
            <div className='w-1/2 xs:w-full sm:w-full md:w-full lg:w-full xl:w-full flex justify-end items-center xs:justify-center md:justify-center lg:justify-center xl:justify-center'>
                <figure className='w-1/2 xs:w-full sm:w-full md:w-[70%] xs:p-4 xs:rounded-sm rounded-md'><Image src={myPhoto} alt="Movie"></Image></figure>
            </div>
            <div className=" w-1/2 xs:w-full sm:w-full md:w-full lg:w-full xl:w-full flex flex-col gap-4 justify-center text-center xs:flex-col">
                <p className='w-1/2 relative xs:w-full sm:w-full md:w-full lg:w-full xl:w-full'>{`Hey there! 👋 I’m Stanoj, and I’m all about building cool stuff on the internet. I get a kick out of creating websites that look awesome and work smoothly. It all started with me being curious about how websites work, and now I’m hooked! I spend my time coding and making things look neat online. When I’m not glued to the screen, you might catch me checking out the latest tech trends or just chilling outdoors. Let’s team up and make your online dreams come true!`}</p>
                <a target='_blank' className='w-1/2 xs:w-full sm:w-full md:w-full lg:w-full xl:w-full' href="https://www.linkedin.com/in/stanoj-kocev-b96b86260/">
                    <button className="btn text-black bg-[#ffff]">Connect With Me!</button>
                </a>
            </div >
        </div >
    )
}

export default Aboutme2