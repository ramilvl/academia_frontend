export type InterviewQuestion = {
  id: string;
  question: string;
  answer: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
};

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "1",
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight JavaScript object representing the real DOM. React uses it to optimize rendering by comparing versions and updating only the changed elements.",
    category: "React",
    difficulty: "easy",
  },
  {
    id: "2",
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers the variables from its lexical scope even when executed outside that scope.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: "3",
    question: "Explain the difference between '==' and '===' in JavaScript.",
    answer:
      "`==` checks for value equality with type coercion, while `===` checks for both value and type equality.",
    category: "JavaScript",
    difficulty: "easy",
  },
  {
    id: "4",
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components.",
    category: "React",
    difficulty: "medium",
  },
  {
    id: "5",
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: "6",
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: "7",
    question: "Explain useEffect in React.",
    answer:
      "`useEffect` is a hook for performing side effects in functional components. It runs after render and can clean up with a return function.",
    category: "React",
    difficulty: "medium",
  },
  {
    id: "8",
    question: "What is the difference between var, let, and const?",
    answer:
      "`var` is function-scoped, `let` and `const` are block-scoped. `const` also means the variable can't be reassigned.",
    category: "JavaScript",
    difficulty: "easy",
  },
  {
    id: "9",
    question: "What is context in React?",
    answer:
      "Context provides a way to pass data through the component tree without passing props down manually at every level.",
    category: "React",
    difficulty: "hard",
  },
  {
    id: "10",
    question: "Explain event delegation in JavaScript.",
    answer:
      "Event delegation is a technique where a parent element handles events from its children using event bubbling.",
    category: "JavaScript",
    difficulty: "hard",
  },

  // ✅ Additional Questions
  {
    id: "11",
    question: "What is the purpose of React keys in lists?",
    answer:
      "Keys help React identify which items have changed, are added, or are removed, which improves performance in list rendering.",
    category: "React",
    difficulty: "easy",
  },
  {
    id: "12",
    question: "What is the difference between null and undefined in JavaScript?",
    answer:
      "`undefined` means a variable has been declared but not assigned. `null` is an assignment value that represents no value.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: "13",
    question: "How does the useMemo hook work in React?",
    answer:
      "`useMemo` is used to memoize expensive calculations and avoid re-computation unless dependencies change.",
    category: "React",
    difficulty: "hard",
  },
  {
    id: "14",
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop handles asynchronous callbacks by continuously checking the call stack and task queue, executing tasks when the stack is empty.",
    category: "JavaScript",
    difficulty: "hard",
  },
  {
    id: "15",
    question: "What are controlled components in React?",
    answer:
      "Controlled components are form elements whose values are controlled by React state, making it easier to manage and validate user input.",
    category: "React",
    difficulty: "medium",
  },
];
