import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const TerminalHero = () => {
  const [showH2, setShowH2] = useState(false);
  const [showP, setShowP] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute top-5 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent"
          />

          <div
            className="
                
                border border-gray-200 dark:border-green-500/30
                rounded-xl p-6 font-mono
                shadow-lg dark:shadow-[0_0_40px_rgba(0,255,0,0.15)]
                backdrop-blur-xl
                transition-colors duration-500 mt-5
              "
          >
            <p className="text-green-600 dark:text-green-400 text-sm mb-2">
              root@aizaz:~$ ./introduce.sh
            </p>

            <p className="text-xs text-green-500 flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              system online • firewall active
            </p>

            <motion.h1
              className="text-4xl font-bold text-gray-900 dark:text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                animate={{ opacity: [1, 0.85, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Typewriter
                  words={["Hi, I'm Aizaz Khalid"]}
                  cursor
                  cursorStyle="█"
                  typeSpeed={70}
                />
              </motion.span>
            </motion.h1>

            {showH2 && (
              <motion.h2
                className="text-xl mt-4 text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={[
                    "Full Stack Engineer",
                    "Cybersecurity Analyst | SOC L1",
                    "Ethical Hacker & AI Explorer",
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

            {showP && (
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
                Computer Science Graduate. Security Operations Center (SOC L1)
                analyst focused on threat monitoring, incident response, and
                secure full-stack application development. Building scalable,
                secure, production-grade systems.
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminalHero;
