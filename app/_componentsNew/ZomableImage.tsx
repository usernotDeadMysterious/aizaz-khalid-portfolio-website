"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import LazyLoadImage from "./LazyLoadImage";

export default function ZoomableImage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <LazyLoadImage />
      </div>

      <Dialog as={Fragment} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 ">
          <Dialog.Panel className="relative max-w-4xl w-full p-4 items-center flex justify-center transition-transform duration-300 ease-out scale-100 opacity-100 ">
            <Image
              src="/profileimg/my-img.jpg"
              alt="Zoomed Screenshot"
              width={500}
              height={0}
              className=" rounded-lg"
              loading="lazy" // Optional, default behavior is lazy

              // loading="lazy"// Set this to true if you want eager loading instead
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
