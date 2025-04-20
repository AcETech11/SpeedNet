'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

//image
import heroImage from '../../../../public/heroImage 1.jpg'

const ProjectHero = () => {
  return (
    <div className='w-full h-[110vh] px-4 md:pl-4 lg:pl-8 lg:h-full  '>
        <div className='w-full h-full flex flex-col md:flex-row items-center justify-center'>
            {/* Left */}
            <motion.div 
            initial={{opacity: 0, x: -100}}
            animate={{opacity:1, x: 0}}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.9, delay: 0.6   }}
            className='w-full h-full flex flex-col items-start justify-center py-10 '>
                <h2 className='font-headline font-light'>Project</h2>
                <p className='font-headline text-5xl my-3'>Innovative Smart Projects</p>
                <p className='font-light text-gray-light dark:text-gary-dark text-sm ' >Explore our portfolio of cutting-edge projects that blend technology and design to create secure, connected, and future-ready spaces.</p>
            </motion.div>
            {/* Right */}
            <motion.div 
            initial={{opacity: 0, x: 100}}
            animate={{opacity:1, x: 0}}
            transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.9, delay: 0.6   }}
            className='w-full h-full '>
                <Image
                src={heroImage}
                alt='Hero Image'
                width={700}
                height={500}
                priority
                className='w-full h-full object-cover rounded-lg'
                />
            </motion.div>
        </div>
    </div>
  )
}

export default ProjectHero