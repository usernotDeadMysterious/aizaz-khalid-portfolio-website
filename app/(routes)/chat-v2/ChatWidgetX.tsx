"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getBotReply } from "./_components/ChatRules";
import { Shield } from "lucide-react";

export default function ChatWidgetX() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Jarvis v3.0 Online..." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botReply = getBotReply(input);

    setMessages((m) => [...m, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const securityPrompts = [
    "🛡 System secure. Explore capabilities.",
    "⚡ Run a command.",
    "💻 Ask about tech stack.",
    "🔐 Inspect security modules.",
    "🤖 Jarvis online. Awaiting input.",
  ];

  const [promptIndex, setPromptIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPrompt(false);

      setTimeout(() => {
        setPromptIndex((prev) => (prev + 1) % securityPrompts.length);
        setShowPrompt(true);
      }, 400);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const terminalRef = useRef<HTMLDivElement | null>(null);
  const closeTerminal = () => {
    setIsOpen(false);
    setMessages([{ from: "bot", text: "Jarvis v3.0 Online..." }]);
    setInput("");
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        terminalRef.current &&
        !terminalRef.current.contains(event.target as Node)
      ) {
        closeTerminal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= CYBER AI ORB ================= */}
      {!isOpen && (
        <div className="fixed bottom-12 right-6 flex items-center gap-4 z-1000 ">
          {/* ================= FLOATING SECURITY MESSAGE ================= */}
          <AnimatePresence>
            {showPrompt && (
              <motion.div
                key={promptIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className=" backdrop-blur-lg 
          border border-red-500/30 bg-green-500/15 
          text-red-400 text-[10px] font-mono 
          px-2 py-1 rounded-sm 
          shadow-[0_0_20px_rgba(0,255,128,0.3)]
          max-w-[250px] h-6 items-center justify-center fixed bottom-4 right-4"
              >
                {securityPrompts[promptIndex]}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= CYBER AI ORB ================= */}
          <motion.div
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-24 h-24 cursor-pointer rounded-full backdrop-blur-2xl "
          >
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-red-500/40"
            />

            {/* Reverse Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-red-400/30"
            />

            {/* Core */}
            <div
              className="absolute inset-6 rounded-full 
        bg-gradient-to-br from-red-400 to-emerald-600
        shadow-[0_0_50px_rgba(0,255,128,0.7)]
        flex items-center justify-center "
            >
              <span className="absolute w-full h-full rounded-full bg-green-400/20 animate-ping"></span>

              <span className="relative text-black font-bold text-xl tracking-widest">
                <Shield />
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* ================= TERMINAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-96 h-[500px]
            rounded-2xl bg-black/95 backdrop-blur-lg
            border border-green-500/40
            shadow-[0_0_60px_rgba(0,255,128,0.4)]
            flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center px-4 py-3 
            bg-gradient-to-r from-green-500/20 to-emerald-600/20
            border-b border-green-500/30"
            >
              <span className="text-green-400 font-mono text-sm">
                🟢 Jarvis Terminal
              </span>

              <button
                onClick={closeTerminal}
                className="text-red-400 hover:text-red-600 text-lg"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm font-mono">
              {messages.map((m, i) => (
                <TypewriterLine key={i} text={m.text} from={m.from} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center px-3 py-6 border-t border-green-500/30 bg-black">
              <span className="text-green-500 font-mono mr-2">$</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type command..."
                className="flex-1 bg-transparent outline-none text-green-400 font-mono"
              />
              <span className="ml-1 w-2 h-4 bg-green-400 animate-pulse"></span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= TYPEWRITER EFFECT ================= */

function TypewriterLine({ text, from }: { text: string; from: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
      className={`${
        from === "bot" ? "text-green-400" : "text-white text-right"
      }`}
    >
      {from === "bot" ? "jarvis@system:~$ " : "user@root:~$ "}
      {displayed}
    </div>
  );
}
