import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          Whether you have a question, opportunity, or just want to say hi —
          my inbox is always open.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:somyapathak2910@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <Mail className="w-5 h-5" />
            somyapathak2910@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/somyapathak/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="grid gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
