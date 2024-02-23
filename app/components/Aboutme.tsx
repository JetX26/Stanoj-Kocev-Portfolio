'use client'

import React from 'react'
import StanojKocevPhoto from '../assets/linkedin photo.jpg'
import Image from 'next/image'

const Aboutme = (): React.ReactNode => {

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-1/2'><Image src={StanojKocevPhoto} alt="Movie"></Image></figure>
            <div className="card-body w-1/2">
                <p>{`Hey there! 👋 I’m Stanoj, and I’m all about building cool stuff on the internet. I get a kick out of creating websites that look awesome and work smoothly. It all started with me being curious about how websites work, and now I’m hooked! I spend my time coding and making things look neat online. When I’m not glued to the screen, you might catch me checking out the latest tech trends or just chilling outdoors. Let’s team up and make your online dreams come true!`}</p>
                <div className="card-actions justify-end">
                    <a target='_blank' href="https://www.linkedin.com/in/stanoj-kocev-b96b86260/">
                        <button className="btn bg-[#00b4d8]">Connect With Me!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Aboutme