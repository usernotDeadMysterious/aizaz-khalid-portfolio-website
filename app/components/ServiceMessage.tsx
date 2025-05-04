'use client';

import React, { FormEvent, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Input, Textarea, Button } from '@heroui/react';
import clsx from 'clsx';

function ServiceMessage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceID = 'service_ketgxai';
    const userID = 'd38KTQtxALNSXYUpc';

    try {
      // Auto-reply to user
      await emailjs.sendForm(serviceID, 'template_vhaphln', formRef.current, userID);

      // Notify yourself
      await emailjs.sendForm(serviceID, 'template_nfbipph', formRef.current, userID);

      setNotification({ message: 'Message sent successfully!', type: 'success' });
      formRef.current.reset();
    } catch {
      setNotification({ message: 'Failed to send message. Please try again.', type: 'error' });
    }

    setTimeout(() => setNotification(null), 5000); // Auto-hide after 5s
  };

  return (
    <div className="p-8 pt-0 space-y-4 w-full">
      <h2 className="text-2xl font-bold">Service Inquiry</h2>

      {notification && (
        <div
          className={clsx(
            'px-4 py-2 rounded-md text-sm font-medium transition-all',
            notification.type === 'success'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          )}
        >
          {notification.message}
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <Input name="name" type="text" placeholder="Your Name" required />
        <Input name="email" type="email" placeholder="Your Email" required />

        <select
          name="service"
          title="Select Service"
          required
          className="border rounded-md p-2 w-full dark:bg-zinc-900 dark:border-zinc-700"
        >
          <option value="">Select Service</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Web Development">Web Development</option>
          <option value="SEO">SEO</option>
        </select>

        <Textarea name="message" placeholder="Describe your needs..." required />

        <Button type="submit" color="danger" variant="solid">
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default ServiceMessage;
