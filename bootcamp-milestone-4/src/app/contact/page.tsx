"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("All fields are required!");
      return;
    }

    try {
      const serviceId = "service_n6og8dg";
      const templateId = "template_xdgfsgx";
      const publicKey = "0PxDjyBsXiofopwbY";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("success");
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <main>
        <h1 className="page-title">Contact</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          You can reach me at: rthennar@calpoly.edu
        </p>
        
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={status === "sending"}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={status === "sending"}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={status === "sending"}
          />

          <input
            type="submit"
            value={status === "sending" ? "Sending..." : "Submit"}
            disabled={status === "sending"}
          />

          {status === "success" && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p style={{ color: "red", marginTop: "1rem" }}>
              {errorMessage}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}