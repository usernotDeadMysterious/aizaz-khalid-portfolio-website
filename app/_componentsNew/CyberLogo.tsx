import { motion } from "framer-motion";

export const CyberLogo = () => {
  return (
    <div className="relative flex items-center justify-center font-mono text-xl font-bold">
      {/* Glowing Background Pulse */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="
          absolute
          w-12 h-12
          rounded-full
          bg-cyan-400/20
          blur-xl
        "
      />

      {/* Animated Brackets */}
      <motion.span
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-cyan-500 dark:text-cyan-400"
      >
        &lt;
      </motion.span>

      {/* Main Initials */}
      <motion.span
        animate={{
          textShadow: [
            "0 0 5px #00ffff",
            "0 0 15px #00ffff",
            "0 0 5px #00ffff",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mx-1 text-gray-800 dark:text-white"
      >
        AK
      </motion.span>

      <motion.span
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-cyan-500 dark:text-cyan-400"
      >
        /&gt;
      </motion.span>
    </div>
  );
};
