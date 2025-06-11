import React from 'react';
import CourseCard from '../components/Course/CourseCard';
import { courses } from '../data/courses';
import '../styles/courses.scss';

const Courses: React.FC = () => {
  return (
    <section className="courses-section">
      <span className="courses-title">Kurslarım</span>

      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
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
