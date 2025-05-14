import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
      <img
        src="/profile.jpg"
        alt="Somya Pathak"
        className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm <span className="text-blue-600">Somya Pathak</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Data Enthusiast | Developer | Lifelong Learner
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
