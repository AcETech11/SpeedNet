import ReviewList from './ReviewList'
import React from 'react'
import Comment from './Comment'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Testimonial = () => {
  return (
    <div className='padding py-8 w-full h-full bg-button text-primary-light'>
        <div className='w-full h-full flex flex-col gap-5'>
            {/* Top */}
            <div>
              <h2 className='font-light font-headline mb-4'>Testimonials</h2>
              <p  className='font-headline text-5xl'>Don’t Take Our Word For It!<br/> Hear It From Our Clients.</p>  
            </div>
            {/* Middle */}
            <div className='w-full flex flex-col gap-3 md:flex-row items-center justify-center lg:mb-8'>
                <p className='w-full md:w-[60%] font-light text-sm'>Our clients trust Speednet to transform their spaces with cutting-edge smart automation solutions. Hear directly from them about how our technology has elevated their homes and offices to a new level of connectivity and security.</p>
                <ReviewList/>
            </div>
            {/* Bottom */}
          
          <SignedIn>
            <Comment/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
            <Button variant="outline" className="font-headline text-primary-dark dark:text-primary-light">Sign in to leave a comment.</Button>
            </SignInButton>
          </SignedOut>
            
            
        </div>
    </div>
  )
}

export default Testimonial