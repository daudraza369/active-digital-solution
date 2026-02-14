"use client";

import { useState } from "react";

export default function CareerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: formData,
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
      <select
        name="role"
        required
        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-accent focus:outline-none"
      >
        <option value="">What you applying for?</option>
        <option value="Content Writer Intern">Content Writer Intern</option>
        <option value="Junior Network Officer">Junior Network Officer</option>
        <option value="Junior Off-Page SEO">Junior Off-Page SEO</option>
        <option value="BD Manager">BD Manager</option>
        <option value="Telesale Executive">Telesale Executive</option>
        <option value="Customer Success Specialist">Customer Success Specialist</option>
        <option value="Amazon Wholesale Specialist">Amazon Wholesale Specialist</option>
        <option value="Amazon Wholesale Expert">Amazon Wholesale Expert</option>
        <option value="Operation Manager">Operation Manager</option>
      </select>
      <input
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-accent focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-accent file:text-dark-bg"
      />
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
      <textarea
        name="message"
        placeholder="Cover letter / Message"
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
