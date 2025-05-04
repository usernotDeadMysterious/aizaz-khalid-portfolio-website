import { Button, Divider } from '@heroui/react';
import { ArrowDownCircle } from 'lucide-react';
import React, { useState } from 'react';

import CertTemplateCS from './CertTemplateCS';
import CertTemplateWD from './CertTemplateWD';
import CertTemplatePR from './CertTemplatePR';
import CertTemplateOther from './CertTemplateOther';
import Workshops from './Workshops';

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

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 items-center justify-center gap-2 text-small">
        <Button
          size='sm'
          variant={activeTab === 'cybersecurity' ? 'solid' : 'light'}
          radius='none'
          color='danger'
          onClick={() => setActiveTab('cybersecurity')}
        >
          Cybersecurity
        </Button>

        <Button
          size='sm'
          variant={activeTab === 'webdev' ? 'solid' : 'light'}
          radius='none'
          color='danger'
          onClick={() => setActiveTab('webdev')}
        >
          Web Development
        </Button>

        <Button
          size='sm'
          variant={activeTab === 'prog' ? 'solid' : 'light'}
          radius='none'
          color='danger'
          onClick={() => setActiveTab('prog')}
        >
          Programming
        </Button>

        <Button
          size='sm'
          variant={activeTab === 'other' ? 'solid' : 'light'}
          radius='none'
          color='danger'
          onClick={() => setActiveTab('other')}
        >
          Other Certificates
        </Button>
      </div>

      <Divider className="my-4" />

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 items-center justify-center gap-2 text-small">
        <Button
          size='sm'
          variant={activeTab === 'workshops' ? 'solid' : 'light'}
          radius='none'
          color='danger'
          onClick={() => setActiveTab('workshops')}
          
        >
          Cybersecurity Workshops
        </Button>
      </div>

      {/* Conditional Rendering */}
      <div className='mt-12 mb-3'>
        {activeTab === 'cybersecurity' && <CertTemplateCS />}
        {activeTab === 'webdev' && <CertTemplateWD />}
        {activeTab === 'prog' && <CertTemplatePR />}
        {activeTab === 'other' && <CertTemplateOther />}
        {activeTab === 'workshops' && <Workshops />}
      </div>
    </div>
  );
}

export default CustomDivider;
