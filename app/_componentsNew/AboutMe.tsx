"use client";

import Image from "next/image";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { Eye, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function AboutMe() {
  return (
    <div className="relative p-2 pt-0 space-y-12 w-full overflow-hidden transition-colors duration-500">
      {/* ================= BACKGROUND LAYERS ================= */}

      {/* Base */}
      <div className="absolute inset-0 -z-40 bg-white dark:bg-black transition-colors duration-500" />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-30 opacity-10 dark:opacity-20 transition-opacity duration-500
        bg-[linear-gradient(to_right,#00ffcc22_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc22_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,170,0.15),transparent_50%)] dark:opacity-100 opacity-40 transition-opacity duration-500" />

      {/* ================= TITLE ================= */}
      <h2 className="text-3xl font-bold font-mono text-cyan-600 dark:text-cyan-400 tracking-wider transition-colors">
        ./about_me
      </h2>

      {/* ================= MAIN PANEL ================= */}
      <div
        className="
        relative space-y-10
        rounded-2xl
        border border-gray-300 dark:border-cyan-400/30
        bg-white/70 dark:bg-black/60
        backdrop-blur-xl
        shadow-lg dark:shadow-[0_0_60px_rgba(0,255,170,0.15)]
        p-6
        transition-all duration-500
      "
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-gray-300 dark:border-green-500/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-mono text-gray-600 dark:text-green-400">
            aizaz@secure-profile:~$ about
          </span>
        </div>

        {/* Status */}
        <div className="text-xs font-mono text-green-600 dark:text-green-400 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          profile integrity: verified • firewall: active
        </div>

        {/* INTRO CARD */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
          rounded-xl p-5
          border border-gray-300 dark:border-cyan-400/20
          bg-white/60 dark:bg-black/40
          transition-all
          hover:border-cyan-500/60
          hover:shadow-[0_0_30px_rgba(0,255,170,0.25)]
        "
        >
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
            I'm a Computer Science Graduate with strong interest in{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
              Cybersecurity
            </span>{" "}
            and{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Full-Stack Development
            </span>
            . I build secure, scalable, production-ready systems.
          </p>
        </motion.div>

        {/* ================= DISCLOSURES ================= */}

        {[
          {
            title: "Cybersecurity Expertise",
            color: "cyan",
            content:
              "Penetration testing, network defense, firewalls, IDS/IPS, SIEM platforms, vulnerability management, Linux hardening, SQL log analysis, Python automation.",
          },
          {
            title: "Web Development Stack",
            color: "blue",
            content:
              "React, Next.js, Tailwind, UI systems, MySQL, PostgreSQL, MongoDB, Supabase, API integrations, and secure backend architecture.",
          },
        ].map((section, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div
                className="
                rounded-xl
                border border-gray-300 dark:border-gray-700
                bg-white/60 dark:bg-black/40
                transition-all
                hover:border-cyan-500/50
              "
              >
                <Disclosure.Button className="flex justify-between items-center w-full p-5 text-left">
                  <span
                    className={`
                      font-semibold
                      ${
                        section.color === "cyan"
                          ? "text-cyan-600 dark:text-cyan-400"
                          : "text-blue-600 dark:text-blue-400"
                      }
                    `}
                  >
                    {section.title}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180 text-cyan-500" : ""
                    }`}
                  />
                </Disclosure.Button>

                <AnimatePresence>
                  {open && (
                    <Disclosure.Panel static>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {section.content}
                      </motion.div>
                    </Disclosure.Panel>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Disclosure>
        ))}
      </div>

      {/* ================= CERTIFICATION GRID ================= */}

      <div className="flex flex-col items-center space-y-10 mt-16">
        <h3 className="text-xl font-mono text-cyan-600 dark:text-cyan-400 tracking-wider">
          // Officially Certified By
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 w-full">
          {[
            "/google-logo.svg",
            "/ec-council-colored.svg",
            "/meta-logo.svg",
            "/coursera-logo.svg",
            "/pm-youth.png",
            "/digiskills.png",
            "/Sololearn.svg",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                flex items-center justify-center
                rounded-xl
                p-4
                bg-white/70 dark:bg-black/50
                border border-gray-300 dark:border-cyan-400/20
                backdrop-blur-md
                transition-all
                hover:border-cyan-500/60
                hover:shadow-[0_0_40px_rgba(0,255,170,0.35)]
              "
            >
              <Image
                src={src}
                alt="cert-logo"
                width={80}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        <a
          href="#certificates"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 font-mono transition"
        >
          View Certificates <Eye className="h-4 w-4 inline ml-1" />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
