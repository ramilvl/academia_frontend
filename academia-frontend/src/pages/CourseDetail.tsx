import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) return <p>Course not found.</p>;

  const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f0f4f8",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const titleStyle: React.CSSProperties = {
    color: "#005f99",
    borderBottom: "3px solid #007acc",
    paddingBottom: "0.5rem",
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: "700",
  };

  const materialListStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const materialItemStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    marginBottom: "1rem",
    padding: "0.75rem 1rem",
    borderRadius: "6px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s",
    cursor: "pointer",
  };

  const materialLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#007acc",
    fontWeight: "600",
    fontSize: "1.1rem",
    display: "block",
  };

  const materialLinkHover = {
    backgroundColor: "#e6f2ff",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{course.title}</h2>
      <ul style={materialListStyle}>
        {course.materials.map(m => (
          <li
            key={m.id}
            style={materialItemStyle}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = "#e6f2ff")}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = "#ffffff")}
          >
            <Link to={`/courses/${course.id}/materials/${m.id}`} style={materialLinkStyle}>
              {m.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
