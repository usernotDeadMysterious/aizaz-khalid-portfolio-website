"use client";

import { Button } from "@heroui/react";
import { Disclosure, Transition } from "@headlessui/react";
import { Mail, MessageSquare, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import ServiceMessage from "./ServiceMessage";

function Contact() {
  return (
    <div
      id="contact"
      className="relative p-1 pt-0 w-full font-mono transition-colors duration-500"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-30 bg-white dark:bg-black transition-colors duration-500" />

      {/* subtle grid only in dark */}
      <div
        className="absolute inset-0 -z-20 opacity-0 dark:opacity-20 transition-opacity duration-500
        bg-[linear-gradient(to_right,#00ff0022_1px,transparent_1px),linear-gradient(to_bottom,#00ff0022_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* ================= TERMINAL HEADER ================= */}
      <div
        className="
          px-6 py-3 flex justify-between items-center rounded-t-xl border
          bg-zinc-100 dark:bg-black
          border-zinc-300 dark:border-green-400/30
          text-zinc-700 dark:text-green-400
          transition-colors duration-500
        "
      >
        <span>contact@aizaz:~$</span>

        <span className="text-zinc-500 dark:text-green-500 animate-pulse">
          ● SECURE CHANNEL
        </span>
      </div>

      {/* SCAN LINE */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-zinc-400
          dark:via-green-400
          to-transparent
        "
      />

      {/* ================= PANEL BODY ================= */}
      <div
        className="
          rounded-b-xl p-1 space-y-6 border
          bg-white/90 dark:bg-black/95
          border-zinc-300 dark:border-green-400/20
          shadow-md dark:shadow-[0_0_40px_rgba(0,255,0,0.1)]
          transition-colors duration-500
        "
      >
        {[
          {
            title: "initiate --service-request",
            content: <ServiceMessage />,
          },
          {
            title: "execute --direct-email",
            content: (
              <>
                <p className="text-zinc-600 dark:text-green-300 mb-4">
                  launch mail protocol via encrypted gateway
                </p>

                <Button
                  className="
                    bg-zinc-800 text-white
                    dark:bg-green-500 dark:text-black
                    shadow-md dark:shadow-[0_0_20px_rgba(0,255,0,0.6)]
                    hover:bg-zinc-700
                    dark:hover:bg-green-400
                    transition-all font-mono
                  "
                  onClick={() =>
                    (window.location.href = "mailto:aizazkhalid852@gmail.com")
                  }
                >
                  <Mail size={16} className="mr-2" />
                  run mail.exe
                </Button>
              </>
            ),
          },
          {
            title: "connect --whatsapp-channel",
            content: (
              <>
                <p className="text-zinc-600 dark:text-green-300 mb-4">
                  establishing realtime communication node...
                </p>

                <Button
                  className="
                    bg-emerald-600 text-white
                    dark:bg-emerald-500 dark:text-black
                    shadow-md dark:shadow-[0_0_20px_rgba(16,185,129,0.6)]
                    hover:bg-emerald-500
                    dark:hover:bg-emerald-400
                    transition-all font-mono
                  "
                  onClick={() =>
                    window.open("https://wa.me/923169694343", "_blank")
                  }
                >
                  <MessageSquare size={16} className="mr-2" />
                  open socket()
                </Button>
              </>
            ),
          },
        ].map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div
                className="
                  border rounded-lg overflow-hidden transition-colors duration-500
                  border-zinc-300 dark:border-green-400/20
                "
              >
                {/* MODULE HEADER */}
                <Disclosure.Button
                  className="
                    flex justify-between items-center w-full px-6 py-4
                    bg-zinc-100 dark:bg-black
                    hover:bg-zinc-200 dark:hover:bg-green-400/10
                    transition
                    text-zinc-700 dark:text-green-400
                  "
                >
                  <span>{item.title}</span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180 text-zinc-700 dark:text-green-400" : ""
                    }`}
                  />
                </Disclosure.Button>

                {/* MODULE BODY */}
                <Transition
                  show={open}
                  enter="transition duration-300 ease-out"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-200 ease-in"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                >
                  <Disclosure.Panel
                    static
                    className="
                      px-6 py-6 border-t transition-colors duration-500
                      bg-white dark:bg-black/80
                      border-zinc-200 dark:border-green-400/10
                    "
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.content}
                    </motion.div>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>

      {/* CRT overlay ONLY in dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-40 transition-opacity duration-500
        bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px)]
        bg-[size:100%_3px]"
      />
    </div>
  );
}

export default Contact;
