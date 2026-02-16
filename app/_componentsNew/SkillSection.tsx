"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function SkillsSection() {
  const sections = [
    {
      title: "Cybersecurity",
      accent: "cyan",
      skills: [
        "Penetration Testing & Vulnerability Assessment",
        "Network Security & Firewalls",
        "IDS/IPS (Snort, Suricata)",
        "SIEM (Splunk, Chronicle)",
        "Threat Modeling",
        "Linux • SQL • Python Automation",
      ],
    },
    {
      title: "Frontend",
      accent: "blue",
      skills: [
        "HTML5 • CSS3 • JavaScript",
        "React.js • Next.js",
        "Tailwind • ShadCN • Hero UI",
        "Responsive UI/UX",
      ],
    },
    {
      title: "Backend & Databases",
      accent: "purple",
      skills: [
        "MySQL • PostgreSQL",
        "MongoDB",
        "Python Backend Logic",
        "Supabase",
        "Learning Django & APIs",
      ],
    },
    {
      title: "Soft Skills",
      accent: "emerald",
      skills: [
        "Attention to Detail",
        "Fast Learner",
        "Strong Communication",
        "Team Collaboration",
        "Problem Solving",
      ],
    },
  ];

  const accentColors: any = {
    cyan: {
      text: "text-cyan-600 dark:text-cyan-400",
      border: "border-cyan-500/40",
      glow: "shadow-[0_0_30px_rgba(0,255,170,0.25)]",
      bar: "bg-cyan-500",
    },
    blue: {
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-500/40",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",
      bar: "bg-blue-500",
    },
    purple: {
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-500/40",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.25)]",
      bar: "bg-purple-500",
    },
    emerald: {
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-500/40",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
      bar: "bg-emerald-500",
    },
  };

  return (
    <div
      id="skills"
      className="relative p-10 pt-0 space-y-12 w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30  transition-colors duration-500" />

      <div
        className="absolute inset-0 -z-20 opacity-10 dark:opacity-20
        bg-[linear-gradient(to_right,#00ffcc22_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc22_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* Title */}
      <h2 className="text-3xl font-bold font-mono text-cyan-600 dark:text-cyan-400 tracking-wider">
        ./Skills
      </h2>

      <div className="space-y-8">
        {sections.map((section, index) => {
          const accent = accentColors[section.accent];

          return (
            <Disclosure key={index}>
              {({ open }) => (
                <div
                  className={`
                    rounded-2xl
                    border
                    ${accent.border}
                    bg-white/70 dark:bg-black/60
                    backdrop-blur-xl
                    transition-all duration-300
                    ${open ? accent.glow : ""}
                  `}
                >
                  {/* Header */}
                  <Disclosure.Button className="flex justify-between items-center w-full px-6 py-5 font-mono">
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-semibold ${accent.text}`}>
                        {section.title}
                      </span>

                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        [{section.skills.length} modules]
                      </span>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180 text-cyan-500" : "text-gray-400"
                      }`}
                    />
                  </Disclosure.Button>

                  {/* Animated Panel */}
                  <AnimatePresence>
                    {open && (
                      <Disclosure.Panel static>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="px-6 pb-6 space-y-5"
                        >
                          {section.skills.map((skill, i) => (
                            <div key={i} className="space-y-1">
                              {/* Skill Label */}
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-700 dark:text-gray-300 font-mono">
                                  {skill}
                                </span>
                                <span className="text-xs text-gray-400">
                                  secure
                                </span>
                              </div>

                              {/* Animated Bar */}
                              <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: `${80 + Math.random() * 20}%`,
                                  }}
                                  transition={{ duration: 0.8, delay: i * 0.1 }}
                                  className={`h-2 ${accent.bar}`}
                                />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSection;
