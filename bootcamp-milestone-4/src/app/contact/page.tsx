"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // basic validation
    if (!name.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      const serviceId = "service_k0xio43";
      const templateId = "template_mc0bq3s";
      const publicKey = "C3PECygwS4BJ65C_l";

      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
        },
        publicKey
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1 className="page-title">Theodore's Contact Info</h1>
      <p>Hello World! This is my contact info.</p>

      <div className="contact-info">
        <p>Personal Email: tweickerv@gmail.com</p>
        <p>School Email: tweicker@calpoly.edu</p>
      </div>

      <h2>Contact Form</h2>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {status === "success" && (
        <p style={{ color: "green" }}>Your message has been sent!</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>
          Something went wrong — please check your fields and try again.
        </p>
      )}

      <footer className="footer">
        © 2025 Theodore's Website | All Rights Reserved
      </footer>
    </main>
  );
}
