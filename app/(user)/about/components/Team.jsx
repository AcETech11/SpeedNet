'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import {motion, useInView, useScroll, useTransform} from 'framer-motion'



// Image
import team1 from '../../../../public/babatunde-akin.jpg'

const Team = () => {
  return (

    <div className='padding  w-full h-[80vh]'>
        <div className='w-full h-full flex flex-col items-center justify-center'>

            <div 
            className='w-full h-full flex items-center justify-center gap-1'>
                <motion.div 
                initial={{opacity: 1, }}
                whileInView={{opacity:1, y: 50,}}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
                className='w-[150px] h-[150px]'>
                    <Image
                    src={team1}
                    alt='team'
                    width={800}
                    height={600}
                    className='w-full h-full object-cover'
                    />
                </motion.div>
                <motion.div 
                initial={{opacity: 1, }}
                whileInView={{opacity:1, y: -50}}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
                className='w-[150px] h-[150px]'>
                    <Image
                    src={team1}
                    alt='team'
                    width={800}
                    height={600}
                    className='w-full h-full object-cover'
                    />
                </motion.div>
                <motion.div 
                initial={{opacity: 1, }}
                whileInView={{opacity:1, y: 50,}}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
                className='w-[150px] h-[150px]'>
                    <Image
                    src={team1}
                    alt='team'
                    width={800}
                    height={600}
                    className='w-full h-full object-cover'
                    />
                </motion.div>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center '>
                <motion.h2 
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className='font-headline text-3xl '>The Team</motion.h2>
                <motion.p
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className='font-script'>Meet the passionate professionals behind Speednet.</motion.p>
                <motion.p
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                className='font-light text-center text-gray-light dark:text-gray-dark text-sm w-full '>Our experts combine cutting-edge innovation with deep industry knowledge to drive smart automation solutions<br className='hidden md:block'/> that transform everyday spaces into secure, intelligent environments.</motion.p>
            </div>
        </div>
    </div>
  )
}

export default Team