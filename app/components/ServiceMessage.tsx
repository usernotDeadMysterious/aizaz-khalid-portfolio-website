"use client";

import React, { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Input, Textarea, Button } from "@heroui/react";
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

    setNotification({ message: "Sending message...", type: "loading" });

    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());

    console.log("Form values:", formValues);

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      let result: any = {};

      try {
        if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          result = await response.json();
        } else {
          console.warn("Response is not JSON");
        }
      } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError);
      }

      if (response.ok) {
        // EmailJS sending
        const serviceID = "service_ketgxai";
        const userID = "d38KTQtxALNSXYUpc";

        await emailjs.sendForm(
          serviceID,
          "template_vhaphln",
          formRef.current,
          userID
        );
        await emailjs.sendForm(
          serviceID,
          "template_nfbipph",
          formRef.current,
          userID
        );

        setNotification({ message: "Service Request Sent!", type: "success" });
        formRef.current.reset();
      } else {
        setNotification({
          message: result.error || "Something went wrong",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotification({
        message: "Failed to submit service request",
        type: "error",
      });
    }

    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="p-2 pt-0 space-y-4 w-full">
      <h2 className="text-xl font-bold">Service Inquiry</h2>

      {notification && (
        <div
          className={clsx(
            "px-4 py-2 rounded-md text-sm font-medium transition-all",
            notification.type === "success"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : notification.type === "error"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
          )}
        >
          {notification.message}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" type="text" placeholder="Your Name" required />
        <Input name="email" type="email" placeholder="Your Email" required />

        <select
          name="service"
          title="Select Service"
          required
          className="border rounded-md p-2 w-full dark:bg-zinc-900 dark:border-zinc-700"
        >
          <option value="">Select Service</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Web Development">Web Development</option>
          <option value="SEO">SEO</option>
          <option value="Other">Other</option>
        </select>

        <Textarea
          name="message"
          placeholder="Describe your needs..."
          required
        />

        <Button
          type="submit"
          color="danger"
          variant="solid"
          disabled={notification?.type === "loading"}
        >
          {notification?.type === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

export default ServiceMessage;
