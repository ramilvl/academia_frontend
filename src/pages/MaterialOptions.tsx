import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import '../styles/materialOptions.scss';

const MaterialOptions: React.FC = () => {
  const { courseId, materialId } = useParams<{ courseId: string; materialId: string }>();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === courseId);
  const material = course?.materials.find(m => m.id === materialId);

  if (!course || !material) return <div className="material-error">Material not found</div>;

  return (
    <div className="material-container">
      <div className="material-header-new">
        <Link to={`/courses/${courseId}`} className="back-link">← Back</Link>
        <h2 className="material-topic-title">Mövzu: {material.title}</h2>
      </div>

      <div className="material-nav-tabs">
        <div
          className="tab-item"
          onClick={() => navigate(`/course/${courseId}/material/${materialId}/read`)}
        >
          📘 Content
        </div>
        <div
          className="tab-item"
          onClick={() => navigate(`/course/${courseId}/material/${materialId}/recordings`)}
        >
          🎥 Recordings
        </div>
        <div
          className="tab-item"
          onClick={() => navigate(`/course/${courseId}/material/${materialId}/quiz`)}
        >
          📝 Quiz
        </div>
      </div>
    </div>
  );
};

export default MaterialOptions;
