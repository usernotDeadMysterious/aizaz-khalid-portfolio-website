"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "Projects_completed", value: 100, suffix: "+" },
  { label: "Clients_served", value: 20, suffix: "+" },
  { label: "Years_experience", value: 2, suffix: "+" },
  { label: "Certifications", value: 40, suffix: "+" },
];

function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 mb-5">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="
            group
            relative
            rounded-xl
            p-6
            border
            text-center
            transition-all duration-300

            bg-zinc-100
            border-zinc-300
            text-zinc-800

            dark:bg-black/80
            dark:border-green-400/20
            dark:text-green-400
            dark:shadow-[0_0_25px_rgba(0,255,0,0.05)]

            hover:scale-[1.05]
            hover:border-zinc-500
            dark:hover:border-green-400
            dark:hover:shadow-[0_0_40px_rgba(0,255,0,0.3)]
          "
        >
          {/* Terminal Prefix */}
          <p className="text-xs font-mono opacity-60 mb-2">{stat.label}</p>

          {/* Animated Number */}
          <h3 className="text-3xl md:text-4xl font-bold font-mono">
            <CountUp
              end={stat.value}
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
            {stat.suffix}
          </h3>

          {/* Glow Overlay */}
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

export default HeroStats;
