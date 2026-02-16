"use client";

import CyberBackground from "@/app/components/Background/CyberBackground";
import CyberSecurityBackground from "@/app/components/Background/CyberSecurityBackground";
import Terminal from "@/app/components/Background/Terminal";
import SOCPanel from "@/app/components/Background/SOCPanel";
import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    console.log("Page Rendered");
  }, []);
  return (
    <>
      {/* <CyberSecurityBackground /> */}
      <CyberSecurityBackground />
      <Terminal />
      <SOCPanel />
    </>
  );
}

export default page;
