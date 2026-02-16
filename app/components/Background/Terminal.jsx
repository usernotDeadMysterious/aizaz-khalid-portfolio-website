"use client";
import { useEffect, useState } from "react";
import { scripts } from "@/app/components/Background/faking";

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= scripts.length) return;

    const run = async () => {
      setLines((l) => [...l, `$ ${scripts[index].cmd}`]);
      for (const o of scripts[index].out) {
        await new Promise((r) => setTimeout(r, 500));
        setLines((l) => [...l, o]);
      }
      setIndex((i) => i + 1);
    };

    const t = setTimeout(run, 800);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="terminal">
      {lines.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  );
}
