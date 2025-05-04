import React from 'react'
import ModalCustom from './Modalcustom'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@heroui/react'

// Certificate data array
const certificates = [
  {
    id: 1,
    logo: '/digiskills.png',
    alt: 'DigiSkills Logo',
    title: 'Digital Marketing',
    verifyLink: 'https://github.com/usernotDeadMysterious/my-certificates/blob/main/digital-marketing.png',
    sourcefile: '/other/digital-marketing.png'
  },
  {
    id: 2,
    logo: '/digiskills.png',
    alt: 'DigiSkills Logo',
    title: 'Freelancing',
    verifyLink: 'https://github.com/usernotDeadMysterious/my-certificates/blob/main/freelancing.png',
    sourcefile: '/other/freelancing.png'
  },
  {
    id: 3,
    logo: '/mathworks.svg',
    alt: 'Math works Logo',
    title: 'Image Processing Matlab',
    verifyLink: 'https://github.com/usernotDeadMysterious/my-certificates/blob/main/image-processing.png',
    sourcefile: '/other/image-processing.png'
  },
  {
    id: 4,
    logo: '/mathworks.svg',
    alt: 'Math works Logo',
    title: 'Matlab Onramp',
    verifyLink: 'https://github.com/usernotDeadMysterious/my-certificates/blob/main/matlab.png',
    sourcefile: '/other/matlab.png'
  },
  {
    id: 5,
    logo: '/digiskills.png',
    alt: 'DigiSkills Logo',
    title: 'Search Engine Optimization',
    verifyLink: 'https://github.com/usernotDeadMysterious/my-certificates/blob/main/seo.png',
    sourcefile: '/other/seo.png'
  },
  {
    id: 6,
    logo: '/digiskills.png',
    alt: 'DigiSkills Logo',
    title: 'Wordpress',
    verifyLink: 'https://github.com/usernotDeadMysterious/my-certificates/blob/main/wordpress.png',
    sourcefile: '/other/wordpress.png'
  },
  
  
  // Add more certs as needed
]

function CertTemplateOther() {
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

export default CertTemplateOther
