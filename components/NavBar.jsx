import React from 'react'
import Logo from './Logo'
import Login from './Login'
import { DarkModeToggle } from './DarkModeToggle'
import MobileNav from './MobileNav'
import DeskTopNav from './DeskTopNav'

const NavBar = () => {
  return (
    <div className='z-20 padding py-2 backdrop-blur-lg shadow-lg fixed top-0 left-0 w-full flex items-center justify-between'>
        {/* Left */}
        <div className='flex items-center justify-between gap-4'>
            <MobileNav/>
            <Logo/>
            <DeskTopNav/>
        </div>
        {/* Right */}
        <div className='flex items-center justify-between gap-4'>
            <DarkModeToggle/>
            <Login/>
        </div>
    </div>
  )
}

export default NavBar