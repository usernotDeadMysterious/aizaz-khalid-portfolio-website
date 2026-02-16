"use client";
import { useEffect, useState } from "react";
import { alerts } from "@/app/components/Background/faking";

export default function SOCPanel() {
  const [active, setActive] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActive((a) => [...a.slice(-6), alerts[i]]);
      i = (i + 1) % alerts.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="soc">
      <div className="soc-title">SOC ALERTS</div>
      {active.map((a, i) => (
        <div key={i} className={`alert ${a.level.toLowerCase()}`}>
          [{a.level}] {a.msg}
        </div>
      ))}
    </div>
  );
}
