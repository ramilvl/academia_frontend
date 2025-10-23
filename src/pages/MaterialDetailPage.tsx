import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Quiz from "../components/Course/Quiz";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Material {
  id: number;
  title: string;
  content: string;
  question: Question[];
}

interface Topic {
  id: number;
  materials: Material[];
}

interface Course {
  id: number;
  topics: Topic[];
}

const MaterialDetailPage: React.FC = () => {
  const { courseId, materialId } = useParams<{ courseId: string; materialId: string }>();
  const [material, setMaterial] = useState<Material | null>(null);

  useEffect(() => {
    const fetchMaterial = async () => {
      const res = await axios.get("http://localhost:8080/v1/course");
      const allCourses: Course[] = res.data.data.content;
      const course = allCourses.find((c) => c.id === Number(courseId));
      if (!course) return;

      for (const topic of course.topics) {
        const mat = topic.materials.find((m) => m.id === Number(materialId));
        if (mat) setMaterial(mat);
      }
    };

    fetchMaterial();
  }, [courseId, materialId]);

  if (!material) return <p>Material tapılmadı.</p>;

  return (
    <div>
      <h3>{material.title}</h3>
      <p>{material.content}</p>
      <Quiz questions={material.question} />
    </div>
  );
};

export default MaterialDetailPage;
