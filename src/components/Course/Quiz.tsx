import { useState } from "react";
import type { Question } from "../../data/types";

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qid: string, answer: string) => {
    setAnswers({ ...answers, [qid]: answer });
  };

  return (
    <div>
      {questions.map(q => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name={q.id}
                value={opt}
                onChange={() => handleSelect(q.id, opt)}
                disabled={submitted}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      {!submitted ? (
        <button onClick={() => setSubmitted(true)}>Submit</button>
      ) : (
        <div>
          {questions.map(q => (
            <p key={q.id}>
              {q.question} - {answers[q.id] === q.correctAnswer ? "✅" : "❌"}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
