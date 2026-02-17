"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Disclosure, Transition } from "@headlessui/react";
import { Send, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

function FeedbackTwo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [devRating, setDevRating] = useState(0);
  const [designRating, setDesignRating] = useState(0);
  const [bugExperience, setBugExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/_api/feedbackextended", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        feedback,
        overallRating,
        devRating,
        designRating,
        bugExperience,
      }),
    });

    if (res.ok) setSubmitted(true);
  };
  const handleSubmitformspree = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/xeeonbpk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        feedback,
        overallRating,
        devRating,
        designRating,
        bugExperience,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      console.error("Form submission failed");
    }
    handleSubmit(e);
  };

  return (
    <div className="relative p-1 pt-0 w-full font-mono transition-colors duration-500">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-white dark:bg-black transition-colors duration-500" />

      {/* GRID (dark only) */}
      <div
        className="absolute inset-0 -z-20 opacity-0 dark:opacity-20 transition-opacity duration-500
        bg-[linear-gradient(to_right,#00ff0022_1px,transparent_1px),linear-gradient(to_bottom,#00ff0022_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* TERMINAL HEADER */}
      <div
        className="
          rounded-t-xl px-4 py-2 flex justify-between items-center text-sm border
          bg-zinc-100 dark:bg-black
          text-zinc-700 dark:text-green-400
          border-zinc-300 dark:border-green-400/30
          transition-colors duration-500
        "
      >
        <span>secure-feedback@aizaz:~$</span>
        <span className="animate-pulse">█</span>
      </div>

      {/* SCANNING LINE */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-zinc-400
          dark:via-green-400
          to-transparent
        "
      />

      <Disclosure>
        {({ open }) => (
          <div
            className="
              border rounded-b-xl backdrop-blur-xl
              bg-white/95 dark:bg-black/90
              text-zinc-700 dark:text-green-300
              border-zinc-300 dark:border-green-400/30
              transition-colors duration-500
            "
          >
            {/* BUTTON */}
            <Disclosure.Button
              className="
                w-full flex justify-between items-center px-6 py-4
                hover:bg-zinc-200 dark:hover:bg-green-400/10
                transition
              "
            >
              <span>
                {open ? "close --secure-channel" : "initiate --secure-channel"}
              </span>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  open ? "rotate-180 dark:text-green-400" : ""
                }`}
              />
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-300 ease-out"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-200 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-4"
            >
              <Disclosure.Panel static className="px-6 pb-8 space-y-6">
                {submitted ? (
                  <div className="text-emerald-600 dark:text-green-400">
                    transmission complete ✔
                  </div>
                ) : (
                  <form onSubmit={handleSubmitformspree} className="space-y-6">
                    {/* INPUT STYLE */}
                    {[
                      {
                        label: "user.name:",
                        value: name,
                        setter: setName,
                        type: "text",
                        required: true,
                      },
                      {
                        label: "user.email:",
                        value: email,
                        setter: setEmail,
                        type: "email",
                        required: true,
                      },
                    ].map((field, i) => (
                      <div key={i}>
                        <label className="block mb-1">{field.label}</label>
                        <input
                          required={field.required}
                          type={field.type}
                          value={field.value}
                          onChange={(e) => field.setter(e.target.value)}
                          className="
                            w-full p-3 transition
                            bg-white dark:bg-black
                            border border-zinc-300 dark:border-green-400/40
                            focus:outline-none
                            focus:border-zinc-500 dark:focus:border-green-400
                            focus:shadow-md
                            dark:focus:shadow-[0_0_10px_rgba(0,255,0,0.6)]
                          "
                        />
                      </div>
                    ))}

                    {/* RATINGS */}
                    <div>
                      <p className="mb-2">system.rating.overall:</p>
                      <StarRating
                        rating={overallRating}
                        setRating={setOverallRating}
                      />

                      <p className="mt-4 mb-2">system.rating.developer:</p>
                      <StarRating rating={devRating} setRating={setDevRating} />

                      <p className="mt-4 mb-2">system.rating.design:</p>
                      <StarRating
                        rating={designRating}
                        setRating={setDesignRating}
                      />
                    </div>

                    {/* BUGS */}
                    <div>
                      <label className="block mb-1">system.log.bugs:</label>
                      <textarea
                        value={bugExperience}
                        onChange={(e) => setBugExperience(e.target.value)}
                        rows={2}
                        className="
                          w-full p-3 transition
                          bg-white dark:bg-black
                          border border-zinc-300 dark:border-green-400/40
                          focus:outline-none
                          focus:border-zinc-500 dark:focus:border-green-400
                          focus:shadow-md
                          dark:focus:shadow-[0_0_10px_rgba(0,255,0,0.6)]
                        "
                      />
                    </div>

                    {/* FEEDBACK */}
                    <div>
                      <label className="block mb-1">system.comment:</label>
                      <textarea
                        required
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={4}
                        className="
                          w-full p-3 transition
                          bg-white dark:bg-black
                          border border-zinc-300 dark:border-green-400/40
                          focus:outline-none
                          focus:border-zinc-500 dark:focus:border-green-400
                          focus:shadow-md
                          dark:focus:shadow-[0_0_10px_rgba(0,255,0,0.6)]
                        "
                      />
                    </div>

                    {/* SUBMIT */}
                    <Button
                      type="submit"
                      className="
                        bg-zinc-800 text-white
                        dark:bg-green-500 dark:text-black
                        hover:bg-zinc-700
                        dark:hover:bg-green-400
                        shadow-md
                        dark:shadow-[0_0_20px_rgba(0,255,0,0.6)]
                        transition-all
                      "
                    >
                      <Send size={16} className="mr-2" />
                      transmit_data();
                    </Button>
                  </form>
                )}
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      {/* CRT overlay only in dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-40 transition-opacity duration-500
        bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px)]
        bg-[size:100%_3px]"
      />
    </div>
  );
}

export default FeedbackTwo;
