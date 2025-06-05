import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/course.scss';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <Link to={`/courses/${id}`} className="course-card">
      <div className="course-card__image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="course-card__content">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">{description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
