import React from 'react'
import sanityClient from '@/sanity/lib/sanity'
import { urlFor } from '@/sanity/lib/image'
import LoadingPage from '../../../loading'
import Image from 'next/image'
import Link from 'next/link'

const Project = async () => {
  const quote = `*[_type == 'project']{
    _id,
    title,
    mainImage,
    location,
    Short_Description,
    categories[]->{title}, 
    publishedAt,
    body
  }|order(_createdAt desc)`;
  
  const projects = await sanityClient.fetch(quote);
  if (!projects) return <LoadingPage/>;
  
  return (
    <div className='padding w-full h-full py-8'>
      <div className='w-full h-full'>
        <div className='w-full h-full flex flex-col gap-4'>
          <h2 className='font-headline text-5xl'>Project We Are Proud Of</h2>
          <p className='font-headline'> <span>{projects.length}</span> Completed Project</p>
        </div>
        <hr />
        <div className='w-full h-full py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4'>
          {projects.map((project, index) => (
            <div key={project._id} className='w-full h-full'>
            <Link href={`project/${project._id}`}>
                <p className='font-headline text-2xl'>{`0${index + 1}`}</p>
                <h3 className='font-headline text-2xl'>{project.title}</h3>
                <p className='font-light py-2'>{project.Short_Description}</p>
                <p className='font-light text-gray-light dark:text-gray-dark'>{project.location}</p>
                 <div className='pt-4 w-full md:h-[80%]'>
                    <Image
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover'
                    />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project;
