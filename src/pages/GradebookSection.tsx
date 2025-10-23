import React, { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Material {
  id: number;
  title: string;
  description: string;
  content: string;
  question: Question[];
  recordUrl: string;
}

interface Topic {
  id: number;
  title: string;
  description: string;
  materials: Material[];
}

interface Grade {
  id: number;
  title: string;
  score: number;
  maxScore: number;
  percentage: number;
}

interface CourseGradebook {
  id: number;
  title: string;
  description: string;
  topics: Topic[];
  overall: number;
  grades: Grade[];
}

const GradebookSection: React.FC = () => {
  const [course, setCourse] = useState<CourseGradebook | null>(null);

  useEffect(() => {
    const mockData: CourseGradebook = {
      id: 1,
      title: "Front-end",
      description: "Suspense",
      topics: [
        {
          id: 1,
          title: "fetching data",
          description: "fetch data by throwing promises",
          materials: [
            {
              id: 1,
              title: "learning - first",
              description: "read the material",
              content: "react",
              question: [
                { question: "what is react", options: ["string"], answer: "string" }
              ],
              recordUrl: "string"
            },
            {
              id: 2,
              title: "learning - second",
              description: "this is second material for topic 1",
              content: "testing purpose data",
              question: [],
              recordUrl: "string"
            }
          ]
        },
        {
          id: 2,
          title: "suspense",
          description: "react 19 material",
          materials: [
            {
              id: 3,
              title: "learning - second topic - first material",
              description: "this is second material for topic 1",
              content: "testing purpose data",
              question: [],
              recordUrl: "string"
            }
          ]
        }
      ],
      overall: 72,
      grades: [
        { id: 1, title: "Assignment 1", score: 15, maxScore: 20, percentage: 75 },
        { id: 2, title: "Project 1", score: 30, maxScore: 30, percentage: 100 },
        { id: 3, title: "Quiz 1", score: 5, maxScore: 12, percentage: 41.7 },
        { id: 4, title: "Final Project", score: 20, maxScore: 30, percentage: 66.7 }
      ]
    };

    setCourse(mockData);
  }, []);

  if (!course) return <p>Yüklənir...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📊 Gradebook - {course.title}</h1>
      <p>Burada kurs üzrə qiymətlər və ümumi nəticə göstərilir.</p>

      <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "1.5rem", marginTop: "1.5rem", backgroundColor: "#fafafa", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#333" }}>{course.title}</h2>
        <p style={{ marginBottom: "0.5rem", color: "#666" }}>{course.description}</p>
        <h3 style={{ color: "#0a84ff" }}>Overall: {course.overall}%</h3>

        <h3 style={{ marginTop: "1rem" }}>Topics & Materials:</h3>
        {course.topics.map((topic) => (
          <div key={topic.id} style={{ marginBottom: "1rem" }}>
            <h4>{topic.title}</h4>
            <ul>
              {topic.materials.map((m) => (
                <li key={m.id}>{m.title}</li>
              ))}
            </ul>
          </div>
        ))}

        <h3 style={{ marginTop: "1rem" }}>Grades:</h3>
        <table style={{ width: "100%", marginTop: "0.5rem", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
              <th style={{ padding: "8px" }}>Title</th>
              <th style={{ padding: "8px" }}>Score</th>
              <th style={{ padding: "8px" }}>Max Score</th>
              <th style={{ padding: "8px" }}>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {course.grades.map((grade) => (
              <tr key={grade.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{grade.title}</td>
                <td style={{ padding: "8px" }}>{grade.score}</td>
                <td style={{ padding: "8px" }}>{grade.maxScore}</td>
                <td style={{ padding: "8px" }}>{grade.percentage.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradebookSection;
