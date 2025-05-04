import React from 'react'
import ModalCustom from './Modalcustom'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@heroui/react'

// Certificate data array
const certificates = [
  {
    id: 1,
    logo: '/Sololearn.svg',
    alt: 'Solo Learn Logo',
    title: 'Introduction to Python ',
    verifyLink: 'https://www.sololearn.com/certificates/CC-Z3SJOL8P',
    sourcefile: '/sololearn/intro-python.png'
  },
  {
    id: 2,
    logo: '/Sololearn.svg',
    alt: 'Solo Learn Logo',
    title: 'Python Intermediate',
    verifyLink: 'https://www.sololearn.com/certificates/CC-YCMFLRCN',
    sourcefile: '/sololearn/python.png'
  },
  {
    id: 3,
    logo: '/Sololearn.svg',
    alt: 'Solo Learn Logo',
    title: 'Introduction to JavaScript',
    verifyLink: 'https://www.sololearn.com/certificates/CC-YR2DJLIQ',
    sourcefile: '/sololearn/intro-JS.png'
  },
  {
    id: 4,
    logo: '/Sololearn.svg',
    alt: 'Solo Learn Logo',
    title: 'JavaScript Intermediate',
    verifyLink: 'https://www.sololearn.com/certificates/CC-KLB7XIGM',
    sourcefile: '/sololearn/JS.png'
  },
  
  
  // Add more certs as needed
]

function CertTemplatePR() {
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

export default CertTemplatePR
