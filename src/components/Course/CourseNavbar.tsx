import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/courseNavbar.scss";

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
          to={`/course/${courseId}/${tab.path}`}
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

export default CourseNavbar;
