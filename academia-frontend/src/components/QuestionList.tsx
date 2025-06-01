import { useState } from "react";

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
}

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  const [selected, setSelected] = useState<Question | null>(null);

  const handleClick = (q: Question) => {
    // GPT API ilə inteqrasiya edə bilərik burda
    setSelected(q);
  };

  return (
    <div className="question-list">
      <h3>Suallar</h3>
      <ul>
        {questions.map(q => (
          <li key={q.id} onClick={() => handleClick(q)}>{q.question}</li>
        ))}
      </ul>
      {selected && (
        <div className="answer-box">
          <p><strong>Cavab:</strong> {selected.correctAnswer}</p>
          <p><strong>İzah:</strong> Bu sualda {selected.correctAnswer} doğru cavabdır çünki GPT izah verə bilər.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionList;