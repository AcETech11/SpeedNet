import sanityClient from '@/sanity/lib/sanity'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { FaStar } from "react-icons/fa";

const ReviewList = async() => {
    const quote = `*[_type == 'comment']{
  _id,
    clientName,
    clientTitle,
    mainImage,
    rating,
    Comment
  
}|order(desc)`
 const reviews = await sanityClient.fetch(quote)

  return (
    <div className='w-full flex flex-col md:items-end'>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative"
    >
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review._id} className="md:basis-1/2 lg:basis-1/4">
             
                <div className='w-full h-[90%] lg:h-[100%] rounded-lg relative group ease-in duration-700'>
                    <div className='w-full h-full relative'>
                        <Image
                        src={
                          review.mainImage? urlFor(review.mainImage).url() : NoImage
                        }
                        alt={review.title || "review image"}
                        width={500}
                        height={400}
                        //unoptimized
                        className='w-full h-full object-cover rounded-lg'/>
                    </div> 
                    <div className='hidden group-hover:flex  w-full h-full absolute top-0 p-4 bg-primary-dark/70 rounded-lg  flex-col items-baseline justify-between'>
                        <div className='w-[40px] h-[40px] rounded-full bg-amber-500'>
                            <Image
                                src={
                                review.mainImage? urlFor(review.mainImage).url() : NoImage
                                }
                                alt={review.title || "review image"}
                                width={500}
                                height={500}
                                //unoptimized
                                className='rounded-full w-full h-full object-cover'/> 
                        </div>
                            <p className='font-extralight text-sm'>{review.Comment}</p>
                            <div>
                            <p className='font-headline text-sm font-light'>
                                {review.rating ? (
                                  <span className='w-full flex items-center'>
                                    {review.rating} Star <FaStar className="text-yellow-400" /> Rated.
                                  </span>
                                ) : (
                                  <span>No Star Rated</span>
                                )}
                              </p>
                             <h3 className='font-script'>{review.clientName}</h3>
                             <p className='font-light font-headline text-sm'>{review.clientTitle}</p>   
                            </div>
                        

                    </div>
                </div>
          </CarouselItem>
         ))} 
      </CarouselContent>
      <div className='hidden'>
        <CarouselPrevious className='bg-primary-dark dark:bg-primary-light dark:hover:bg-primary-dark'/>
        <CarouselNext className='bg-primary-dark dark:bg-primary-light dark:hover:bg-primary-dark'/>
      </div>
      
    </Carousel>
    </div>
  )
}

export default ReviewList