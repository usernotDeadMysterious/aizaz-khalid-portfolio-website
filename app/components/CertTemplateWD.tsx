"use client";

import React from "react";
import ModalCustom from "./Modalcustom";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    logo: "/meta-logo.svg",
    alt: "Meta Logo",
    title: "Meta Front-End Developer Certificate",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/professional-cert/8OKXO059EAUP",
    sourcefile: "/meta-cert.png",
  },
  {
    id: 2,
    logo: "/meta-logo.svg",
    alt: "Meta Logo",
    title: "Advanced React",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/1X2D3C662BCQ",
    sourcefile: "/meta/advanced-react.png",
  },
  {
    id: 3,
    logo: "/meta-logo.svg",
    alt: "Meta Logo",
    title: "HTML CSS in Depth",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/3CSWTGI4MAQF",
    sourcefile: "/meta/htmlcss.png",
  },
  {
    id: 4,
    logo: "/meta-logo.svg",
    alt: "Meta Logo",
    title: "Programming with JavaScript",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/5RFH1K7WR0QS",
    sourcefile: "/meta/javascript.png",
  },
  {
    id: 5,
    logo: "/meta-logo.svg",
    alt: "Meta Logo",
    title: "UI/UX Principles",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/5Z6XR2LA1LLI",
    sourcefile: "/meta/uiux.png",
  },
  {
    id: 6,
    logo: "/meta-logo.svg",
    alt: "Meta Logo",
    title: "Version Control",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/WKILWTA80R71",
    sourcefile: "/meta/version-control.png",
  },
];

function CertTemplateWD() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06 }}
          className="
            group
            relative
            flex gap-5
            rounded-xl
            p-6
            border
            transition-all duration-300

            bg-zinc-100
            border-zinc-300
            text-zinc-800

            dark:bg-black/80
            dark:border-green-400/20
            dark:text-green-400
            dark:shadow-[0_0_25px_rgba(0,255,0,0.05)]

            hover:scale-[1.02]
            hover:border-zinc-500
            dark:hover:border-green-400
            dark:hover:shadow-[0_0_40px_rgba(0,255,0,0.25)]
          "
        >
          {/* Logo */}
          <div
            className="
              flex items-center justify-center
              w-16 h-16
              rounded-lg
              border
              bg-white
              border-zinc-300

              dark:bg-black
              dark:border-green-400/30
            "
          >
            <Image
              src={cert.logo}
              alt={cert.alt}
              width={42}
              height={42}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1 gap-4">
            <div>
              <p className="text-xs opacity-60 mb-1">
                frontend_stack::{cert.id.toString().padStart(3, "0")}
              </p>

              <h3
                className="
                  font-semibold
                  text-zinc-900
                  dark:text-green-300
                  group-hover:dark:text-green-400
                "
              >
                {cert.title}
              </h3>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2 text-xs rounded-md border
                  border-zinc-400
                  text-zinc-700
                  hover:bg-zinc-200

                  dark:border-green-400/40
                  dark:text-green-400
                  dark:hover:bg-green-400/10
                  dark:hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]

                  transition-all duration-200
                "
              >
                verify --external
              </Link>

              <ModalCustom sourcefile={cert.sourcefile} />
            </div>
          </div>

          {/* Terminal Glow Overlay */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              dark:bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.08),transparent_70%)]
            "
          />
        </motion.div>
      ))}
    </div>
  );
}

export default CertTemplateWD;
