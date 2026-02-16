"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative w-full font-mono overflow-hidden transition-colors duration-500">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-zinc-100 dark:bg-black transition-colors duration-500" />

      {/* DARK GRID OVERLAY */}
      <div
        className="absolute inset-0 -z-10 opacity-0 dark:opacity-25 transition-opacity duration-500
        bg-[linear-gradient(rgba(0,255,0,0.04)_1px,transparent_1px)]
        bg-[size:100%_3px]"
      />

      {/* SCAN LINE */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-zinc-400
          dark:via-green-400
          to-transparent
        "
      />

      <div
        className="
          max-w-6xl mx-auto px-6 py-8
          flex flex-col sm:flex-row
          justify-between items-center gap-6
          border-t
          border-zinc-300 dark:border-green-400/20
          text-zinc-700 dark:text-green-400
          relative z-10
          transition-colors duration-500
        "
      >
        {/* LEFT SIDE */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-sm text-zinc-600 dark:text-green-500">
            root@aizaz:~$ echo "Session secured"
          </p>
          <p className="text-xs text-zinc-500 dark:text-green-400/70">
            © {new Date().getFullYear()} Aizaz Khalid — All systems operational.
          </p>
        </div>

        {/* ICONS */}
        <div className="flex gap-6 items-center">
          {[
            {
              href: "https://github.com/usernotDeadMysterious",
              icon: <Github size={20} />,
            },
            {
              href: "https://www.linkedin.com/in/aizaz-khalid-a0864425a/",
              icon: <Linkedin size={20} />,
            },
            {
              href: "mailto:aizazkhalid852@gmail.com",
              icon: <Mail size={20} />,
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3 rounded-full border
                bg-white dark:bg-black
                border-zinc-300 dark:border-green-400/30
                text-zinc-700 dark:text-green-400
                shadow-md
                dark:shadow-[0_0_15px_rgba(0,255,0,0.4)]
                hover:shadow-lg
                dark:hover:shadow-[0_0_30px_rgba(0,255,0,0.8)]
                transition-all duration-300
              "
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* STATUS INDICATOR */}
      <div
        className="
          absolute bottom-3 right-4 text-xs
          text-zinc-500 dark:text-green-500
          animate-pulse
          transition-colors duration-500
        "
      >
        ● ONLINE
      </div>
    </footer>
  );
}

export default Footer;
