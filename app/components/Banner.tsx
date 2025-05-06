'use client';

import { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function DevBanner() {
  const [visible, setVisible] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(10); // starts from 10s

  // Countdown + auto-hide logic
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setVisible(false);
          clearInterval(interval);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-800 px-4 py-2 flex items-start justify-between text-sm font-medium relative">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        <span>Testing environment is live — features are under active development.</span>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <span className="text-xs text-yellow-700">{secondsLeft}s</span>
        <button
          onClick={() => setVisible(false)}
          className="text-yellow-800 hover:text-yellow-900 transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
