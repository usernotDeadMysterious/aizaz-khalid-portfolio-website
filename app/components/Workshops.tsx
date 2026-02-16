"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const workshops = [
  {
    title: "Cybersecurity Training Workshop",
    date: "October 2024",
    location: "IM Sciences Peshawar",
    description:
      "Hands-on training in ethical hacking, network defense and digital forensics.",
    tags: ["Cybersecurity", "Ethical Hacking", "Forensics"],
  },
  {
    title: "Cybersecurity Training Workshop - Advanced Session",
    date: "October 2024",
    location: "COMSATS - Islamabad",
    description:
      "Focused on SIEM, SOAR, Machine Learning and Mobile Penetration Testing.",
    tags: ["SIEM", "SOAR", "Frida", "Machine Learning"],
  },
];

function Workshops() {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
      {workshops.map((workshop, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.07 }}
          className="
            group
            relative
            rounded-xl
            p-6
            border
            space-y-4
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
          {/* Header */}
          <div>
            <p className="text-xs opacity-60 mb-1 font-mono">
              workshop_log::{(index + 1).toString().padStart(3, "0")}
            </p>

            <h3
              className="
                text-lg font-semibold font-mono tracking-wide
                text-zinc-900
                dark:text-green-300
                group-hover:dark:text-green-400
              "
            >
              {workshop.title}
            </h3>
          </div>

          {/* Meta Info */}
          <div className="flex flex-col gap-1 text-sm opacity-80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              date::{workshop.date}
            </span>

            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              location::{workshop.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed opacity-90">
            {workshop.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {workshop.tags.map((tag, i) => (
              <span
                key={i}
                className="
                  text-xs font-mono
                  px-3 py-1
                  rounded-md
                  border

                  border-zinc-400
                  text-zinc-700
                  bg-zinc-200

                  dark:border-green-400/30
                  dark:text-green-400
                  dark:bg-green-400/10

                  hover:scale-105
                  dark:hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]

                  transition-all duration-200
                "
              >
                #{tag}
              </span>
            ))}
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

export default Workshops;
