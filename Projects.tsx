import React from "react";

const projects = [
  {
    title: "Non-Invasive Anemia Detection Using Deep Learning",
    date: "Mar 2025 – May 2025",
    description:
      "Built a deep learning model to detect anemia from conjunctiva eye images using a custom CNN and MobileNetV2. Achieved 92% test accuracy. The solution is lightweight, non-invasive, and optimized for low-resource settings.",
    skills: ["Python", "TensorFlow", "Keras", "Image Processing", "Model Evaluation"],
  },
  {
    title: "Retrieval-Augmented Generation (RAG) for Open-Domain QA",
    date: "Mar 2025 – May 2025",
    description:
      "Built a RAG pipeline using Sentence Transformers and fine-tuned T5 with LoRA & Partial Layer Freezing. Achieved top accuracy on QA tasks. Evaluated using EM, F1, BLEU, and ROUGE-L.",
    skills: ["PyTorch", "Hugging Face", "SentenceTransformers", "JSONL", "NLP"],
  },
  {
    title: "Multi-Modal VQA System",
    date: "1st Place – VizWiz Challenge",
    description:
      "Developed a hybrid VQA model combining CNNs, BiLSTM, self-attention fusion, and LSTM decoder on VizWiz’s 20K+ real-world image-QA pairs. Outperformed 141 teams in 'Text Only' track.",
    skills: ["CNN", "LSTM", "BiLSTM", "Attention", "Vision-Language Modeling", "Accessibility AI"],
  },
  {
    title: "Privacy-Aware Interview Evaluation",
    date: "Transformer-based NLP Project",
    description:
      "Built a GPT2-XL/BERT classifier to assess job interview responses. Added de-biasing, prompt learning, and benchmarked against traditional ML. Applied fairness and privacy to speaker-based data.",
    skills: ["GPT2-XL", "BERT", "TF-IDF", "VADER", "Sentiment Analysis", "Fair NLP"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.date}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-600">
                <strong>Skills:</strong>{" "}
                {project.skills.map((skill, i) => (
                  <span key={i}>
                    {skill}
                    {i !== project.skills.length - 1 && " · "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
