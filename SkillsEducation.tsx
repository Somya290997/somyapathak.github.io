import React from "react";

export default function SkillsEducation() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Education</h2>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Education</h3>

          <div className="mb-6">
            <p className="font-semibold">University of Colorado Boulder</p>
            <p className="text-sm text-gray-700">
              Master of Science in Computer Science (GPA: 4.0) · Aug 2024 – May 2026
            </p>
            <p className="text-sm text-gray-600">
              <strong>Courses:</strong> Machine Learning, Natural Language Processing, Deep Learning and Neural Networks, Linear Programming, Database Systems
            </p>
          </div>

          <div>
            <p className="font-semibold">Cummins College of Engineering, Pune University</p>
            <p className="text-sm text-gray-700">
              Bachelor of Technology in Computer Science (GPA: 3.87) · Aug 2017 – Jul 2021
            </p>
            <p className="text-sm text-gray-600">
              <strong>Courses:</strong> DSA, DBMS, AI/ML, Data Mining, Discrete Math, OS, DAA, Cloud Computing, IoT, Full Stack Java, Network Security
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Core Skills</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium mb-1">Languages</p>
              <p className="text-gray-700">Python, Java, Scala, Groovy, SQL, C++, React, Spark, HTML, CSS</p>
            </div>
            <div>
              <p className="font-medium mb-1">Technologies</p>
              <p className="text-gray-700">Machine Learning, Hadoop, HDFS, Hive, Kafka, Apache Spark, Amazon S3, CEPH, MLflow, Kubeflow, Apache NiFi, Splunk</p>
            </div>
            <div>
              <p className="font-medium mb-1">Tools</p>
              <p className="text-gray-700">Eclipse, IntelliJ, VS Code, Git, Jenkins, Rally, SQL Developer, Toad, Jupyter Notebook, SFTP</p>
            </div>
            <div>
              <p className="font-medium mb-1">Databases</p>
              <p className="text-gray-700">MySQL, Snowflake, DBMS, Neo4j, Redis, MongoDB, Cassandra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
