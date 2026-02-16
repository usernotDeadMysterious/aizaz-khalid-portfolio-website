"use client";

import React from "react";
import ModalCustom from "./Modalcustom";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    logo: "/google-logo.svg",
    alt: "Google Logo",
    title: "Google Cybersecurity Certificate",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/professional-cert/F7OTKYDDE70X",
    sourcefile: "/gcc.png",
  },
  {
    id: 2,
    logo: "/ec-council-colored.svg",
    alt: "EC-Council Logo",
    title: "Ethical Hacking Essentials",
    verifyLink:
      "https://github.com/usernotDeadMysterious/ec-council/blob/main/EHE%20Certificate.png",
    sourcefile: "/ehe.png",
  },
  {
    id: 3,
    logo: "/ec-council-colored.svg",
    alt: "EC-Council Logo",
    title: "Network Defense Essentials",
    verifyLink:
      "https://github.com/usernotDeadMysterious/ec-council/blob/main/NDE%20certificate.png",
    sourcefile: "/nde.png",
  },
  {
    id: 4,
    logo: "/ec-council-colored.svg",
    alt: "EC-Council Logo",
    title: "Intro to Anonymity, Dark Web & Cryptocurrency",
    verifyLink:
      "https://github.com/usernotDeadMysterious/ec-council/blob/main/Intro%20to%20anonymity%2C%20darkweb.png",
    sourcefile: "/darkweb.png",
  },
  {
    id: 5,
    logo: "/pm-youth.png",
    alt: "Prime Minister's Youth Program Pakistan Logo",
    title: "Digital Forensics & Cyber Security",
    verifyLink:
      "https://github.com/usernotDeadMysterious/my-certificates/blob/main/DFCS.jpg",
    sourcefile: "/DFCS.jpg",
  },
];

function CertTemplateCS() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
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
            dark:shadow-[0_0_30px_rgba(0,255,0,0.05)]

            hover:scale-[1.02]
            hover:border-zinc-500
            dark:hover:border-green-400
            dark:hover:shadow-[0_0_40px_rgba(0,255,0,0.25)]
          "
        >
          {/* LEFT: Logo */}
          <div
            className="
              flex items-center justify-center 
              w-16 h-16 rounded-lg 
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

          {/* RIGHT: Content */}
          <div className="flex flex-col justify-between flex-1 gap-4">
            <div>
              <p className="text-xs opacity-60 mb-1">
                credential_id::{cert.id.toString().padStart(3, "0")}
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

            {/* Action Buttons */}
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

          {/* Subtle Scan Glow Effect (dark only) */}
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

export default CertTemplateCS;
