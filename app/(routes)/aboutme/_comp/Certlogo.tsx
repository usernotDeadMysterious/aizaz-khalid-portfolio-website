import Image from "next/image";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
export default function Certlogo() {
  return (
    <>
      {/* ================= CERTIFICATION GRID ================= */}

      <div className="flex flex-col items-center space-y-10 mt-16">
        <h3 className="text-xl font-mono text-cyan-600 dark:text-cyan-400 tracking-wider">
          // Officially Certified By
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 w-full">
          {[
            "/google-logo.svg",
            "/ec-council-colored.svg",
            "/meta-logo.svg",
            "/coursera-logo.svg",
            "/pm-youth.png",
            "/digiskills.png",
            "/Sololearn.svg",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                flex items-center justify-center
                rounded-xl
                p-4
                bg-white/70 dark:bg-black/50
                border border-gray-300 dark:border-cyan-400/20
                backdrop-blur-md
                transition-all
                hover:border-cyan-500/60
                hover:shadow-[0_0_40px_rgba(0,255,170,0.35)]
              "
            >
              <Image
                src={src}
                alt="cert-logo"
                width={80}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        <a
          href="/certifications"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 font-mono transition"
        >
          View Certificates <Eye className="h-4 w-4 inline ml-1" />
        </a>
      </div>
    </>
  );
}
