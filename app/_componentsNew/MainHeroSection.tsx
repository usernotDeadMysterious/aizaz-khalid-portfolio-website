"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import CVModal from "../_componentsNew/CVModal";
import { useDisclosure } from "@heroui/react";
import ImageHero from "./ImageHero";
import HeroStats from "./HeroStats";

function MainHeroSection() {
  const [booted, setBooted] = useState(false);

  const [showH2, setShowH2] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    if (!booted) return;

    const h1TypingTime = "Hi, I'm Aizaz Khalid".length * 70 + 500;

    const t1 = setTimeout(() => setShowH2(true), h1TypingTime + 800);
    const t2 = setTimeout(() => setShowP(true), h1TypingTime + 1600);
    const t3 = setTimeout(() => setShowSocial(true), h1TypingTime + 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [booted]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {!booted && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onAnimationComplete={() => setBooted(true)}
          className="absolute inset-0 z-50 bg-black flex items-center justify-center font-mono text-green-400 text-sm "
        >
          booting security kernel...
        </motion.div>
      )}

      <div className="relative transition-colors duration-500">
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 -z-3  transition-colors duration-500 " />

        {/* Cyber grid only in dark */}
        <div className="absolute inset-0 -z-2 opacity-0 dark:opacity-20 transition-opacity duration-500 bg-[linear-gradient(to_right,#00ffcc22_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc22_1px,transparent_1px)] bg-[size:40px_40px] " />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,170,0.15),transparent_60%)] dark:opacity-100 opacity-0 transition-opacity duration-500" />

        <div className="relative grid sm:grid-cols-1 md:grid-cols-2 items-center w-full max-w-screen-lg  gap-6 px-0 py-2 md:p-4 ">
          {/* ================= IMAGE SECTION ================= */}

          <ImageHero />

          {/* ================= Introduction SECTION ================= */}
          <div className="relative">
            <div className="flex flex-col justify-center ">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute top-5 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent"
              />

              <div
                className="border border-gray-200 dark:border-green-500/30 rounded-xl p-6 font-mono  shadow-lg dark:shadow-[0_0_40px_rgba(0,255,0,0.15)]
             transition-colors duration-500 mt-5 dark:bg-black/15 bg-zinc-100/15  backdrop-blur-sm m-0 "
              >
                <p className="text-green-600 dark:text-green-400 text-xs mb-2">
                  root@Introduct!on.sh:~$ ./
                </p>

                <p className="text-[10px] text-green-500 flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  system online & firewall active
                </p>

                <motion.h1
                  className="text-3xl font-bold text-gray-900 dark:text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0.85, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <Typewriter
                      words={["Aizaz Khalid"]}
                      cursor
                      cursorStyle="█"
                      typeSpeed={70}
                    />
                  </motion.span>
                </motion.h1>

                {showH2 && (
                  <motion.h2
                    className="text-md mt-4 text-blue-600 dark:text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Typewriter
                      words={[
                        "Full Stack Software Engineer",
                        "Cybersecurity Analyst & Researcher",
                        "Interesed in Ethical Hacking & AI ",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={60}
                      deleteSpeed={40}
                      delaySpeed={2000}
                    />
                  </motion.h2>
                )}

                {/* {showP && (
                  <motion.p
                    className="
                  text-gray-700 dark:text-gray-300
                  mt-6 leading-relaxed
                  border-l-2 border-cyan-500 dark:border-cyan-400
                  pl-4
                "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    Computer Science Graduate. Security Operations Center (SOC
                    L1) analyst focused on threat monitoring, incident response,
                    and secure full-stack application development. Building
                    scalable, secure, production-grade systems.
                  </motion.p>
                )} */}
              </div>
            </div>
            {/* =========================== Stats Section================= */}
            <HeroStats />
          </div>
        </div>

        <div className="relative"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
          {/* ================= SOCIAL SECTION ================= */}
          {showSocial && (
            <div className="relative w-full flex justify-center px-2 pb-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="
              relative grid grid-cols-3 items-center justify-center gap-5
              px-4 py-2 rounded-2xl
              backdrop-blur-sm
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
          )}

          {/* ================= CYBER SLIDER TRIGGER ================= */}
          {/* ================= CV TRIGGER ================= */}
          <div className="flex justify-center mt-6">
            <div className="relative w-[320px] h-16">
              {/* Background Track */}
              <div
                className="
      absolute inset-0
      rounded-full
      border border-cyan-400/30
      
      backdrop-blur-xl
      shadow-inner
    "
              />

              {/* Animated Glow */}
              <div
                className="
      absolute inset-0 rounded-full
      bg-gradient-to-r
      from-cyan-400/10 via-transparent to-emerald-400/10
      animate-pulse
    "
              />

              {/* Slide Handle */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 240 }}
                dragElastic={0.1}
                onDragEnd={(event, info) => {
                  if (info.point.x > 250) {
                    onOpen(); // opens modal when fully dragged
                  }
                }}
                className="
        relative z-10
        w-16 h-16
        rounded-full
        flex items-center justify-center
        cursor-grab active:cursor-grabbing
        bg-gradient-to-br from-cyan-400 to-emerald-400
        shadow-[0_0_25px_rgba(0,255,200,0.6)]
        text-black font-bold
      "
              >
                🔐
              </motion.div>

              {/* Slider Text */}
              <div
                className="
      absolute inset-0
      flex items-center justify-center
      pointer-events-none
      font-mono text-sm tracking-widest
      text-cyan-600 dark:text-cyan-400
    "
              >
                SLIDE TO ACCESS CV
              </div>
              <CVModal isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ================= ICON COMPONENT ================= */

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
    <Link href={href} target="_blank">
      <motion.div
        whileHover={{ scale: 1.15 }}
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

export default MainHeroSection;
