"use client";
import { Button,ButtonGroup} from "@heroui/react";




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
    
    
    <div className="relative h-screen max-w-full">
  <div className="absolute inset-0 z-[-1] max-w-full">
    <ParticleBackground />

  </div>
  <DevBanner/>
  <MyIntroAndImage />
  <AboutMe/>
  <SkillsSection/>
  <ProjectsSection/>
  
  <CustomDivider/>
</div>
      
    

    
    

    </>
  );
}
