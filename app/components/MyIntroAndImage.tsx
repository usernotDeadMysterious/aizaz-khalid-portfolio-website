import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import CustomPopover from "./CustomPopover";
function MyIntroAndImage() {
  const [showH2, setShowH2] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    // Timing based on typing speed * length of h1 text
    const h1TypingTime = "Hi, I'm Aizaz Khalid".length * 70 + 500; // 70ms per character + buffer
    const timeout1 = setTimeout(() => {
      setShowH2(true);
    }, h1TypingTime + 1000);

    const timeout2 = setTimeout(() => {
      setShowP(true);
    }, h1TypingTime + 4000); // a bit later after h2 starts

    const timeout3 = setTimeout(() => {
      setShowSocial(true); // Show social media links after the paragraph
    }, h1TypingTime + 6000); // Adjust timing if necessary

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-items-center w-full max-w-screen-xl mx-auto gap-3 p-5  ">

      
      {/* Image Section */}
<div className="relative flex items-center justify-center w-[250px] h-[250px]">
  {/* Rotating colorful border - behind everything */}
  <div className="absolute w-full h-full rounded-full animate-spin-slow bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500"></div>

  {/* White inner circle with image (static) */}
  <div className="relative z-10 w-[240px] h-[240px] bg-white rounded-full flex items-center justify-center overflow-hidden">
    <Image
      alt="Aizaz Khalid Image"
      src="/my pic.png"
      width={230}
      height={230}
      className="object-cover rounded-full"
    />
  </div>
</div>





      {/* Intro Section  */}
      <div className="flex flex-col items-center justify-center ">
        {/* Typing H1 */}
        <motion.h1
          className="text-4xl font-bold mb-4  p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typewriter
            words={["Hi, I'm Aizaz Khalid"]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </motion.h1>

        {/* Typing and Looping H2 */}
        {showH2 && (
          <motion.h2
            className="text-2xl text-blue-600 font-semibold mb-4  p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "Cybersecurity Analyst",
                "AI Enthusiast",
              ]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.h2>
        )}

        {/* Paragraph fade-in */}
        {showP && (
          <motion.p
            className="text-lg text-justify text-gray-600 dark:text-slate-200 mb-6 border border-gray-300 bg-slate-200/50 shadow-md dark:bg-slate-700/20 rounded-lg p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Computer Science undergraduate at Agriculture University Peshawar.
            Google Certified Cybersecurity Analyst and Meta Certified Front-End
            Developer.
          </motion.p>
        )}

        {/* Social Links fade-in */}
        {showSocial && (
          <motion.div
            className="flex flex-row gap-8 border border-gray-300 bg-slate-200/50 dark:bg-slate-700/20 rounded-lg p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link
              href="https://github.com/usernotDeadMysterious"
              target="_blank"
            >
              <div className="flex flex-col items-center justify-center hover:border-1  rounded-lg p-2">
                <Github className="w-6 h-7 text-black dark:text-white"  />
                <h6 className="text-xs  hover:text-black-900">
                  Github
                </h6>
              </div>
            </Link>

            
            <Link
              href="https://www.instagram.com/sta___lewane?igsh=MW51ZzA2aml0dGZnbw=="
              target="_blank"
            >
              <div className="flex flex-col items-center justify-center hover:border-1 rounded-lg p-2">
                <Instagram className="w-6 h-7" color="Red" />
                <h6 className="text-xs hover:text-red-900">
                  Instagram
                </h6>
              </div>
              </Link>
            <Link
              href="https://www.linkedin.com/in/aizaz-khalid-a0864425a/"
              target="_blank"
            >
              <div className="flex flex-col items-center justify-center hover:border-1  rounded-lg p-2">
                <Linkedin className="w-6 h-7" color="blue" />
                <h6 className="text-xs hover:text-blue-900">LinkedIn</h6>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default MyIntroAndImage;
