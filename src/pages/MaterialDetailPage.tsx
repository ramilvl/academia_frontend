import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import Quiz from "../components/Course/Quiz";

const MaterialDetailPage = () => {
  const { courseId, materialId } = useParams();

  const course = courses.find(c => c.id === courseId);
  const material = course?.materials.find((m: { id: string | undefined; }) => m.id === materialId);

  if (!material) return <p>Material not found.</p>;

  return (
    <div>
      <h3>{material.title}</h3>
      <p>{material.content}</p>
      <Quiz questions={material.questions} />
    </div>
  );
};

export default MaterialDetailPage;
