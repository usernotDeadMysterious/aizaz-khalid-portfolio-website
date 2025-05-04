'use client';

import { Button, Divider } from '@heroui/react';
import { Disclosure } from '@headlessui/react';
import { Mail, Send, MessageSquare } from 'lucide-react';
import React, { FormEvent } from 'react';
import ServiceMessage from './ServiceMessage';

function Contact() {
  
  return (
    <div id="contact" className="p-8 pt-0 space-y-6 w-full">
      <h2 className="text-2xl font-bold">Contact</h2>
      <Divider className="my-4" />

      {/* Contact Form Disclosure */}
      <Disclosure>
        {({ open }) => (
          <div className="space-y-2">
            <Disclosure.Button className="w-full text-left px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">
              <span className="font-medium">📬 Contact Form (for services)</span>
            </Disclosure.Button>

            <Disclosure.Panel className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-md shadow space-y-4">
              {/* Injecting the full form component */}
              <ServiceMessage />
            </Disclosure.Panel>
            </div>
        )}
      </Disclosure>

      {/* Direct Email Disclosure */}
      <Disclosure>
        {({ open }) => (
          <div className="space-y-2">
            <Disclosure.Button className="w-full text-left px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">
              <span className="font-medium">📧 Direct Email</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-md shadow space-y-2">
              <p>You can email me directly for inquiries or gigs.</p>
              <Button
                color="danger"
                variant="solid"
                onClick={() => window.location.href = 'mailto:aizazkhalid852@gmail.com'}
                
              >
                <Mail size={16} className="mr-2 inline" />
                Email Me
              </Button>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      {/* WhatsApp Disclosure */}
      <Disclosure>
        {({ open }) => (
          <div className="space-y-2">
            <Disclosure.Button className="w-full text-left px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">
              <span className="font-medium">💬 WhatsApp</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-md shadow space-y-2">
              <p>Message me on WhatsApp for quick responses.</p>
              <Button
                color="danger"
                variant="solid"
                onClick={() => window.open('https://wa.me/923169694343', '_blank')}
                
              >
                 <MessageSquare size={16} className="mr-2 inline" />
                Message on WhatsApp
              </Button>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      
     


    </div>
  );
}

export default Contact;
