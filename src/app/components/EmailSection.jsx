"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        console.error("Server error:", data.error, data.details);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Client error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="jacob@google.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email" // Buraya ekledik
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block text-sm mb-2 font-medium"
        >
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Just saying hi"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          autoComplete="off" // Buraya ekledik (isteğe bağlı)
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Let's talk about..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off" // Buraya ekledik (isteğe bağlı)
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {submitStatus === "success" && (
        <p className="mt-4 text-green-500">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-red-500">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
