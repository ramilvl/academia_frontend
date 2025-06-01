import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const Courses = () => (
  <div className="courses">
    <h2>Kurslar</h2>
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Courses;
