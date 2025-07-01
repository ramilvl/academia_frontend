import React from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { courses } from '../data/courses';
import '../styles/materialOptions.scss';

const MaterialOptions: React.FC = () => {
  const { courseId, materialId } = useParams<{ courseId: string; materialId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const course = courses.find(c => c.id === courseId);
  const material = course?.materials.find(m => m.id === materialId);

  if (!course || !material) return <div className="material-error">Material not found</div>;

  const tabs = [
    { label: '📘 Content', path: 'read' },
    { label: '🎥 Recordings', path: 'recordings' },
    { label: '📝 Quiz', path: 'quiz' }
  ];

  return (
    <div className="material-container">
      <div className="material-header-new">
        <Link to={`/courses/${courseId}`} className="back-link">← Back</Link>
        <h2 className="material-topic-title">Mövzu: {material.title}</h2>
      </div>

      <div className="material-nav-tabs" role="tablist" aria-label="Material navigation">
        {tabs.map(({ label, path }) => {
          const isActive = location.pathname.includes(path);
          return (
            <div
              key={path}
              className={`tab-item ${isActive ? 'active' : ''}`}
              onClick={() => navigate(`/course/${courseId}/material/${materialId}/${path}`)}
              role="tab"
              aria-selected={isActive}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaterialOptions;
