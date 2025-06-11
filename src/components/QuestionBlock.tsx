import { useState } from 'react';
import { questions as allQuestions } from '../data/questions';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  materialId: number;
}

interface Props {
  materialId: number;
}

const QuestionBlock = ({ materialId }: Props) => {
  const all: Question[] = Object.values(allQuestions).flat();
  const materialQuestions = all.filter(q => q.materialId === materialId);

  const [answers, setAnswers] = useState<{ [id: number]: string }>({});
  const [result, setResult] = useState<{ correctCount: number; explanations: string[] } | null>(null);

  const handleSelect = (qid: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [qid]: answer }));
  };

  const handleSubmit = () => {
    let correct = 0;
    const explanations = materialQuestions.map(q => {
      const isCorrect = answers[q.id] === q.correctAnswer;
      if (isCorrect) correct++;
      return isCorrect
        ? ''
        : `❌ Sual: ${q.question}\nDüzgün cavab: ${q.correctAnswer}\nİzah: Bu cavab doğru deyil çünki...`;
    }).filter(ex => ex !== '');

    setResult({ correctCount: correct, explanations });
  };

  return (
    <div className="question-block">
      {materialQuestions.map(q => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name={`q-${q.id}`}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleSelect(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Göndər</button>

      {result && (
        <div className="result">
          <h4>Düzgün: {result.correctCount}</h4>
          {result.explanations.map((ex, idx) => (
            <pre key={idx}>{ex}</pre>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionBlock;
