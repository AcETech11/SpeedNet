"use client";
import { motion } from "framer-motion";
import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import { Button } from './ui/button'

const Login = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.9, delay: 0.2}}
    >
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton mode='modal'>
                <Button className='font-headline bg-button'>Sign In</Button>
            </SignInButton>
        </SignedOut>
    </motion.div>
  )
}

export default Login