import React, { useEffect, useState } from 'react';
import CourseCard from '../components/Course/CourseCard';
import '../styles/courses.scss';
import axios from 'axios';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/v1/course'); 
        const courseData = response.data.data.content; // burada content-i götürürük

        const formattedCourses = courseData.map((course: any, index: number) => ({
          id: index + 1, // backend id qaytarmır, index istifadə edirik
          title: course.title,
          description: course.description,
          imageUrl: '/default-image.jpg'
        }));

        setCourses(formattedCourses);
      } catch (err) {
        console.error(err);
        setError('Kurslar yüklənə bilmədi.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="courses-section">
      <span className="courses-title">Kurslarım</span>

      {loading && <p>Yüklənir...</p>}
      {error && <p>{error}</p>}

      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id.toString()}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
