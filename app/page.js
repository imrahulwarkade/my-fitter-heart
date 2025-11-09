import Home from '@/components/Home/Home'
import NavBar from '@/components/NavBar/NavBar'
import ParallaxEffect from '@/components/ParallaxEffect/ParallaxEffect'
import Wellbeing from '@/components/Wellbeing/Wellbeing'
import React from 'react'

const page = () => {
  return (
    <main className='w-full relative '>
        <NavBar/>
        <Home/>
        <ParallaxEffect/>
        <Wellbeing/>
    </main>
  )
}

export default page