import { Button, Divider } from '@heroui/react'
import { ArrowDownCircle, ArrowDownRight } from 'lucide-react'
import React from 'react'

import CertTemplateCS from './CertTemplateCS'

function CustomDivider() {
  return (
    
      
      <div className="p-8 pt-0 space-y-3 w-full">
        <div className="space-y-1">
      <h2 className="text-2xl font-bold ">Certifications and Achievements</h2>
        
        <p className="text-small">Each section contains field related certificates <ArrowDownCircle className='inline'/></p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-small">
        
        <Button
        size='md'
        variant='light'
        radius='none'
        color='danger'
        >Cybersecurity</Button>
        <Divider orientation="vertical" />
        <Button
        size='md'
        variant='light'
        radius='none'
        color='danger'
        >Web Development</Button>
        <Divider orientation="vertical" />
        <Button
        size='md'
        variant='light'
        radius='none'
        color='danger'
        >Other Achievements</Button>
      </div>
      <div className='w-full h-[40vh] p-5'>
        <CertTemplateCS/>
      </div>
    </div>
  )
}

export default CustomDivider
