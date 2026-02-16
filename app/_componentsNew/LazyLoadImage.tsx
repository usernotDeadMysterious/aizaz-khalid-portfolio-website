"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const LazyLoadImage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1500); // 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {showImage ? (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/my%20pic.png" // or "/my-pic.png" if renamed
            alt="Aizaz Khalid Profile Image, Close-up click"
            width={600}
            height={400}
            loading="lazy"
          />
        </motion.div>
      ) : (
        <div className="flex align-center items-center">
          <p className="text-xl text-gray-600">Loading image...</p>
        </div>
      )}
    </div>
  );
};

export default LazyLoadImage;
