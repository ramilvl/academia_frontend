import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import type { Question } from "../data/types";
import "../styles/quiz.scss";

type ExplanationResponse = {
  [questionId: string]: string;
};

const MaterialQuiz: React.FC = () => {
  const { courseId, materialId } = useParams<{ courseId: string; materialId: string }>();

  if (!courseId || !materialId) {
    return <div className="quiz-error">Error: Missing course or material ID in URL.</div>;
  }

  const course = courses.find((c) => c.id === courseId);
  if (!course) return <div className="quiz-error">Course not found</div>;

  const material = course.materials.find((m) => m.id === materialId);
  if (!material) return <div className="quiz-error">Material not found</div>;

  const questions: Question[] = material.questions || [];

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [explanations, setExplanations] = useState<ExplanationResponse>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const fetchExplanations = async (wrongQuestions: Question[]) => {
    try {
      setLoading(true);
      setError(null);

      const prompt = wrongQuestions
        .map(
          (q) =>
            `Question: ${q.question}\nOptions: ${q.options.join(
              ", "
            )}\nCorrect Answer: ${q.correctAnswer}\nExplain why the correct answer is correct and why other options are wrong.\n`
        )
        .join("\n---\n");

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You are an expert teacher providing detailed explanations.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          max_tokens: 600,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || "OpenAI API error");
      }

      const explanationText = data.choices[0].message.content;
      const explanationParts = explanationText.split("\n---\n");

      const newExplanations: ExplanationResponse = {};
      wrongQuestions.forEach((q, idx) => {
        newExplanations[q.id] = explanationParts[idx] || "No explanation available.";
      });

      setExplanations(newExplanations);
    } catch (err: any) {
      setError(err.message || "Failed to fetch explanations");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (submitted) return;

    let correctCount = 0;
    const wrongQuestions: Question[] = [];

    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      } else {
        wrongQuestions.push(q);
      }
    });

    setScore(correctCount);
    setSubmitted(true);

    if (wrongQuestions.length > 0) {
      await fetchExplanations(wrongQuestions);
    }
  };

  return (
    <div className="material-quiz-container">
      <h2 className="material-quiz-title">{material.title} Quizi</h2>

      {questions.length === 0 && <p className="quiz-empty">No questions available.</p>}

      {!submitted &&
        questions.map((q) => (
          <div key={q.id} className="quiz-question">
            <p className="quiz-question-text">{q.question}</p>
            {q.options.map((option) => (
              <label key={option} className="quiz-option">
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() => handleAnswerChange(q.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}

      {!submitted && (
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={questions.length === 0 || Object.keys(answers).length !== questions.length}
        >
          Submit Quiz
        </button>
      )}

      {submitted && (
        <div className="quiz-result">
          <h3>
            Your Score: {score} / {questions.length}
          </h3>

          {loading && <p className="loading">Loading explanations...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && Object.keys(explanations).length > 0 && (
            <>
              <h4>Explanations for incorrect answers:</h4>
              {questions
                .filter((q) => answers[q.id] !== q.correctAnswer)
                .map((q) => (
                  <div key={q.id} className="explanation-block">
                    <p className="question">{q.question}</p>
                    <p>{explanations[q.id]}</p>
                  </div>
                ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MaterialQuiz;
