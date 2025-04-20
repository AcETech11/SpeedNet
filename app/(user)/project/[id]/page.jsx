
// pages/project/[id].js or app/project/[id]/page.js
import React from 'react';
import sanityClient from '@/sanity/lib/sanity';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { IoIosArrowBack } from "react-icons/io";
import format from 'date-fns/format';
import Link from 'next/link';
const page = async (props) => {
  const { id } = await props.params;
  const query = `*[_type == 'project' && _id == $id][0]{
    _id,
    title,
    mainImage,
    location,
    Short_Description,
    categories[]->{title},
    publishedAt,
    body
  }`;
  
  const project = await sanityClient.fetch(query, { id });
  
  if (!project) return <div>Project not found</div>;

  return (
    <>
    <div className='w-full h-[110vh] px-4 md:pl-4 lg:pl-8 lg:h-full  '>
        <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center'>
            {/* Left */}
            <div 
            className='w-full h-full flex flex-col items-start justify-between py-10 '>
              <Link href='/project' className='font-headline flex mt-8 items-center text-gray-light dark:text-gray-dark hover:text-button'> <IoIosArrowBack/> Back </Link> 
              <div>
                <h2 className='font-headline text-5xl my-3 font-light'>{project.title}</h2>
                <p className='font-light text-gray-light dark:text-gary-dark text-sm ' >{project.Short_Description}.</p>
              </div>
              <div>
                <div className=' w-full flex flex-col justify-between  gap-4'>
                  <div className='w-full h-full flex flex-col md:flex-row gap-4 mt-2'>
                    {project.categories.map((category) => (
                    <p key={category.title} className="font-headline text-gray-light dark:text-gray-dark">
                      {category.title}
                    </p>
                    ))} 
                  </div>
                  
                  <div>
                    <p className='font-light font-headline'>{project.location}</p>
                    <p className='font-light text-gray-light dark:text-gray-dark text-sm'>{format(project.publishedAt, 'dd MMM yyyy')}</p>
                  </div>
                  
                </div>
              </div>
                
            </div>
            {/* Right */}
            <div 
            className='w-full h-full '>
                <Image
                src={urlFor(project.mainImage).url()}
                alt={project.title}
                width={700}
                height={500}
                priority
                className='w-full h-full object-cover rounded-lg'
                />
            </div>
        </div>

    </div>
    <div className='padding py-8 font-headline w-full h-full mt-5'>
        <PortableText value={project.body}/>
    </div>
    </>
  );
};

export default page;
