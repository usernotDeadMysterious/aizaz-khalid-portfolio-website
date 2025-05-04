import React from 'react';
import { Divider, Button } from '@heroui/react';
import { Disclosure } from '@headlessui/react';
import { Mail, MessageSquare } from 'lucide-react';

function Feedback() {
  return (
    <div className="p-8 pt-0 space-y-3 w-full">
      <h2 className="text-2xl font-bold">Feedback</h2>
      <span className='text-xs'> (Optional) Please give your honest feedback about development and design of website.</span>
      <br /><span className='text-xs'> You can message directly on whatsapp or Email me</span>
      <Divider className="my-4" />

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

      {/* Email Disclosure */}
      <Disclosure>
        {({ open }) => (
          <div className="space-y-2">
            <Disclosure.Button className="w-full text-left px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">
              <span className="font-medium">📧 Email</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-md shadow space-y-2">
              <p>Email me for detailed feedback and inquiries.</p>
              <Button
                color="primary"
                variant="solid"
                onClick={() => window.open('mailto:your-email@example.com', '_blank')}
              >
                <Mail size={16} className="mr-2 inline" />
                Email
              </Button>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default Feedback;
