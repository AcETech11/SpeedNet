'use client'
import React from 'react'
import serviceList from '@/db/ServiceList'
import {motion} from 'framer-motion'

const ServiceList = () => {
  return (
    <div className='w-full md:flex'>
        {serviceList.map((service, index) => (
            <motion.div key={index} 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              //exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.3 * index, duration: 0.3 }}
            className='border rounded-lg p-4 dark:bg-primary-light bg-primary-dark dark:text-primary-dark text-primary-light'>
                <h1 className='font-headline text-5xl mb-2'>{service.percentage}</h1>
                <h3 className='font-headline text-2xl font-light mb-2'>{service.name}</h3>
                <p className='dark:text-gray-light text-gray-dark font-light text-sm mb-4'>{service.details}</p>
                <span className='text-3xl text-button w-full flex justify-end'>{service.icon}</span>
            </motion.div>
        ))}
    </div>
  )
}

export default ServiceList