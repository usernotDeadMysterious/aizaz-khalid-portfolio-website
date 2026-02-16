"use client";

import React, { FormEvent, useRef, useState } from "react";
import clsx from "clsx";

function ServiceMessage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error" | "loading";
  } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setNotification({ message: "processing...", type: "loading" });

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/xeeonbpk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setNotification({
          message: "request logged successfully ✔",
          type: "success",
        });
        formRef.current.reset();
      } else {
        setNotification({
          message: "transmission failed",
          type: "error",
        });
      }
    } catch {
      setNotification({
        message: "network error",
        type: "error",
      });
    }

    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="space-y-6 font-mono text-sm">
      <p className="text-green-400">$ initiate --service_request</p>

      {notification && (
        <div
          className={clsx(
            "px-4 py-2 border rounded-md text-xs",
            notification.type === "success"
              ? "border-green-400/40 text-green-400 bg-green-400/10"
              : notification.type === "error"
                ? "border-red-400/40 text-red-400 bg-red-400/10"
                : "border-yellow-400/40 text-yellow-400 bg-yellow-400/10",
          )}
        >
          {notification.message}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-green-400 mb-1">user.name:</label>
          <input
            name="name"
            required
            className="w-full bg-black/60 border border-green-400/30 px-3 py-2 text-green-300 focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_rgba(0,255,0,0.4)]"
          />
        </div>

        <div>
          <label className="block text-green-400 mb-1">user.email:</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-black/60 border border-green-400/30 px-3 py-2 text-green-300 focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_rgba(0,255,0,0.4)]"
          />
        </div>

        <div>
          <label className="block text-green-400 mb-1">service.type:</label>
          <select
            name="service"
            required
            className="w-full bg-black/60 border border-green-400/30 px-3 py-2 text-green-300 focus:outline-none focus:border-green-400"
          >
            <option value="">-- select module --</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Web Development">Web Development</option>
            <option value="SEO">SEO</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-green-400 mb-1">message.payload:</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full bg-black/60 border border-green-400/30 px-3 py-2 text-green-300 resize-none focus:outline-none focus:border-green-400 focus:shadow-[0_0_10px_rgba(0,255,0,0.4)]"
          />
        </div>

        <button
          type="submit"
          disabled={notification?.type === "loading"}
          className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,0,0.4)]"
        >
          {notification?.type === "loading"
            ? "processing..."
            : "execute --send_request"}
        </button>
      </form>
    </div>
  );
}

export default ServiceMessage;
