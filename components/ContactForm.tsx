"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-accent focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-accent focus:outline-none"
      />
      <input
        type="text"
        name="subject"
        placeholder="Your Subject"
        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-accent focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-accent focus:outline-none resize-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-accent text-dark-bg font-semibold rounded hover:bg-accent-hover transition disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm">Failed to send. Please try again.</p>
      )}
    </form>
  );
}
