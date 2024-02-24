'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Aboutme from './Aboutme'
import LinkedinIcon from '../assets/linkedin.png'
import GithubIcon from '../assets/github-icon.png'
import { useZustandStore } from '../helper/store'




interface navbaritems {
    name: string,
    link?: string
}

interface navbaricons {
    name: string,
    icon: StaticImageData,
    link: string
}




const Navbar = (): React.ReactNode => {

    const [navbarItems, setNavbarItems] = useState<navbaritems[]>([
        {
            name: 'My Work',
        },
        {
            name: 'Contact Me',
            link: ''
        },
        {
            name: 'Stack',
            link: ''
        }
    ])

    const [icons, setIcons] = useState<navbaricons[]>([
        {
            name: 'Linkedin',
            icon: LinkedinIcon,
            link: 'https://www.linkedin.com/in/stanoj-kocev-b96b86260/'
        },
        {
            name: 'Github',
            icon: GithubIcon,
            link: 'https://github.com/JetX26?tab=repositories'
        }
    ])

    const scrollToSection = () => {
        const section = document.getElementById('contact')
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const { sectionIds } = useZustandStore()


    return (
        <div className=' h-[600px] bg-hero bg-cover flex justify-end items-center relative xs:flex-col xs:justify-center xs:text-center sm:flex-col sm:justify-center sm:text-center md:flex-col md:justify-center md:text-center lg:flex-col lg:justify-center lg:text-center xl:justify-center xl:text-center xl:flex-col xxl:flex-col xxl:justify-center xxl:text-center'>
            <div className='w-1/2'></div>
            <div className='w-1/2 flex flex-col gap-16 justify-start xs:w-full sm:w-full md:w-full lg:w-full xl:w-full xxl:w-full'>
                <div className='px-32 flex gap-8 justify-end xs:p-0 xs:justify-center sm:p-0 sm:justify-center md:justify-center lg:justify-center xl:justify-center xxl:justify-center'>
                    {navbarItems.map((item, id) => {
                        return (
                            <a key={id} href={`${'/'}#${item.name}`}>{item.name}</a>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className=' text-5xl font-light'>Hi, I am</h2>
                    <h1 className='text-7xl'>Stanoj Kocev.</h1>
                    <p className='text-2xl'>Frontend engineer</p>
                </div>
                <div>
                    <label className='border-none btn hover:scale-110 transition-all rounded-full w-[300px]'
                        htmlFor="my_modal_7">About Me</label>
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box font-semibold text-xl h-auto min-w-[1000px]">
                            <Aboutme></Aboutme>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                </div>
                <div className='flex gap-4 xs:p-4 sm:p-4 md:p-4 lg:px-12 xl:px-12 xxl:px-12'>
                    {icons.map((item, id) => {
                        return <a key={id} href={item.link} target='_blank'>
                            <Image className='hover:scale-110 cursor-pointer transition-all' width={40} src={item.icon} alt="Icon"></Image>
                        </a>
                    })}
                </div>
            </div>
        </div >
    )
}




export default Navbar
