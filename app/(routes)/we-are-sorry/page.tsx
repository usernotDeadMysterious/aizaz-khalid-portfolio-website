"use client"


import React, { useEffect } from 'react'
import ParticleBackground from '@/app/components/ParticleBackground';

function page() {

  useEffect(() => {
      console.log('Page Rendered');
    }, []);
  return (
    <>
     
     
     
    <div>Nothing here</div>
    <ParticleBackground />
      <h1>Particles Test Page</h1>
  
    </>
  )
}

export default page
