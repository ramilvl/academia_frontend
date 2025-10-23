import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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

interface Course {
  id: number;
  title: string;
  description: string;
  topics: Topic[];
}

const MaterialDetail: React.FC = () => {
  const { courseId, materialId } = useParams<{ courseId: string; materialId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [material, setMaterial] = useState<Material | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const res = await axios.get("http://localhost:8080/v1/course");
        const allCourses: Course[] = res.data.data.content;
        const foundCourse = allCourses.find((c) => c.id === Number(courseId));
        if (!foundCourse) return setError("Kurs tapılmadı.");

        setCourse(foundCourse);

        // materialı tapırıq (topic → materials içərisindən)
        let foundMaterial: Material | undefined;
        for (const topic of foundCourse.topics) {
          const mat = topic.materials.find((m) => m.id === Number(materialId));
          if (mat) {
            foundMaterial = mat;
            break;
          }
        }

        if (!foundMaterial) return setError("Material tapılmadı.");
        setMaterial(foundMaterial);
      } catch (err) {
        console.error(err);
        setError("Material yüklənə bilmədi.");
      } finally {
        setLoading(false);
      }
    };

    fetchMaterial();
  }, [courseId, materialId]);

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>{error}</p>;
  if (!course || !material) return <p>Material tapılmadı.</p>;

  const styles = {
    container: {
      maxWidth: "700px",
      margin: "2rem auto",
      padding: "1rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    title: {
      borderBottom: "2px solid #007acc",
      paddingBottom: "0.3rem",
      marginBottom: "1rem",
      color: "#007acc",
    },
    content: {
      whiteSpace: "pre-wrap",
      marginBottom: "2rem",
      fontSize: "1.1rem",
      color: "#333",
    },
    quizTitle: {
      color: "#444",
      marginBottom: "1rem",
    },
    question: {
      marginBottom: "1rem",
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "6px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    },
    backLink: {
      display: "inline-block",
      marginTop: "2rem",
      textDecoration: "none",
      color: "#007acc",
      fontWeight: "600",
    },
  } as const;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{material.title}</h2>
      <p style={styles.content}>{material.content}</p>

      <h3 style={styles.quizTitle}>📝 Quiz</h3>
      {material.question.map((q, index) => (
        <div key={index} style={styles.question}>
          <p><strong>{q.question}</strong></p>
          <ul>
            {q.options.map((option, idx) => (
              <li key={idx}>{option}</li>
            ))}
          </ul>
        </div>
      ))}

      <Link to={`/course/${courseId}`} style={styles.backLink}>
        ← Geri {course.title} səhifəsinə
      </Link>
    </div>
  );
};

export default MaterialDetail;
