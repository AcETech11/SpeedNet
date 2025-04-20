import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Link from 'next/link'


const NotFound = () => {
  return (
    <>
    <div className='w-full h-screen  bg-[url(../public/404Page.jpg)] bg-no-repeat bg-center  bg-cover'>
    <div className='w-full h-screen flex flex-col justify-between padding py-8 bg-primary-dark/80'>
       <Link href='/' className='font-headline text-sm text-button  hover:text-highlight'>Back to HomePage</Link>
        <div className='w-full text-primary-light'>
          <h1 className='font-headline text-9xl'>4 <span className='font-light text-5xl text-button'>0</span> 4</h1>
            <p className='text-center font-headline text-9xl'>Page Not Found</p>  
        </div>
        
      <p className='text-center font-script text-2xl text-primary-light'>Sorry, the page you're looking for doesn't exist.</p> 
    </div>
        
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default NotFound