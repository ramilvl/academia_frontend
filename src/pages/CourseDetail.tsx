import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import '../styles/courseDetail.scss';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Material {
  id: string;
  title: string;
  content: string;
  questions: Question[];
}

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);

  const [selectedMaterial] = useState<Material | null>(null);
  const [viewType, setViewType] = useState<'read' | 'quiz' | null>(null);
  const [doneMaterials, setDoneMaterials] = useState<string[]>([]);

  const STORAGE_KEY = `doneMaterials-${courseId}`;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setDoneMaterials(JSON.parse(saved));
    }
  }, [courseId]);

  useEffect(() => {
    if (courseId) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(doneMaterials));
    }
  }, [doneMaterials, courseId]);

  if (!course) {
    return <div className="course-detail">Course not found.</div>;
  }

  const handleSelectMaterial = (material: Material) => {
    navigate(`/course/${courseId}/material/${material.id}`);
  };

  const handleMarkDone = (id: string) => {
    setDoneMaterials((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  return (
    <div className="course-detail">
      <Link to="/courses" className="back-link">
        ← Geri
      </Link>

      <h2 className="course-title">{course.title} üçün materiallar</h2>

      <ul className="material-list">
        {course.materials.map((material) => (
          <li
            key={material.id}
            className="material-item"
            onClick={() => handleSelectMaterial(material)}
          >
            <div className="material-header">
              <div className="material-header-desc">
                <span>{material.title}</span>
                <span>{material.description}</span>
              </div>
              <input
                type="checkbox"
                checked={doneMaterials.includes(material.id)}
                onClick={(e) => e.stopPropagation()}
                onChange={() => handleMarkDone(material.id)}
              />
            </div>
            {doneMaterials.includes(material.id) && (
              <div className="done-status">🎉 Completed</div>
            )}
          </li>
        ))}
      </ul>

      {selectedMaterial && !viewType && (
        <div className="material-options">
          <p>
            What do you want to do with <strong>{selectedMaterial.title}</strong>?
          </p>
          <button onClick={() => setViewType('read')} className="btn btn-read">
            📘 Read Material
          </button>
          <button onClick={() => setViewType('quiz')} className="btn btn-quiz">
            📝 Take Quiz
          </button>
        </div>
      )}

      {selectedMaterial && viewType === 'read' && (
        <div className="material-content">
          <h3>{selectedMaterial.title}</h3>
          <p>{selectedMaterial.content}</p>
        </div>
      )}

      {selectedMaterial && viewType === 'quiz' && (
        <div className="material-quiz">
          <h3>Quiz: {selectedMaterial.title}</h3>
          <ul>
            {selectedMaterial.questions.map((q) => (
              <li key={q.id}>
                <strong>{q.question}</strong>
                <ul>
                  {q.options.map((opt, idx) => (
                    <li key={idx}>{opt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
