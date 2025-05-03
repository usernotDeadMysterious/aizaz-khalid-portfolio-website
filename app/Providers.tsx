// app/providers.tsx
'use client'

import {HeroUIProvider} from '@heroui/react'
import Navbar from "./components/Navbar";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <>
    <Navbar/>
    <HeroUIProvider>
      
      {children}
    </HeroUIProvider>
    
    </>
  )
}