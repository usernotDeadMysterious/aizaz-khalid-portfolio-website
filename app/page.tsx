"use client";

import Script from "next/script";
import ParticleBackground from "./components/Background/ParticleBackground";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FeedbackTwo from "./components/FeedbackTwo";
import SkillsSection from "./_componentsNew/SkillSection";
import ProjectsSection from "./_componentsNew/ProjectsSection";
import ChatWidgetX from "./(routes)/chat-v2/ChatWidgetX";
import MainHeroSection from "./_componentsNew/MainHeroSection";
import Certlogo from "./(routes)/aboutme/_comp/Certlogo";

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6BXRP55Z4E"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6BXRP55Z4E');
        `}
      </Script>

      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Base background */}
        <div className="fixed inset-0 z-1  transition-colors duration-500" />

        {/* Particles */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticleBackground />
        </div>

        {/* Optional cyber glow */}
        <div className="fixed inset-0 z-2 opacity-0 dark:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,170,0.05),transparent_60%)]" />

        {/* MAIN CONTENT */}
        <div className="relative z-3 mx-auto max-w-6xl px-2 py-2">
          <div
            className="
              rounded-2xl backdrop-blur-lg border border-gray-200 dark:border-cyan-400/20
              shadow-xl dark:shadow-[0_0_60px_rgba(0,255,170,0.06)]
              p-4 md:p-6
              space-y-12
              transition-all duration-500
            "
          >
            {/* <DevBanner /> */}
            <MainHeroSection />
            <Certlogo />
            <SkillsSection />
            <ProjectsSection />
            {/* <CertificatesSection /> */}
            <Contact />
            <FeedbackTwo />
            <Footer />
          </div>
          <ChatWidgetX />
        </div>
      </div>
    </>
  );
}
