"use client";
import { Button, ButtonGroup } from "@heroui/react";

import MyIntroAndImage from "./components/MyIntroAndImage";
import ParticleBackground from "./components/ParticleBackground";
import AboutMe from "./components/AboutMe";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Certifications from "./components/Certifications";
import CustomDivider from "./components/CustomDivider";
import DevBanner from "./components/Banner";

export default function Home() {
  return (
    <>
      <div className="relative h-full w-full">
        {/* Background animation */}
        <div className="absolute inset-0 z-[-1]">
          <ParticleBackground />
        </div>

        {/* Content Container with Glass Effect */}
        <div className="relative z-10 mx-auto max-w-7xl  ">
          <div className="rounded-2xl bg-white/10 dark:bg-black/5 backdrop-blur-xs shadow-lg p-2 md:p-3 space-y-6">
            <DevBanner />
            <MyIntroAndImage />
            <AboutMe />
            <SkillsSection />
            <ProjectsSection />
            <CustomDivider />
          </div>
        </div>
      </div>
    </>
  );
}
