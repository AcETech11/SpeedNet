import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const AboutSection = () => {
  return (
    <div className='padding lg:my-8 w-full h-full'>
        <div className='w-full h-full lg:h-[50vh] flex flex-col gap-4 lg:gap-6 lg:flex-row lg:justify-between '>
            {/* Left */}
            <div className='w-full lg:h-full lg:flex lg:flex-col lg:justify-between'>
                {/* Top */}
                <h2 className='font-light font-headline mb-4'>02 - About Us</h2>
                {/* Bottom */}
                <p className='text-sm dark:text-gray-dark text-gray-light'>We passionately endeavor to embody the spirit of modern living by seamlessly blending advanced technology with a touch of enchanting elegance. Our solutions weave together innovation and intuitive design, creating smart homes that reflect the timeless essence of comfort and connectivity.</p>
            </div>

            {/* Right */}
            <div className='w-full'>
                <p className='text-2xl lg:text-4xl font-headline font-light mb-4'>Home automation is driven by a deep passion for transforming everyday living into an <span className='font-bold text-highlight'>intelligent</span>, connected experience. We blend innovative technology with intuitive design to <span className='font-bold text-highlight'>elevate</span> your home with a touch of brilliance.</p>
                <Link href='/services' className='text-left'>
                    <Button>Learn More</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutSection