import { useState } from "react";
import { questions as mockQuestions } from "../data/questions";

type CourseCardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const CourseCard = ({ id, title, description, imageUrl }: CourseCardProps) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [id: number]: string }>({});
  const [result, setResult] = useState<null | { correctCount: number; explanations: string[] }>(null);

  const courseKey = title.toLowerCase().includes("frontend") ? "frontend" : "backend";
  const courseQuestions = mockQuestions[courseKey];

  const handleAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    const correctCount = courseQuestions.filter(
      (q) => selectedAnswers[q.id] === q.correctAnswer
    ).length;

    // GPT API yerinə mock cavab
    const explanations = courseQuestions.map((q) => {
      const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
      return `Sual: ${q.question}\nDüzgün cavab: ${q.correctAnswer}\nİzah: Bu sualda ${q.correctAnswer} doğru cavabdır çünki ... ${isCorrect ? "Cavab doğrudur." : "Sən səhv cavab verdin."}`;
    });

    setResult({ correctCount, explanations });
  };

  return (
    <div className="course-card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="buttons">
          <button>Material</button>
          <button onClick={() => setShowQuestions(!showQuestions)}>
            {showQuestions ? "Bağla" : "Suallar"}
          </button>
        </div>

        {showQuestions && (
          <div className="questions">
            {courseQuestions.map((q) => (
              <div key={q.id} className="question-block">
                <p>{q.question}</p>
                {q.options.map((opt) => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={opt}
                      onChange={() => handleAnswer(q.id, opt)}
                      checked={selectedAnswers[q.id] === opt}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}
            <button onClick={handleSubmit}>Göndər</button>

            {result && (
              <div className="result">
                <h4>Düzgün suallar: {result.correctCount}</h4>
                {result.explanations.map((ex, idx) => (
                  <pre key={idx}>{ex}</pre>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
