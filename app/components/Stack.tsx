'use client'

import React from 'react'
import { useZustandStore } from '../helper/store'
import Image from 'next/image'


const Stack = (): React.ReactNode => {

    const { languages, frontEndFrameworks, dataBases, otherTools } = useZustandStore()

    return (
        <div id="Stack" className='h-[1000px] flex justify-center items-center xs:flex-col xs:h-full sm:flex-col sm:h-full'>
            <div className='relative bg-base-100 w-full h-full flex flex-col gap-12 justify-center xs:w-full sm:w-full md:w-full lg:w-full xl:w-full xxl:w-full'>
                <div className='flex justify-center'>
                    <h1 className='text-6xl  top-2 left-1/2 xs:text-4xl xs:p-4 sm:p-4'>Technologies</h1>
                </div>
                <div className='flex justify-center w-full gap-14 xs:flex-col sm:flex-col md:gap-0'>
                    <div className='flex flex-col p-8 w-auto items-center'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl'>Languages</h2>
                            <div className=' h-full flex flex-col gap-12'>
                                {languages.map((item, id) => {
                                    return <div key={id}>
                                        <ul className='flex items-center'>
                                            <Image src={item.icon} alt={`${item.name}`}></Image>
                                            <li>{item.name}</li>
                                        </ul>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-8 w-auto items-center gap-4'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl'>Frontend Frameworks</h2>
                            <div className=' h-full flex flex-col gap-12 xs:items-center sm:items-center'>
                                {frontEndFrameworks.map((item, id) => {
                                    return <div key={id}>
                                        <ul className='flex items-center gap-2'>
                                            <Image height={40} src={item.icon} alt={`${item.name}`}></Image>
                                            <li>{item.name}</li>
                                        </ul>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-8 w-auto items-center'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl'>Frontend Frameworks</h2>
                            <div className=' h-full flex flex-col gap-12 xs:items-center sm:items-center'>
                                {dataBases.map((item, id) => {
                                    return <div key={id}>
                                        <ul className='flex items-center gap-2'>
                                            <Image height={40} src={item.icon} alt={`${item.name}`}></Image>
                                            <li>{item.name}</li>
                                        </ul>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-8 w-auto items-center'>
                        <div className='flex flex-col gap-4 xs:items-center sm:items-center'>
                            <h2 className='text-2xl'>Other Tools</h2>
                            <div className=' h-full flex flex-col gap-12 xs:items-center sm:items-center'>
                                {otherTools.map((item, id) => {
                                    return <div key={id}>
                                        <ul className='flex items-center gap-2'>
                                            <Image height={40} src={item.icon} alt={`${item.name}`}></Image>
                                            <li>{item.name}</li>
                                        </ul>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack 