'use client'
import Link from 'next/link'
import { useState } from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import navLinks from '../db/NavLinks'

import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

//Social Icons

import { FaSquareXTwitter, FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='lg:hidden'>
        <HiOutlineMenuAlt2 className='font-bold text-2xl cursor-pointer' onClick={()=> setMenuOpen(!menuOpen)}/>
        
        {/* AnimatePresence for exit animations */}
      <AnimatePresence>
          {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          className='w-full h-screen z-50 fixed top-0 left-0 bg-primary-dark/30' onClick={()=> setMenuOpen(!menuOpen)}>  
            <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className='w-full md:w-[80%] h-full bg-primary-light dark:bg-primary-dark padding py-4'>
              <div className='w-full flex items-center justify-between'>
                  <Link href="/"
                  className='font-headline'
                  >Speed<span 
                  className='font-bold bg-highlight text-primary-light'>Net.</span></Link>

                  <RiCloseLargeFill className='font-bold text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}/>
              </div>
              <nav className='w-full h-full flex flex-col items-center justify-center gap-30'>
                <ul className='w-full  flex flex-col items-center justify-center gap-4'>
                  {navLinks.map((link,index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <Link href={link.path} className='font-headline text-4xl hover:text-highlight delay-100 ease-in-out'>{link.name}<sup className='text-sm text-gray-light dark:text-gray-dark pl-1'>{`0${index+1}`}</sup></Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className='w-full flex items-center justify-center gap-4'>
                  <a href="/" target='_blank' className='text-xl'><FaSquareXTwitter/></a>
                  <a href="/" target='_blank' className='text-xl'><FaInstagram/></a>
                  <a href="/" target='_blank' className='text-xl'><FaFacebook/></a>
                  <a href="/" target='_blank' className='text-xl'><FaLinkedinIn/></a>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>  
          )}
        </AnimatePresence>
    </div>
  )
}

export default MobileNav