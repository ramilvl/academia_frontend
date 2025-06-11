import { useState } from "react";
import { interviewQuestions } from "../data/interviewQuestions";
import QuestionCard from "../components/Interview/QuestionCard";
import FilterBar from "../components/Interview/FilterBar";
import "../styles/InterviewQuestions.scss";

const InterviewQuestionsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const filteredQuestions = interviewQuestions.filter((q) => {
    const matchCategory = category ? q.category === category : true;
    const matchDifficulty = difficulty ? q.difficulty === difficulty : true;
    const matchSearch = q.question.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchDifficulty && matchSearch;
  });

  return (
    <div className="interview-page">
      <h2>Interview Flashcards</h2>
      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <FilterBar
        selectedCategory={category}
        selectedDifficulty={difficulty}
        setCategory={setCategory}
        setDifficulty={setDifficulty}
      />
      <div className="flashcard-grid">
        {filteredQuestions.map((q) => (
          <QuestionCard key={q.id} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestionsPage;
