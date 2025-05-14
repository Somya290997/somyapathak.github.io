import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Mastercard Technologies",
    location: "Pune, India",
    duration: "Jul 2021 – Jul 2024",
    bullets: [
    "**Real-Time Data Ingestion and Processing Framework using Spark & Scala:**",
    "Designed, developed and deployed a real-time data pipeline using Apache Spark Scala and Apache NiFi, orchestrating high-throughput Kafka stream ingestion and transformation, processing over 10M events/day.",
    "Parsed raw events into structured, masked formats for real-time loading into the Data Warehouse with 100% uptime, storing outputs in S3-MinIO and CEPH across multiple availability zones for fault tolerance.",
    "Collaborated across Agile sprints, participating in sprint planning, daily Scrum calls, and retrospectives to ensure timely and iterative delivery.",
    "",
    "**Data Regularization & Visualization:**",
    "Architected and deployed Apache NiFi pipelines and SQL-based data loaders, streamlining the ingestion and transformation of structured datasets across multiple sources.",
    "Integrated Splunk dashboards & alerts for real-time monitoring, enabling proactive detection of anomalies and performance issues while ensuring data integrity through automated validation and logging.",
    "",
    "**Real-Time Reconciliation & Auditing Framework with Spark and Kafka (Axon):**",
    "Designed and developed a reconciliation utility to track and validate streaming Kafka messages from Axon, ensuring 100% data accuracy across the Data Warehouse.",
    "Engineered Spark-Scala-based auditing to perform high-throughput data validation, consistency checks across AZs, and audit logging; published verified results back to Axon.",
    "Built reusable modules with rigorous unit testing and CI/CD integration; maintained production stability through real-time Splunk dashboards and automated anomaly alerts.",
    "",
    "**Data Retention & Purging Utility for Storage Optimization:**",
    "Designed a configurable purging utility with automated validation, to enforce data retention policies, improving storage efficiency and system performance with 0% impact on active datasets.",
    "Utilized Python and Jupyter Notebooks for data analysis, trend visualization, and cleanup cycle optimization.",
    "",
    "**Data Transformation & Transfer Solutions:**",
    "Delivered scalable data transformation and transfer solutions, integrated with client APIs over secure VPN connections.",
    "Optimized Groovy scripts for vault connectivity and developed high-performance Spark-Scala pipelines to fetch data from HDFS.",
    "Enabled secure data delivery via SFTP for customer processing within 24 hours of transaction and streamlined workflows for automation and scalability.",
    "Recognized by stakeholders for innovative, timely solutions that enhanced project reliability and delivery."
  ],
  },
  {
    role: "Cloud Integration Intern",
    company: "IBM (IBM Security Verify)",
    location: "Pune, India",
    duration: "Sep 2020 – Jun 2021",
   bullets: [
    "**PaaS-based Application for Security & Access Management:**",
    "Engineered and deployed a cloud-based React helpdesk platform by integrating multiple IBM APIs, including IBM Security Verify, to enhance authentication, access management, and overall security workflows.",
    "Implemented OIDC-based authentication to securely generate access tokens for users and tenant administrators."
  ],
  },
  {
    role: "AI/ML Intern",
    company: "Mastercard Technologies",
    location: "Pune, India",
    duration: "May 2020 – Jun 2020",
     bullets: [
    "**Prediction Model for Performance Evaluation:**",
    "Developed a predictive analytics pipeline using 9 machine learning models, achieving a highest accuracy of 93% across diverse datasets, while gaining end-to-end experience in model inception, training, optimization, and evaluation workflows.",
    "Performed comparative analysis of MLflow and Kubeflow for model tracking and lifecycle management, emphasizing scalability and reproducibility in MLOps."
  ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-50 shadow-md p-6 rounded-xl hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-sm text-gray-600">{exp.duration}</span>
              </div>
              <p className="text-gray-700 mb-2">{exp.company} – {exp.location}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
