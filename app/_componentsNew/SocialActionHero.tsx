"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function SocialActionHero() {
  return (
    <div className="relative w-full flex justify-center px-6 pb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="
          relative flex flex-wrap items-center justify-center gap-10
          px-10 py-6 rounded-2xl
          backdrop-blur-xl
          bg-gradient-to-r
          from-gray-100 via-white to-gray-100
          dark:from-black/60 dark:via-gray-900/60 dark:to-black/60
          border border-gray-300 dark:border-cyan-400/30
          shadow-xl dark:shadow-[0_0_60px_rgba(0,255,170,0.25)]
          transition-colors duration-500
        "
      >
        <CyberIcon
          href="https://github.com/usernotDeadMysterious"
          icon={<Github size={24} />}
          label="GitHub"
          color="cyan"
        />

        <CyberIcon
          href="https://www.instagram.com/"
          icon={<Instagram size={24} />}
          label="Instagram"
          color="pink"
        />

        <CyberIcon
          href="https://www.linkedin.com/"
          icon={<Linkedin size={24} />}
          label="LinkedIn"
          color="blue"
        />
      </motion.div>
    </div>
  );
}

interface CyberIconProps {
  href: string;
  icon: ReactNode;
  label: string;
  color?: "cyan" | "pink" | "blue";
}

function CyberIcon({ href, icon, label, color = "cyan" }: CyberIconProps) {
  const hoverColors = {
    cyan: "hover:text-cyan-500 dark:hover:text-cyan-400",
    pink: "hover:text-pink-500 dark:hover:text-pink-400",
    blue: "hover:text-blue-600 dark:hover:text-blue-400",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex flex-col items-center
          text-gray-700 dark:text-gray-300
          transition duration-300
          ${hoverColors[color]}
        `}
      >
        <div
          className="
            p-3 rounded-full
            border border-gray-300 dark:border-cyan-400/30
            bg-white dark:bg-black/50
            shadow-md dark:shadow-[0_0_15px_rgba(0,255,170,0.4)]
            transition duration-300
          "
        >
          {icon}
        </div>
        <span className="text-xs mt-2 font-mono">{label}</span>
      </motion.div>
    </Link>
  );
}
