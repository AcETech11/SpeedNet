import React from 'react'
import sanityClient from '@/sanity/lib/sanity'
import { urlFor } from "@/sanity/lib/image"
import NoImage from '@/public/corporate-hub.jpg'
import { format } from "date-fns";
import Image from 'next/image'
import Link from 'next/link' 


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const ProjectList = async() => {
    const query = `*[_type == 'project']{
    _id,
  title,
    slug,
    mainImage,
    location,
    Short_Description,
    categories[]->{
      title
    },
    publishedAt,
    body
}|order(desc)`
    const projects = await sanityClient.fetch(query)
  return (
    <div className='w-full flex flex-col md:items-end'>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full md:w-[80%] relative"
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project._id} className="md:basis-1/2 lg:basis-1/4">
             
                <div 
                className='w-full h-full rounded-md relative'>
                    <div className='w-full h-full rounded-md'>
                        <Image
                        src={
                          project.mainImage? urlFor(project.mainImage).url() : NoImage
                        }
                        alt={project.title || "Project image"}
                        width={300}
                        height={200}
                        //unoptimized
                        className='object-cover w-full h-full rounded-md'
                        />
                    </div> 
                    <div className='w-full h-full p-3 rounded-md absolute top-0 flex flex-col justify-between text-primary-light bg-primary-dark/60'>
                        <h3 className='font-headline'>{project.title}</h3>
                        <div>
                         {project.categories.map((category) => (
                            <span key={category.title} className="inline-block pr-3 font-extralight text-sm text-gray-dark">
                              {category.title}
                            </span>
                          ))} 
                          <p className='font-light font-headline'>{project.location}</p>
                          <p className='font-light font-headline'>{format(new Date(project.publishedAt), "dd MMM yyyy")}</p>
                          <Link className='font-light font-headline float-right hover:text-button' href={`/project/${project._id}`}>Read more</Link>
                        </div>
                        
                    </div>
                </div>
          
               
          </CarouselItem>
         ))} 
      </CarouselContent>
      <div className='absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-4'>
        <CarouselPrevious className='bg-primary-dark dark:bg-primary-light dark:hover:bg-primary-dark'/>
        <CarouselNext className='bg-primary-dark dark:bg-primary-light dark:hover:bg-primary-dark'/>
      </div>
      
    </Carousel>
    </div>
  )
}

export default ProjectList