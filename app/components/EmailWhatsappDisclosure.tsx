import React from 'react'
import { Divider, Button } from '@heroui/react';
import { Disclosure } from '@headlessui/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
function EmailWhatsappDisclosure() {
  return (
    <div>
      <>
        {/* Email Disclosure  */}
      <Disclosure>
        {({ open }) => (
          <div className="space-y-2">
            <Disclosure.Button className="w-full text-left px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">
              <span className="font-medium">📧 Email</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-md shadow space-y-2">
              <p>Email me for detailed feedback and inquiries.</p>
              <Button
                color="danger"
                variant="solid"
                onClick={() => window.open('mailto:aizazkhalid852@gmail.com', '_blank')}
              >
                <Mail size={16} className="mr-2 inline" />
                Email
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
              <p>Whatsapp me for detailed feedback and inquiries.</p>
              <Button
                color="danger"
                variant="solid"
                onClick={() => window.open('https://wa.me/923169694343', '_blank')}
              >
                <MessageSquare size={16} className="mr-2 inline" />
                WhatsApp
              </Button>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      </>
    </div>
  )
}

export default EmailWhatsappDisclosure
