import React from 'react'
import workProcess from '@/db/WorkProcess'
import Quote from './Quote'

const WorkProcess = () => {
  return (
    <div className='padding py-8 w-full h-full flex flex-col gap-8'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='font-headline font-light text-5xl '>Our Work Process</h2>
                <p className='text-gray-light dark:text-gray-dark font-light text-sm text-center'>Seamless execution from planning to delivery – ensuring efficiency, quality, and client satisfaction.</p>
            </div>
            <div className='flex flex-col items-center justify-center lg:flex-row gap-3'>
                {
                    workProcess.map((process, index) => (
                        <div key={index} className=' w-full hover:bg-button ease-in duration-500 text-center bg-button/10 p-2 rounded-lg shadow'>
                            <span className='text-5xl '>{process.icon}</span>
                            <h3 className='font-headline '>{process.title}</h3>
                            <p className='font-script mb-3'>{process.subtitle}</p>
                            <p className='font-light text-sm'>{process.description}</p>
                            <p className='font-headline font-extralight text-5xl text-right'>{`0${index + 1}`}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <Quote/>
    </div>
  )
}

export default WorkProcess