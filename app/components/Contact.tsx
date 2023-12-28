'use client'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'



const Contact = (): React.ReactNode => {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = async (e: { preventDefault: () => void }) => {
        e.preventDefault();


        if (form.current) {
            try {
                const result = await emailjs.sendForm('service_fxinzeq', 'template_d22ybpa', form.current, 'xYE3Rl5A9boFeYj6k')
                if (form.current) {
                    form.current.reset()
                }
            } catch (error) {
                console.log('Form Submission Failed')
            }
        }
        alert('Thanks for contacting me!')
    };

    return (
        <div id="Contact Me" className='bg-base-100 h-[1000px] xs:w-auto xs:p-4 xs:h-auto sm:w-auto sm:p-4 sm:h-auto md:w-auto md:p-4 md:h-auto'>
            <form typeof='submit' ref={form} onSubmit={sendEmail} className=' flex flex-col items-center justify-center h-full gap-12'>
                <div>
                    <h1 className='text-3xl'>Contact Me</h1>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-col gap-4 items-center text-white'>
                        <label htmlFor="first_name"></label>
                        <input placeholder='First Name' className='input input-bordered w-full max-w-sm' type="text" name="first_name" />
                        <label htmlFor="last_name"></label>
                        <input placeholder='Last Name' className='input input-bordered w-full max-w-sm' type="text" name="last_name" />
                        <label htmlFor="email"></label>
                        <input placeholder='Email' className='input input-bordered w-full max-w-sm' type="email" name="email" />
                        <label htmlFor="phone_number"></label>
                        <input placeholder='Phone Number' className='input input-bordered w-full max-w-sm' type="number" name="phone_number" />
                        <label htmlFor="company"></label>
                        <input placeholder='Company' className='input input-bordered w-full max-w-sm' type="text" name="company" />
                        <label htmlFor="message"></label>
                        <textarea placeholder='Message' className='p-4 rounded-lg w-full max-w-sm bg-base-200' name="message" id="message" cols={25} rows={8}></textarea>
                    </div>
                </div>
                <button className='btn w-[10%] xs:w-full sm:w-[50%] md:w-[50%]'>Submit</button>
            </form>
        </div>
    )
}

export default Contact


