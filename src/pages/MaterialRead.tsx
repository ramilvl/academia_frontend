import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import "../styles/materialread.scss";

const MaterialRead: React.FC = () => {
  const { courseId, materialId } = useParams<{ courseId: string; materialId: string }>();

  const course = courses.find((c) => c.id === courseId);
  const material = course?.materials.find((m) => m.id === materialId);

  if (!course || !material)
    return <div className="material-error">Material not found</div>;

  return (
    <div className="material-read-overlay">
      <div className="material-read-card">
        <h2 className="material-title">{material.title}</h2>
        <div className="material-content">
          <p>{material.content}</p>
        </div>
        <Link to={`/course/${courseId}/material/${materialId}`} className="back-link">
          ← Back to Material Options
        </Link>
      </div>
    </div>
  );
};

export default MaterialRead;
