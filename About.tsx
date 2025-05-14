import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm <span className="font-semibold text-blue-600">Somya Pathak</span>, a Computer Science grad student at the University of Colorado Boulder with a deep interest in all things data.
          I bring over 3 years of experience as a Software Developer at Mastercard, where I built real-time data pipelines, ML models, and large-scale data systems.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Whether it's developing predictive models, designing secure data workflows, or exploring NLP and computer vision, I love combining creativity with code to solve meaningful problems.
          I'm also an avid learner — currently diving into research projects involving transformers and deep learning.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Outside of tech, you'll probably find me enjoying tea, sketching random ideas, or geeking out over AI papers.
        </p>
      </div>
    </section>
  );
}
