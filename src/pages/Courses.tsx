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

  useEffect(() => {
    const fetchCourses = async () => {
        const response = await axios.get('http://localhost:8080/v1/course'); 
        const courseData = response.data.data.content;

        const formattedCourses = courseData.map((course: any, index: number) => ({
          id: index + 1,
          title: course.title,
          description: course.description,
          imageUrl: '/default-image.jpg'
        }));

        setCourses(formattedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <section className="courses-section">
      <span className="courses-title">Kurslarım</span>

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
