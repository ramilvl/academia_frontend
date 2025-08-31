import { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "../components/Interview/QuestionCard";
import FilterBar from "../components/Interview/FilterBar";
import "../styles/InterviewQuestions.scss";

interface Question {
  id: number;
  question: string;
  answer: string;
  level: string;
}

const InterviewQuestionsPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState(""); // seçilmiş difficulty
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sadəcə 3 səviyyə
  const levels = ["EASY", "MEDIUM", "HARD"];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Backend level parametri tələb edir, filter-də seçilmiş difficulty göndəririk
        const response = await axios.get("http://localhost:8080/v1/interview", {
          params: {
            level: difficulty.toUpperCase() || "EASY", // default EASY
          },
        });

        let data = response.data.data || [response.data];

        if (!Array.isArray(data)) data = [data];

        const formatted = data.map((q: any, index: number) => ({
          id: index + 1,
          question: q.question,
          answer: q.answer,
          level: q.level?.toLowerCase() || "easy",
        }));

        setQuestions(formatted);
      } catch (err) {
        console.error("API error:", err);
        setError("Suallar yüklənə bilmədi");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [difficulty]); // difficulty dəyişəndə API yenidən çağırılır

  // Filtrləmə search üçün
  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="interview-page">
      <h2>Interview Flashcards</h2>

      {loading && <p>Yüklənir...</p>}
      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <FilterBar
        selectedDifficulty={difficulty}
        setDifficulty={setDifficulty}
        levels={levels}
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
