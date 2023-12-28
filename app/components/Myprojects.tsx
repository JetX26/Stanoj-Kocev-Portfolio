'use client'

import React from 'react'
import { useZustandStore } from '../helper/store'
import Image from 'next/image'
import BackgroundImg from '../assets/projects-bg.jpg'

const Myprojects = (): React.ReactNode => {

    const { myWork } = useZustandStore()


    return (
        <div id="My Work" className='h-[1000px] bg-base-200 bg-center bg-cover flex justify-evenly items-center xs:flex-col xs:gap-12 xs:justify-center xs:h-auto xs:p-6 sm:flex-col sm:gap-12 sm:justify-center sm:p-6 sm:h-auto md:flex-col md:gap-10 md:justify-center md:h-auto md:p-6'>
            {myWork.map((item, id) => {
                return <div key={id} className="card w-96 bg-white text-black shadow-xl xs:w-[99%] sm:w-[80%] md:w-[70%]">
                    <a href={item.link} target='_blank'><figure><Image className=' rounded-tr-xl rounded-tl-xl hover:scale-125 cursor-pointer transition-all' src={item.image} alt={`${item.name} Photo`}></Image></figure></a>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <a href={item.link} target='_blank'><button className="btn">Visit</button></a>
                            <a href={item.source} target='_blank'><button className='btn'>Source Code</button></a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Myprojects