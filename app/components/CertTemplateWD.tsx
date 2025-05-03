import React from 'react'
import ModalCustom from './Modalcustom'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@heroui/react'

// Certificate data array
const certificates = [
    {
        id: 1,
        logo: '/meta-logo.svg',
        alt: 'Meta Logo',
        title: 'Meta Front-End Developer Certificate',
        verifyLink: 'https://www.coursera.org/account/accomplishments/professional-cert/8OKXO059EAUP',
        sourcefile: '/meta-cert.png'
      },
  {
    id: 2,
    logo: '/meta-logo.svg',
    alt: 'Meta Logo',
    title: 'Advanced React',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/1X2D3C662BCQ',
    sourcefile: '/meta/advanced-react.png'
  },
  {
    id: 3,
    logo: '/meta-logo.svg',
    alt: 'Meta Logo',
    title: 'HTML CSS in Depth',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/3CSWTGI4MAQF',
    sourcefile: '/meta/htmlcss.png'
  },
  {
    id: 4,
    logo: '/meta-logo.svg',
    alt: 'Meta Logo',
    title: 'Programming with JavaScript',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/5RFH1K7WR0QS',
    sourcefile: '/meta/javascript.png'
  },
  {
    id: 5,
    logo: '/meta-logo.svg',
    alt: 'Meta Logo',
    title: 'UI/UX Principles',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/5Z6XR2LA1LLI',
    sourcefile: '/meta/uiux.png'
  },
  {
    id: 6,
    logo: '/meta-logo.svg',
    alt: 'Meta Logo',
    title: 'Version Control',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/WKILWTA80R71',
    sourcefile: '/meta/version-control.png'
  },
  // Add more certs as needed
]

function CertTemplateWD() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
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

export default CertTemplateWD
