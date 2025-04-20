'use client'
import heroImage from '@/public/heroImage 1.jpg'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion, useScroll, useTransform} from "framer-motion";
// icons
import { FaWifi } from "react-icons/fa6";
import { GiLightBulb, GiUnplugged } from "react-icons/gi";

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  return (
    <div className='w-full h-[150vh]  px-4 md:px-8 md:h-[120vh]  lg:h-[100vh] lg:pl-8 lg:px-0'>
        <div className='w-full h-full  gap-4 flex flex-col lg:flex-row lg:items-center justify-center'>
            {/* Left */}
            <motion.div 
                style={{ opacity, y }}
                initial={{opacity:0, x: -100}}
                animate={{opacity:1, x: 0}}
                transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.9, delay: 0.6   }}
            className='w-full' >
                    <p className='font-headline text-sm text-gray-light dark:text-gray-dark'>Lightning-Fast Connectivity, Tailored for You</p>
                    <h2 className='text-5xl font-headline py-2'>Your Trusted Partner for <span className='font-bold text-highlight'>Next-Generation</span> Smart Living Solutions</h2>
                    <p className='text-sm text-gray-light dark:text-gray-dark font-light mb-8'>Enjoy ultra-fast connectivity that keeps your smart home seamlessly integrated. Our cutting-edge solutions are tailored to guarantee every digital interaction remains smooth, dependable, and future-proof.</p>

                    <Link href='/' className='font-headline border rounded-full p-2 hover:bg-button'>Get Started</Link>
            </motion.div>
            {/* Right */}
            <div className='w-full relative'>
                <Image
                src={heroImage}
                alt='Hero Image'
                width={700}
                height={400}
                priority
                className='w-full  object-cover rounded-md'
                /> 
                <div className='w-full h-full absolute top-0'>
                    <div className='w-full h-full relative top-0'>

                        <motion.div 
                        initial={{opacity:0, y:-100}}
                        animate={{opacity:1, y:0}}
                        transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.9, delay: 0.9 }}
                        className='HeroServices absolute top-8 lg:top-30 left-4 bg-primary-light text-primary-dark'>
                            <p>High-Speed Internet</p>
                            <FaWifi />
                        </motion.div>
                        <motion.div 
                        initial={{opacity:0, x:100}}
                        animate={{opacity:1, x:0}}
                        transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.9, delay: 1.4 }}
                        className='HeroServices absolute top-25 lg:top-80 lg:right-60 right-18 bg-primary-dark text-primary-light'>
                            <p>Smart Lighting</p>
                            <GiLightBulb className='text-yellow-300'/>
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, y:100}}
                            animate={{opacity:1, y:0}}
                            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.9, delay: 1.9 }}
                        className='HeroServices w-fit absolute bottom-8 right-3 bg-primary-light text-primary-dark'>
                            <p>Energy Management</p>
                            <GiUnplugged />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero