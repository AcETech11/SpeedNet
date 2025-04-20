import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import React from 'react'

import { FaPhoneAlt, FaMailBulk, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import {Button} from '../../../../components/ui/button'

const ContactForm = () => {
  return (
    <div className='padding w-full h-full py-20'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
            {/* Top */}
            <div className='w-full h-full'>
                <div className='w-full h-full flex flex-col items-center justify-between'>
                    <h2 className='font-headline text-5xl font-light mb-2'>Get In Touch</h2>
                        <p className='font-light dark:text-gray-dark text-gray-light mb-2 text-center'>Have questions or need support? Our team is here to help you harness the power of <br className='hidden md:block'/>smart automation for your home or office.</p> 
                    </div>
                    <div className='w-full h-full flex flex-wrap items-center justify-center gap-8 font-light mb-4'>
                        <a href='tel:+2348144244201' target='_blank' className='flex items-center gap-4'> <FaPhoneAlt className='text-button'/> +234 814 4244 201</a>
                        <a href='mailto:info@speednet.com' target='_blank' className='flex items-center gap-4'> <FaMailBulk className='text-button'/> info@speednet.com</a>
                    </div> 

                    <div className='w-full h-full flex flex-wrap items-center justify-center gap-4 font-light'>
                        <a href='/' target='_blank' className='flex items-center gap-4 text-gray-light dark:text-gray-dark'> <FaFacebookF className='text-button'/> FaceBook</a>
                        <a href='' target='_blank' className='flex items-center gap-4 text-gray-light dark:text-gray-dark'> <FaInstagram className='text-button'/> Instagram</a>
                        <a href='/' target='_blank' className='flex items-center gap-4 text-gray-light dark:text-gray-dark'> <FaTwitter className='text-button'/> Twitter</a>
                        <a href='' target='_blank' className='flex items-center gap-4 text-gray-light dark:text-gray-dark'> <FaLinkedin className='text-button'/>LinkedIn</a>
                    </div> 
            </div> 

            {/* Bottom */}
            <div className='mt-4 w-full h-full md:w-[80%] lg:w-[60%]'>
                <form action="" className='w-full h-full border border-gray-light rounded-lg px-2 py-4 flex flex-col gap-3'>
                    <div className='w-full flex items-center justify-between gap-2'>
                        <input type="text" placeholder='FirstName' className='w-full p-4 text-gray-light dark:text-gray-dark border border-gray-dark rounded-lg'/>
                        <input type="text" placeholder='LastName' className='w-full p-4 text-gray-light dark:text-gray-dark border border-gray-dark rounded-lg'/>
                    </div>
                    <div className='w-full flex items-center justify-between gap-2'>
                        <input type="email" placeholder='Email' className='w-full p-4 text-gray-light dark:text-gray-dark border border-gray-dark rounded-lg'/>
                        <input type="text" placeholder='Phone' className='w-full p-4 text-gray-light dark:text-gray-dark border border-gray-dark rounded-lg'/>
                    </div>
                    <div>
                        <textarea placeholder='Message' className='w-full p-4 text-gray-light dark:text-gray-dark h-40 resize-none border border-gray-dark rounded-lg' rows='5'></textarea>
                    </div>
                    <SignedIn>
                    <button variant="outline" className=" hover:bg-highlight font-headline bg-button flex items-center gap-2 justify-center py-2 rounded-full">Send <IoIosSend className='text-primary-light dark:text-primary-dark text-2xl'/></button>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <button variant="outline" className="font-headline text-primary-dark dark:text-primary-light">Sign in to send</button>
                        </SignInButton>
                    </SignedOut>
                    
                </form>
            </div>  
        </div>
    </div>
  )
}

export default ContactForm