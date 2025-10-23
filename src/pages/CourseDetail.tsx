import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import "../styles/courseDetail.scss";
import GradebookSection from "./GradebookSection";

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

const ContentTab: React.FC<{
  course: Course;
  doneMaterials: string[];
  handleMarkDone: (id: number) => void;
  handleSelectMaterial: (m: Material) => void;
}> = ({ course, doneMaterials, handleMarkDone, handleSelectMaterial }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);

  const toggleTopic = (id: number) => {
    setSelectedTopicId((prev) => (prev === id ? null : id));
  };

  if (course.topics.length === 0) {
    return <p>Bu kurs üçün mövzu əlavə edilməyib.</p>;
  }

  return (
    <div className="topics-wrapper">
      {course.topics.map((topic) => (
        <div key={topic.id} className="topic-section">
          <div
            className="topic-header"
            onClick={() => toggleTopic(topic.id)}
            style={{
              cursor: "pointer",
              backgroundColor: "#f4f4f4",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
          >
            <strong>{topic.title}</strong>
            <p style={{ margin: 0, color: "#666" }}>{topic.description}</p>
          </div>

          {selectedTopicId === topic.id && (
            <ul className="material-list" style={{ marginLeft: "1rem" }}>
              {topic.materials.map((material) => (
                <li
                  key={material.id}
                  className="material-item"
                  onClick={() => handleSelectMaterial(material)}
                  style={{
                    listStyle: "none",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    padding: "8px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="material-header-desc">
                    <span style={{ fontWeight: "500" }}>{material.title}</span>
                    <p style={{ color: "#777", fontSize: "0.9rem" }}>
                      {material.description}
                    </p>
                  </div>
                </li>
              ))}
              {topic.materials.length === 0 && (
                <p style={{ marginLeft: "1rem", color: "#999" }}>
                  Material əlavə edilməyib.
                </p>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

const RecordingsTab: React.FC<{ course: Course }> = ({ course }) => (
  <div>
    {course.topics.map((topic) => (
      <div key={topic.id}>
        <h3>🎥 {topic.title} Recordings</h3>
        {topic.materials.map((m) =>
          m.recordUrl ? (
            <video
              key={m.id}
              controls
              width={400}
              style={{ marginBottom: "1rem" }}
            >
              <source src={m.recordUrl} type="video/mp4" />
              Sizin brauzer video dəstəkləmir.
            </video>
          ) : null
        )}
      </div>
    ))}
  </div>
);

const DiscussionsTab: React.FC = () => <div>💬 Discussions will appear here.</div>;

// ✅ Navbar component
const CourseNavbar: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const tabs = [
    { name: "Content", path: "content" },
    { name: "Recordings", path: "recordings" },
    { name: "Gradebook", path: "gradebook" },
    { name: "Discussions", path: "discussions" },
  ];

  return (
    <nav className="course-navbar">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={`/courses/${courseId}/${tab.path}`}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [doneMaterials, setDoneMaterials] = useState<string[]>([]);
  const STORAGE_KEY = `doneMaterials-${courseId}`;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setDoneMaterials(JSON.parse(saved));
  }, [courseId]);

  useEffect(() => {
    if (courseId)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(doneMaterials));
  }, [doneMaterials, courseId]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/course");
        const allCourses = response.data.data.content;
        const foundCourse = allCourses.find(
          (c: any) => c.id === Number(courseId)
        );
        if (!foundCourse) {
          setError("Kurs tapılmadı.");
        } else {
          setCourse(foundCourse);
        }
      } catch (err) {
        console.error(err);
        setError("Kurs məlumatı yüklənə bilmədi.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleSelectMaterial = (material: Material) => {
    navigate(`/course/${courseId}/material/${material.id}`);
  };

  const handleMarkDone = (id: number) => {
    setDoneMaterials((prev) =>
      prev.includes(id.toString())
        ? prev.filter((mid) => mid !== id.toString())
        : [...prev, id.toString()]
    );
  };

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>Kurs tapılmadı.</p>;

  return (
    <div className="course-detail">
      <Link to="/courses" className="back-link">
        ← Geri
      </Link>

      <h2 className="course-title">{course.title}</h2>

      <CourseNavbar />

      <Routes>
        <Route index element={<Navigate to="content" replace />} />
        <Route
          path="content"
          element={
            <ContentTab
              course={course}
              doneMaterials={doneMaterials}
              handleMarkDone={handleMarkDone}
              handleSelectMaterial={handleSelectMaterial}
            />
          }
        />
        <Route path="recordings" element={<RecordingsTab course={course} />} />
        <Route path="gradebook" element={<GradebookSection />} />
        <Route path="discussions" element={<DiscussionsTab />} />
      </Routes>
    </div>
  );
};

export default CourseDetail;
