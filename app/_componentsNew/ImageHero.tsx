import React from "react";
import ZoomableImage from "./ZomableImage";
import { motion } from "framer-motion";
const ImageHero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center mb-5 mt-4  ">
        {/* Rotating Cyber Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          className="absolute w-[320px] h-[320px] rounded-full border-2 border-dashed border-cyan-400/40 dark:border-cyan-400/50 "
        />

        {/* Image Container */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute w-[280px] h-[280px] rounded-full border border-cyan-400/30"
        />

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
              relative w-[240px] h-[240px] rounded-full
              bg-gradient-to-br from-white via-gray-100 to-white
              dark:from-black dark:via-gray-900 dark:to-black
              border border-gray-300 dark:border-cyan-400/40
              shadow-xl dark:shadow-[0_0_40px_rgba(0,255,170,0.6)]
              backdrop-blur-xl
              flex items-center justify-center overflow-hidden
              transition-colors duration-500
            "
        >
          <ZoomableImage />
        </motion.div>
      </div>
    </>
  );
};

export default ImageHero;
