import React from 'react'
import AboutHero from './components/AboutHero'
import OurStory from './components/OurStory'
import Message from './components/Message'
import Team from './components/Team'
import Mission from './components/Mission'

const page = () => {
  return (
    <div>
        <AboutHero/>
        <OurStory/>
        <Message/>
        <Team/>
        <Mission/>
    </div>
  )
}

export default page