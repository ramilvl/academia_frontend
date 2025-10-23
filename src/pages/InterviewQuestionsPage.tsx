import { useState, useEffect } from "react";
import QuestionCard from "../components/Interview/QuestionCard";
import FilterBar from "../components/Interview/FilterBar";
import "../styles/InterviewQuestions.scss";

// Sualların tipi
interface Question {
  id: number;
  question: string;
  answer: string;
  level: string;
  category?: string;
  degree?: string;
}

const InterviewQuestionsPage: React.FC = () => {
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
        setLoading(true);

        // --- Mock backend data ---
        const mockData: Question[] = [
          {
            id: 1,
            question: "What is React?",
            answer: "A JS library for building user interfaces",
            level: "easy",
            category: "Frontend",
            degree: "Junior",
          },
          {
            id: 2,
            question: "Explain closures in JavaScript",
            answer:
              "A function having access to outer scope even after outer function has returned",
            level: "medium",
            category: "JavaScript",
            degree: "Mid",
          },
          {
            id: 3,
            question: "What is a Promise in JS?",
            answer: "An object representing eventual completion or failure of async operation",
            level: "easy",
            category: "JavaScript",
            degree: "Junior",
          },
          {
            id: 4,
            question: "What is React Suspense?",
            answer: "A feature to wait for some code or data before rendering",
            level: "hard",
            category: "Frontend",
            degree: "Senior",
          },
          {
            id: 5,
            question: "Difference between var, let, and const?",
            answer: "var is function scoped, let/const are block scoped",
            level: "easy",
            category: "JavaScript",
            degree: "Junior",
          },
        ];

        // Difficulty filter
        const filteredByDifficulty =
          difficulty && difficulty !== ""
            ? mockData.filter((q) => q.level.toLowerCase() === difficulty.toLowerCase())
            : mockData;

        setQuestions(filteredByDifficulty);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError("Suallar yüklənə bilmədi");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [difficulty]);

  // Search filter
  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="interview-page" style={{ padding: "2rem" }}>
      <h2>Interview Flashcards</h2>

      {loading && <p>Yüklənir...</p>}
      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          margin: "1rem 0",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <FilterBar selectedDifficulty={difficulty} setDifficulty={setDifficulty} levels={levels} />

      <div className="flashcard-grid" style={{ marginTop: "2rem" }}>
        {filteredQuestions.length === 0 && !loading && <p>Suallar tapılmadı</p>}

        {filteredQuestions.map((q) => (
          <QuestionCard key={q.id} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestionsPage;
