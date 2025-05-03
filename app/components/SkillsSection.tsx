import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
function SkillsSection() {
  return (
    <div className="p-8 pt-0 space-y-3 w-full">

<h2 className="text-2xl font-bold text-gray-800">Skills & Expertise</h2>

<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-[]'>
    {/* Cybersecurity Section */}
    <div>
  <Disclosure>
      {({ open }) => (
        <div className="w-full rounded-lg border border-gray-300 bg-slate-300/30 p-3 shadow-md">
          <Disclosure.Button className="flex w-full justify-between items-center text-left text-red-600 font-semibold text-xl">
            <span>Cybersecurity</span>
            <ChevronDown
              className={`h-5 w-5 transform transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </Disclosure.Button>
          
          <Disclosure.Panel
            static
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Penetration Testing & Vulnerability Assessment</li>
              <li>Network Security & Firewalls</li>
              <li>IDS/IPS Tools (Snort, Suricata)</li>
              <li>SIEM Platforms (e.g., Splunk, Chronicle SIEM)</li>
              <li>Threat Modeling & Asset Classification</li>
              <li>Linux, SQL (log analysis), Python (automation)</li>
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  </div>

 

  {/* Web Development Section */}
  <div>
  <Disclosure>
      {({ open }) => (
        <div className="w-full rounded-lg border border-gray-300 bg-slate-300/30 p-3 shadow-md">
          <Disclosure.Button className="flex w-full justify-between items-center text-left text-purple-600 font-semibold text-xl">
            <span>Frontend</span>
            <ChevronDown
              className={`h-5 w-5 transform transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </Disclosure.Button>

          <Disclosure.Panel
            static
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React.js & Next.js (SSR/SSG)</li>
              <li>Tailwind CSS, ShadCN, Hero UI</li>
              <li>UI/UX Principles & Responsive Design</li>
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  </div>

  {/* Backend & Databases Section */}
  <div>
  <Disclosure>
      {({ open }) => (
        <div className="w-full rounded-lg border border-gray-300 bg-slate-300/30 p-3 shadow-md">
          <Disclosure.Button className="flex w-full justify-between items-center text-left text-green-600 font-semibold text-xl">
            <span>Backend & Databases</span>
            <ChevronDown
              className={`h-5 w-5 transform transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </Disclosure.Button>

          <Disclosure.Panel
            static
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>SQL: MySQL & PostgreSQL</li>
              <li>NoSQL: MongoDB</li>
              <li>Python (scripting & backend logic)</li>
              <li>Supabase (cloud backend)</li>
              <li>Currently learning Django & APIs</li>
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  </div>

   {/* Soft skills  */}
   <div>
  <Disclosure>
  {({ open }) => (
    <div className="w-full rounded-lg border border-gray-300 bg-slate-300/30 p-3 shadow-md">
      <Disclosure.Button className="flex w-full justify-between items-center text-left text-blue-600 font-semibold text-xl">
        <span>Soft Skills</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </Disclosure.Button>

      <Disclosure.Panel
        static
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Strong attention to details</li>
          <li>Quick learner</li>
          <li>Excellent written and verbal communication</li>
          <li>Collaborative team player with leadership potential</li>
          <li>Adaptable to dynamic environments</li>
          <li>Problem-solving and critical thinking</li>
          <li>Time management and multitasking abilities</li>
        </ul>
      </Disclosure.Panel>
    </div>
  )}
</Disclosure>
  </div>

</div>
  
    </div>
  )
}

export default SkillsSection
