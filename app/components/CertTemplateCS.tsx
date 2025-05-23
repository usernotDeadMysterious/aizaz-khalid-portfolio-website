import React from 'react'
import ModalCustom from './Modalcustom'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@heroui/react'

// Certificate data array
const certificates = [
  {
    id: 1,
    logo: '/google-logo.svg',
    alt: 'Google Logo',
    title: 'Google Cybersecurity Certificate',
    verifyLink: 'https://www.coursera.org/account/accomplishments/professional-cert/F7OTKYDDE70X',
    sourcefile: '/gcc.png'
  },
  {
    id: 2,
    logo: '/ec-council-colored.svg',
    alt: 'EC-Council Logo',
    title: 'Ethical Hacking Essentials',
    verifyLink: 'https://github.com/usernotDeadMysterious/ec-council/blob/main/EHE%20Certificate.png',
    sourcefile: '/ehe.png'
  },
  {
    id: 3,
    logo: '/ec-council-colored.svg',
    alt: 'EC-Council Logo',
    title: 'Network Defense Essentials',
    verifyLink: 'https://github.com/usernotDeadMysterious/ec-council/blob/main/NDE%20certificate.png',
    sourcefile: '/nde.png'
  },
  {
    id: 4,
    logo: '/ec-council-colored.svg',
    alt: 'EC-Council Logo',
    title: 'Intro to Anonymity,Dark web & Cryptocurrency',
    verifyLink: 'https://github.com/usernotDeadMysterious/ec-council/blob/main/Intro%20to%20anonymity%2C%20darkweb.png',
    sourcefile: '/darkweb.png'
  },
  {
    id: 5,
    logo: '/pm-youth.png',
    alt: 'Prime Minister\'s Youth Program Program Pakistan Logo',
    title: 'Digital Forensics & Cyber Security',
    verifyLink: 'https://github.com/usernotDeadMysterious/my-certificates/blob/main/DFCS.jpg',
    sourcefile: '/DFCS.jpg'
  },
  
  
  // Add more certs as needed
]

function CertTemplateCS() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 ">
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="flex flex-row justify-between  gap-1 shadow-lg  dark:border-s-2 rounded-lg p-1"
        >
          <div className='flex flex-1/3 items-center justify-center'>
          <Image
            src={cert.logo}
            alt={cert.alt}
            width={48}
            height={48}
            className="object-contain"
          />
          </div>
          
          <div className='flex flex-2/3 flex-col gap-2'>
            <h3 className="font-semibold">{cert.title}</h3>
            <div className='flex flex-row gap-2'>
            <div>
            <Link
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm hover:underline"
            >
              <Button size="sm" variant="ghost" color="danger">
                Verify Credential
              </Button>
            </Link>
            </div>
            <div>
            <ModalCustom sourcefile={cert.sourcefile} />
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CertTemplateCS
