"use client"


import ParticleBackground from '@/app/components/ParticleBackground';
import React, { useEffect } from 'react'


function page() {

  useEffect(() => {
      console.log('Page Rendered');
    }, []);
  return (
    <>
     
    <ParticleBackground />
      <h1>Particles Test Page</h1>
  
    </>
  )
}

export default page
