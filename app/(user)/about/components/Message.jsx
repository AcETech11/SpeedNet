import Image from 'next/image'
import React from 'react'
import CeoImage from '../../../../public/CEO at FutureTech Innovations.jpg'

const Message = () => {
  return (
    <div className='w-full h-full py-4 md:py-0 px-4 md:px-0 md:pr-6 lg:pr-8 bg-primary-dark text-primary-light  dark:bg-primary-light dark:text-primary-dark'>
        <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-8'>
            <div className='w-full h-full'>
                <Image
                src={CeoImage}
                alt='CEO'
                width={800}
                height={800}
                className='w-full h-full object-cover rounded-lg md:rounded-none'
                />
            </div>
            <div className=' w-full h-full '>
                <h2 className='font-headline text-4xl font-light mb-3'>A Message From Our CEO</h2>
                <p className='text-sm font-light dark:text-gray-light text-gray-dark mb-3'>our mission is to transform everyday spaces into secure, intelligent environments that empower modern lifestyles. I’m incredibly proud of our dedicated team's relentless pursuit of innovation and excellence, which has enabled us to harness cutting-edge technology to deliver smart automation solutions that adapt to your evolving needs. Your trust and support fuel our commitment to create a future where high-speed connectivity and intelligent design redefine what it means to live and work smartly.</p>
                <p className='font-script'>Mr. Emily Davis</p>
            </div>
        </div>
    </div>
  )
}
export default Message