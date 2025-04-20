import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

import ProjectList from './ProjectList'

const ProjectSection = () => {
  return (
    <div className='w-full h-full py-18 padding dark:bg-primary-light dark:text-primary-dark bg-primary-dark text-primary-light'>
        <div className='w-full h-full flex flex-col gap-4'>
            <h2 className='font-light font-headline mb-4'>04 - Project</h2>
            {/* Top */}
            <div className='w-full h-full flex flex-col gap-4 md:flex-row md:justify-between md:items-start'>
                <p className='font-headline text-5xl font-light'>Transforming spaces with intelligent design</p>
                <div className='flex flex-col items-end gap-6'>
                    <p className='text-sm text-gray-dark dark:text-gray-light font-light'>Explore our innovative projects that seamlessly integrate technology, safety, and smart connectivity into every home and office.</p>
                    <Link href="/project">
                        <Button className='font-headline bg-button'>View More</Button>
                    </Link>
                </div>
            </div>
            {/* Bottom */}
            <ProjectList/>
        </div>
    </div>
  )
}

export default ProjectSection