"use client";

import { ArrowDownCircle } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertTemplateCS from "../components/CertTemplateCS";
import CertTemplateWD from "../components/CertTemplateWD";
import CertTemplatePR from "../components/CertTemplatePR";
import CertTemplateOther from "../components/CertTemplateOther";
import Workshops from "../components/Workshops";

function CertificatesSection() {
  const [activeTab, setActiveTab] = useState("cybersecurity");

  const tabs = [
    { key: "cybersecurity", label: "init --cyber_module" },
    { key: "webdev", label: "init --frontend_stack" },
    { key: "prog", label: "init --programming_core" },
    { key: "other", label: "init --auxiliary_cert" },
    { key: "workshops", label: "init --workshop_logs" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "cybersecurity":
        return <CertTemplateCS />;
      case "webdev":
        return <CertTemplateWD />;
      case "prog":
        return <CertTemplatePR />;
      case "other":
        return <CertTemplateOther />;
      case "workshops":
        return <Workshops />;
      default:
        return null;
    }
  };

  return (
    <div
      id="certificates"
      className="relative mt-0 p-2 pt-0 w-full font-mono transition-colors duration-500"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-3 backdrop-blur-lg transition-colors duration-500" />

      {/* subtle grid only in dark */}
      <div
        className="absolute inset-0 -z-2 opacity-0 dark:opacity-20 transition-opacity duration-500
        bg-[linear-gradient(to_right,#00ff0022_1px,transparent_1px),linear-gradient(to_bottom,#00ff0022_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* ================= TERMINAL HEADER ================= */}
      <div
        className="
        px-4 py-3 flex flex-col justify-center items-center rounded-t-xl
        border 
        bg-zinc-100 dark:bg-black
        border-zinc-300 dark:border-green-400/30
        text-zinc-700 dark:text-green-400
        transition-colors duration-500
      "
      >
        <span className="text-zinc-500 text-sm  dark:text-green-500 animate-pulse">
          ● CERTIFICATION DATABASE CONNECTED
        </span>
      </div>

      {/* SCANNING LINE */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        className="h-[2px]
        bg-gradient-to-r
        from-transparent
        via-zinc-400
        dark:via-green-400
        to-transparent"
      />

      {/* ================= PANEL BODY ================= */}
      <div
        className="
          rounded-b-xl p-2 space-y-4
          border
          
          border-zinc-300 dark:border-green-400/20
          shadow-md dark:shadow-[0_0_40px_rgba(0,255,0,0.1)]
          transition-colors duration-500
        "
      >
        {/* Section Info */}
        <div className="space-y-2">
          <h2 className="text-2xl text-zinc-800 dark:text-green-400 transition-colors duration-500">
            ./certifications
          </h2>

          <p className="text-sm text-zinc-600 dark:text-green-500/70">
            select module to load credentials{" "}
            <ArrowDownCircle className="inline h-4 w-4" />
          </p>
        </div>

        {/* ================= COMMAND TABS ================= */}
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  px-4 py-2 rounded-lg border transition-all duration-300
                  ${
                    isActive
                      ? `
                        border-zinc-700 bg-zinc-200 text-zinc-900 shadow-md
                        dark:border-green-400 dark:bg-green-400/10 dark:text-green-300
                        dark:shadow-[0_0_20px_rgba(0,255,0,0.6)]
                      `
                      : `
                        border-zinc-300 text-zinc-600 hover:bg-zinc-200
                        dark:border-green-400/20 dark:text-green-500
                        dark:hover:bg-green-400/10
                      `
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CRT overlay only in dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-30 transition-opacity duration-500
        bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px)]
        bg-[size:100%_3px]"
      />
    </div>
  );
}

export default CertificatesSection;
