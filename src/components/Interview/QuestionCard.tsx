import React, { useState } from "react";
import "../../styles/InterviewQuestions.scss";

interface Props {
  question: string;
  answer: string;
}

const QuestionCard: React.FC<Props> = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="flashcard-inner">
        <div className="flashcard-front">{question}</div>
        <div className="flashcard-back">{answer}</div>
      </div>
    </div>
  );
};

export default QuestionCard;
