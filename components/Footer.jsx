import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaRegCopyright, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full padding py-2'>
        <div className='w-full flex-col md:flex-row flex items-center justify-center gap-3 md:justify-between'>

          <div className='flex gap-2 items-center'>
            <Link href="/"
            className='font-headline'
            >Speed<span 
            className='font-bold bg-highlight text-primary-light'>Net.</span></Link>
            <div className='w-[1px] h-[30px] bg-primary-dark dark:bg-primary-light hidden md:block'></div>
          </div>
          

          <div>
            <span className='flex items-center gap-2 font-headline font-light'><FaRegCopyright className='dark:text-gray-dark text-gray-light'/>{new Date().getFullYear()} All Rights Reserved.</span>
          </div>
          <div className='hidden gap-3  md:flex'>
            <a href='/' target='_blank'><FaFacebookF/></a>
            <a href='/' target='_blank'><FaInstagram/></a>
            <a href='/' target='_blank'><FaXTwitter/></a>
          </div>
  
        </div>
    </div>
  )
}

export default Footer