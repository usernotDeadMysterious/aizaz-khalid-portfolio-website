import { BotIcon, HeartHandshake } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomPopoverProps {
  children: React.ReactNode;
  message_show?:string;
}


function CustomPopover({ children,message_show="Hi there! This section is under development." }: CustomPopoverProps) {
  const [showPopover, setShowPopover] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setShowPopover((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current && !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(event.target as Node)
      ) {
        setShowPopover(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      {/* Trigger element */}
      <div onClick={togglePopover} ref={triggerRef} className="cursor-pointer">
        {children}
      </div>

      {/* Popover content */}
      <AnimatePresence>
        {showPopover && (
          <motion.div
            ref={popoverRef}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 p-2 bg-slate-300 shadow-lg rounded-lg text-center flex flex-col items-center  z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-md">
              <BotIcon className="h-6 w-6" />
            </div>
            <h2 className="text-xs font-medium">
              Hi there{' '}
              <HeartHandshake className="inline text-red-500" /> {message_show}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomPopover;
