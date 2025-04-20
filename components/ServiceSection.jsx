import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import ServiceList from '@/components/ServiceList'

const ServiceSection = () => {
  return (
    <div className='padding my-10'>
        <div className='w-full h-full flex flex-col gap-4 items-center'>
            {/* Top */}
            <div>
                <h2 className='font-light font-headline mb-4'>03 - services</h2>
                <div className='w-full h-full flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center'>
                    <h4 className='w-full font-headline text-5xl'>How We <span className=' text-highlight'>Protect</span> Your Properties</h4>
                    <p className='text-sm dark:text-gray-dark text-gray-light font-light'>Introducing our all-in-one security hub that provides robust protection for your home, office, or business from day one. Powered by adaptive AI and ML algorithms, our solution continuously evolves to keep you compliant and shielded against emerging threats.</p>
                </div>
            </div>
            {/* Bottom */}
            <ServiceList/>

            <Link href='/services'>
                <Button className='bg-button'>View More</Button>
            </Link>
        </div>
    </div>
  )
}

export default ServiceSection