"use client";

import React from "react";
import { LucideMessageCircleWarning, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    {
      title: "Real Estate Platform (FYP)",
      accent: "red",
      image: "/fyp.png",
      description:
        "Full-featured property listing system with authentication, filtering, map integration and production-ready architecture.",
      live: "https://real-estate-project-one-coral.vercel.app/",
      repo: "https://github.com/usernotDeadMysterious/Real-Estate-Platform",
      tags: ["Next.js", "Tailwind", "Supabase", "Auth"],
    },
    {
      title: "Personal Portfolio Website",
      accent: "blue",
      image: "/portfolio.png",
      description:
        "Responsive animated portfolio built with modern frontend architecture and dark/light adaptive UI.",
      live: "https://aizaz-khalid-portfolio-website.vercel.app",
      repo: "https://github.com/usernotDeadMysterious/aizaz-khalid-portfolio-website",
      tags: ["React", "Tailwind", "Animations"],
    },
    {
      title: "CyberLock Simulator",
      accent: "purple",
      video:
        "https://xvtmkouugfhjglzaqfkp.supabase.co/storage/v1/object/public/mystorage//2025-07-03%2017-16-12.mkv",
      description:
        "Ransomware impact simulation designed strictly for educational and controlled lab environments.",
      live: "#",
      repo: "#",
      tags: ["Security Lab", "Simulation", "Ransomware"],
    },
  ];

  const accentStyles: any = {
    red: {
      border: "border-red-500/40",
      glow: "hover:shadow-[0_0_60px_rgba(255,0,0,0.35)]",
      text: "text-red-500 dark:text-red-400",
      badge: "bg-red-500/10 text-red-600 dark:text-red-400",
      button: "bg-red-500 hover:bg-red-600",
    },
    blue: {
      border: "border-blue-500/40",
      glow: "hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]",
      text: "text-blue-600 dark:text-blue-400",
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      button: "bg-blue-500 hover:bg-blue-600",
    },
    purple: {
      border: "border-purple-500/40",
      glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]",
      text: "text-purple-600 dark:text-purple-400",
      badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      button: "bg-purple-500 hover:bg-purple-600",
    },
  };

  return (
    <div
      id="projects"
      className="relative p-1 pt-2 space-y-5 w-full overflow-hidden"
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
        ./projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          const accent = accentStyles[project.accent];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`
                relative group
                rounded-2xl
                border ${accent.border}
                bg-white/80 dark:bg-black/60
                backdrop-blur-xl
                p-5
                transition-all duration-500
                hover:-translate-y-2
                ${accent.glow}
              `}
            >
              {/* Scan line effect */}
              <div
                className="absolute top-0 left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-cyan-400 to-transparent
                opacity-0 group-hover:opacity-100
                transition duration-500"
              />

              {/* Media */}
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  className="rounded-lg mb-4 w-full h-44 object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-44 object-cover"
                />
              )}

              {/* Title */}
              <h3 className={`text-xl font-semibold font-mono ${accent.text}`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                {project.description}
                {project.title.includes("CyberLock") && (
                  <>
                    <br />
                    <LucideMessageCircleWarning className="inline h-4 w-4 text-yellow-500 mr-1" />
                    Educational use only.
                  </>
                )}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full font-mono ${accent.badge}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-sm text-white rounded-lg font-mono transition ${accent.button}`}
                >
                  Live Demo
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-mono hover:bg-gray-200 dark:hover:bg-gray-800 transition flex items-center gap-2"
                >
                  GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          );
        })}

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-dashed border-gray-400 dark:border-gray-700
          bg-white/60 dark:bg-black/50
          backdrop-blur-xl
          p-6 flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 font-mono">
            More Projects Coming Soon
          </h3>

          <p className="text-sm text-gray-500 mt-3">
            Currently building more secure systems.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsSection;
