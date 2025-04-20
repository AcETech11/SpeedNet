"use client";
import { motion} from "framer-motion";
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6, delay: 0.2}}
    >
        <Link href="/"
        className='font-headline'
        >Speed<span 
        className='font-bold bg-highlight text-primary-light'>Net.</span></Link>
    </motion.div>
  )
}

export default Logo