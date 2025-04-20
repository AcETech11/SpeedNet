import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import sanityClient from '@/sanity/lib/sanity'


import LoadingPage from '../../../loading'


const Services = async() => {

    const quote = `*[_type == 'service']{
    _id,
    name,
    Description,
    mainImage}|order(desc)`
    

    const services = await sanityClient.fetch(quote)
    if (!services) return <LoadingPage />

  return (
    <div className='padding py-6'>
        <div className='w-full'>
            <h2 className='font-headline text-5xl'>Services We Offer</h2>
        </div>
        <div className='w-full h-full'>
            {services? services.map((service, index)=> (
                <div key={service._id} className='w-full h-full flex flex-col mt-8 gap-4 md:px-6'>
                    <p className='font-headline text-2xl'>{`0${index + 1}`}</p>
                    <hr className='dark:bg-primary-light'/>
                    <div className='flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:px-6'>
                        <h3 className='font-headline text-2xl'>{service.name}</h3>
                        <p className='dark:text-gray-light text-gray-dark font-light text-sm md:w-1/3'>{service.Description}</p>
                    
                        <div className=' flex flex-col items-center justify-center'>
                            <Image
                                src={urlFor(service.mainImage).url()}
                                alt={service.name}
                                width={200}
                                height={200}
                                className='rounded-lg w-full h-fit '
                            />
                        </div>
                    </div>
                </div>
            )): <LoadingPage/>}
        </div>
    </div>
  )
}

export default Services