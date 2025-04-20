"use client";
import { motion } from "framer-motion";
import navLinks from '@/db/NavLinks'
import Link from 'next/link'
const DeskTopNav = () => {
  return (
    <motion.nav 
    initial={{opacity:0, x: 100}}
    animate={{opacity:1, x: 0}}
    transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.6, delay: 0.2   }}
    className='hidden lg:block'>
        <ul className='flex items-center justify-center gap-4'>
        {navLinks.map((link,index) => (
                    <li key={index}>
                      <Link href={link.path} className='font-headline hover:text-highlight delay-100 ease-in-out'>{link.name}</Link>
                    </li>
                  ))}
        </ul>
    </motion.nav>
  )
}

export default DeskTopNav