import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

//Image
import chatImage from '@/public/chatImage.jpg'


// Icons
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='w-full h-full py-4 padding bg-[url(@/public/contactBg.jpg)] text-primary-light flex flex-col gap-4'>
       <div>
         <h2 className='font-light font-headline mb-4'>05 - Contact</h2>
         {/* Top */}
         <div className='w-full'>
            <h2 className='font-headline text-5xl font-light'>We would love to hear from you.</h2>
            <p className='font-headline text-gray-dark mb-4'>Feel free to reach our if you want to collaborate with us, or simply have a chat</p>
            <Link href='/contact'>
                <Button className='border-button border hover:bg-button font-headline'>Work With Us</Button>
            </Link>
         </div>
         {/* Middle */}
         <div className='w-full flex flex-col md:flex-row  md:justify-between mt-6'>
            <div>
                <p className='font-script font-light text-2xl'>Don’t like the forms? Drop us a line via <a href=''>email.</a></p>
            </div>
            <div>
                <h3 className='md:flex text-9xl font-headline '>Let's Chat</h3>
                <div className='w-full flex justify-between items-center'>
                    <div>
                     <p className='font-headline font-extralight'>Our Email</p>
                     <p className='text-button font-light'>your-email@example.com</p>   
                    </div>

                    <div className='flex gap-3'>
                        <a href='/' target='_blank'><FaFacebookF/></a>
                        <a href='/' target='_blank'><FaInstagram/></a>
                        <a href='/' target='_blank'><FaXTwitter/></a>
                    </div>
                    
                </div>
            </div>
         </div>
       </div>
        </div>
  )
}

export default Contact