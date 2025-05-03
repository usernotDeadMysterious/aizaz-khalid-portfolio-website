import { Button, Divider } from '@heroui/react'
import { ArrowDownCircle } from 'lucide-react'
import React, { useState } from 'react'

import CertTemplateCS from './CertTemplateCS'
import CertTemplateWD from './CertTemplateWD'

function CustomDivider() {
  const [activeTab, setActiveTab] = useState('cybersecurity');

  return (
    <div id='certificates' className="p-8 pt-0 space-y-3 w-full">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Certifications and Achievements</h2>
        <p className="text-small">
          Each section contains field related certificates <ArrowDownCircle className='inline' />
        </p>
      </div>

      <Divider className="my-4" />

      <div className="flex h-5 items-center space-x-4 text-small">
        <Button
          size='md'
          variant={activeTab === 'cybersecurity' ? 'solid' : 'light'}
          radius='none'
          color='danger'
          onClick={() => setActiveTab('cybersecurity')}
        >
          Cybersecurity
        </Button>
        <Divider orientation="vertical" />
        <Button
          size='md'
          variant={activeTab === 'webdev' ? 'solid' : 'light'}
          radius='none'
          color='danger'
          onClick={() => setActiveTab('webdev')}
        >
          Web Development
        </Button>
      </div>

      {/* Conditional Rendering */}
      <div className='mt-3 mb-3'>
        {activeTab === 'cybersecurity' && <CertTemplateCS />}
        {activeTab === 'webdev' && <CertTemplateWD />}
      </div>
    </div>
  );
}

export default CustomDivider;
