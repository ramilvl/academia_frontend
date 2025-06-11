import { useParams, Link } from "react-router-dom";
import { courses } from "../../data/courses";

const MaterialDetail = () => {
  const { courseId, materialId } = useParams();

  const course = courses.find(c => c.id === courseId);
  if (!course) return <p>Course not found.</p>;

  const material = course.materials.find(m => m.id === materialId);
  if (!material) return <p>Material not found.</p>;

  const containerStyle: React.CSSProperties = {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const titleStyle: React.CSSProperties = {
    borderBottom: "2px solid #007acc",
    paddingBottom: "0.3rem",
    marginBottom: "1rem",
    color: "#007acc",
  };

  const contentStyle: React.CSSProperties = {
    whiteSpace: "pre-wrap",
    marginBottom: "2rem",
    fontSize: "1.1rem",
    color: "#333",
  };

  const quizTitleStyle: React.CSSProperties = {
    color: "#444",
    marginBottom: "1rem",
  };

  const questionStyle: React.CSSProperties = {
    marginBottom: "1rem",
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  };

  const questionTextStyle: React.CSSProperties = {
    fontWeight: "600",
    marginBottom: "0.5rem",
  };

  const optionListStyle: React.CSSProperties = {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    color: "#555",
  };

  const backLinkStyle: React.CSSProperties = {
    display: "inline-block",
    marginTop: "2rem",
    textDecoration: "none",
    color: "#007acc",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{material.title}</h2>
      <p style={contentStyle}>{material.content}</p>

      <h3 style={quizTitleStyle}>Quiz</h3>
      {material.questions.map(q => (
        <div key={q.id} style={questionStyle}>
          <p style={questionTextStyle}>{q.question}</p>
          <ul style={optionListStyle}>
            {q.options.map(option => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
      ))}

      <Link to={`/courses/${courseId}`} style={backLinkStyle}>
        &larr; Back to {course.title}
      </Link>
    </div>
  );
};

export default MaterialDetail;
