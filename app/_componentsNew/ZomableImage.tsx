'use client';

import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';

export default function ZoomableImage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src="/my pic.png"
        alt="Portfolio Screenshot"
        width={600}
        height={400}
        className="cursor-zoom-in rounded-lg transition hover:opacity-80"
        onClick={() => setIsOpen(true)}
      />

      <Dialog as={Fragment} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <Dialog.Panel className="relative max-w-4xl w-full p-4">
            <Image
              src="/my pic.png"
              alt="Zoomed Screenshot"
              width={500}
              height={0}
              className=" rounded-lg"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
