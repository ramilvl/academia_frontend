import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { courses } from '../data/courses';
import { materials } from '../data/materials';
import MaterialList from '../components/MaterialList';
import QuestionBlock from '../components/QuestionBlock';

const CourseDetail = () => {
  const { id } = useParams();
  const courseId = Number(id);
  const course = courses.find(c => c.id === courseId);
  const courseMaterials = materials.filter(m => m.courseId === courseId);

  const [activeTab, setActiveTab] = useState<'materials' | 'questions'>('materials');
  const [selectedMaterialId, setSelectedMaterialId] = useState<number | null>(null);

  return (
    <div className="course-detail">
      <h2>{course?.title}</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('materials')}>Materiallar</button>
        <button onClick={() => setActiveTab('questions')}>Suallar</button>
      </div>

      {activeTab === 'materials' && (
        <MaterialList materials={courseMaterials} onSelect={setSelectedMaterialId} />
      )}

      {activeTab === 'questions' && selectedMaterialId && (
        <QuestionBlock materialId={selectedMaterialId} />
      )}

      {activeTab === 'questions' && !selectedMaterialId && (
        <p>Zəhmət olmasa əvvəlcə bir material seçin.</p>
      )}
    </div>
  );
};

export default CourseDetail;
