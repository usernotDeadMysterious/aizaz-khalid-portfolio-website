"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { CyberLogo } from "../_componentsNew/CyberLogo";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ================= SCROLL BEHAVIOR ================= */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const desktopItems = [
    "Home",
    "About Me",
    "Skills",
    "Projects",
    "Certifications",
  ];
  const mobileItems = [
    "Home",
    "About Me",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 w-full z-50"
        >
          <Navbar
            className="
              backdrop-blur-2xl
              bg-white/60 dark:bg-black/70
              border-b border-gray-300 dark:border-green-400/20
              shadow-lg dark:shadow-[0_0_40px_rgba(0,255,0,0.1)]
            "
          >
            {/* LEFT */}
            <NavbarContent>
              {/* Switch to mobile at md */}
              <NavbarMenuToggle className="md:hidden" />

              <NavbarBrand className="flex items-center gap-3 font-mono">
                <CyberLogo />
                <p className="font-bold text-gray-800 dark:text-green-400 tracking-wider">
                  root@aizaz:~$
                </p>
              </NavbarBrand>
            </NavbarContent>

            {/* CENTER NAV (Desktop from md and up) */}
            <NavbarContent
              className="hidden md:flex gap-12 font-mono"
              justify="center"
            >
              {desktopItems.map((item) => (
                <NavbarItem key={item}>
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "About Me"
                            ? "/aboutme"
                            : item === "Skills"
                              ? "#skills"
                              : item === "Projects"
                                ? "#projects"
                                : item === "Certifications"
                                  ? "/certifications"
                                  : "certificates"
                      }
                      className="
                        relative
                        text-gray-700 dark:text-gray-300
                        transition-all duration-300
                        hover:text-green-500 dark:hover:text-green-400
                      "
                    >
                      {item}
                    </Link>
                  </motion.div>
                </NavbarItem>
              ))}
            </NavbarContent>

            {/* RIGHT */}
            <NavbarContent justify="end" className="gap-5">
              <NavbarItem>
                <ThemeToggle />
              </NavbarItem>

              <NavbarItem className="hidden md:flex">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    as={Link}
                    href="#contact"
                    radius="full"
                    className="
                      font-mono
                      bg-gradient-to-r from-green-500 to-emerald-500
                      text-black
                      shadow-[0_0_20px_rgba(0,255,0,0.4)]
                      hover:shadow-[0_0_30px_rgba(0,255,0,0.7)]
                      transition-all duration-300
                    "
                  >
                    &lt;Contact /&gt;
                  </Button>
                </motion.div>
              </NavbarItem>
            </NavbarContent>

            {/* MOBILE MENU */}
            <NavbarMenu
              className="
                backdrop-blur-xl
                bg-white/90 dark:bg-black/90
                border-t border-gray-300 dark:border-green-400/20
                px-8 py-10 gap-8
                font-mono
              "
            >
              {mobileItems.map((item) => (
                <NavbarMenuItem key={item}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "About Me"
                            ? "/aboutme"
                            : item === "Skills"
                              ? "#skills"
                              : item === "Projects"
                                ? "#projects"
                                : item === "Certifications"
                                  ? "/certifications"
                                  : "#contact"
                      }
                      className="
                        block w-full
                        px-6 py-3 rounded-lg
                        text-lg
                        text-gray-800 dark:text-gray-200
                        hover:text-green-500
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-all
                      "
                    >
                      {item}
                    </Link>
                  </motion.div>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
