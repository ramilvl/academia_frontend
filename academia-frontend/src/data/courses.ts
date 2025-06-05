import type { Course } from "../data/types";

export const courses: Course[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Learn HTML, CSS, React, and more.",
    materials: [
      {
        id: "html",
        title: "HTML Basics",
        content: `
HTML (HyperText Markup Language) is the backbone of any web page. It defines the structure of content by using tags and elements. Elements like headings, paragraphs, links, images, lists, and forms are all created using HTML. Browsers interpret HTML to display the webpage visually. 

For example, the <head> element contains metadata, and the <body> contains the visible content. Understanding semantic HTML is important for accessibility and SEO.
        `,
        questions: [
          {
            id: "q1",
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Machine Language"],
            correctAnswer: "HyperText Markup Language",
          },
          {
            id: "q2",
            question: "Which tag is used to create a hyperlink in HTML?",
            options: ["<a>", "<link>", "<href>"],
            correctAnswer: "<a>",
          },
        ],
      },
      {
        id: "css",
        title: "CSS Basics",
        content: `
CSS (Cascading Style Sheets) controls the presentation of HTML elements. It allows you to change colors, fonts, layouts, spacing, and responsive behavior of a webpage. 

CSS selectors target HTML elements, and properties define the styles applied. For example, you can set background-color, font-size, margins, and flexbox for layouts. 

CSS cascading rules and specificity determine which styles take precedence. Learning responsive design with media queries helps create mobile-friendly sites.
        `,
        questions: [
          {
            id: "q3",
            question: "Which property is used to change the text color in CSS?",
            options: ["color", "font-color", "text-color"],
            correctAnswer: "color",
          },
          {
            id: "q4",
            question: "How do you select an element with id 'header' in CSS?",
            options: ["#header", ".header", "header"],
            correctAnswer: "#header",
          },
        ],
      },
      {
        id: "react",
        title: "React Basics",
        content: `
React is a popular JavaScript library for building user interfaces using components. Components are reusable pieces of UI that can hold their own state and logic.

React uses JSX, which allows you to write HTML-like syntax inside JavaScript. React updates the UI efficiently using a virtual DOM, minimizing real DOM manipulations for performance.

React hooks like useState and useEffect let you add state and lifecycle behaviors in functional components. Understanding props and state management is key to building React apps.
        `,
        questions: [
          {
            id: "q5",
            question: "What is a React component?",
            options: [
              "A reusable piece of UI",
              "A database model",
              "A CSS style",
            ],
            correctAnswer: "A reusable piece of UI",
          },
          {
            id: "q6",
            question: "Which hook is used to manage state in functional components?",
            options: ["useState", "useEffect", "useContext"],
            correctAnswer: "useState",
          },
        ],
      },
    ],
    imageUrl: "https://example.com/frontend.png",
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Learn Node.js, Databases, APIs, and more.",
    materials: [
      {
        id: "node",
        title: "Node.js Basics",
        content: "Node.js allows JavaScript to run server-side, enabling backend development.",
        questions: [
          {
            id: "q7",
            question: "Which engine powers Node.js?",
            options: ["V8", "SpiderMonkey", "Chakra"],
            correctAnswer: "V8",
          },
          {
            id: "q8",
            question: "Which module is used to create a server in Node.js?",
            options: ["http", "fs", "url"],
            correctAnswer: "http",
          },
        ],
      },
      {
        id: "database",
        title: "Databases Basics",
        content: "Databases store and manage data for backend applications.",
        questions: [
          {
            id: "q9",
            question: "Which is a NoSQL database?",
            options: ["MongoDB", "MySQL", "PostgreSQL"],
            correctAnswer: "MongoDB",
          },
          {
            id: "q10",
            question: "What does SQL stand for?",
            options: [
              "Structured Query Language",
              "Simple Query Language",
              "Sequential Query Language",
            ],
            correctAnswer: "Structured Query Language",
          },
        ],
      },
      {
        id: "api",
        title: "APIs Basics",
        content: "APIs allow different software systems to communicate.",
        questions: [
          {
            id: "q11",
            question: "What does REST stand for?",
            options: [
              "Representational State Transfer",
              "Remote State Transfer",
              "Reusable State Transfer",
            ],
            correctAnswer: "Representational State Transfer",
          },
          {
            id: "q12",
            question: "Which HTTP method is typically used to retrieve data?",
            options: ["GET", "POST", "DELETE"],
            correctAnswer: "GET",
          },
        ],
      },
    ],
    imageUrl: "https://example.com/backend.png",
  },
  {
    id: "devops",
    title: "DevOps Fundamentals",
    description: "Learn about CI/CD, Docker, Kubernetes, and automation.",
    materials: [
      {
        id: "ci-cd",
        title: "CI/CD Pipelines",
        content: "Continuous Integration and Continuous Deployment automate testing and release.",
        questions: [
          {
            id: "q13",
            question: "What does CI stand for?",
            options: ["Continuous Integration", "Code Inspection", "Continuous Improvement"],
            correctAnswer: "Continuous Integration",
          },
          {
            id: "q14",
            question: "Which tool is commonly used for CI/CD pipelines?",
            options: ["Jenkins", "Git", "Docker"],
            correctAnswer: "Jenkins",
          },
        ],
      },
      {
        id: "docker",
        title: "Docker Basics",
        content: "Docker containers package software and dependencies together.",
        questions: [
          {
            id: "q15",
            question: "What command is used to create a new Docker container?",
            options: ["docker run", "docker create", "docker build"],
            correctAnswer: "docker run",
          },
          {
            id: "q16",
            question: "Which file is used to define a Docker image?",
            options: ["Dockerfile", "docker-compose.yml", "Containerfile"],
            correctAnswer: "Dockerfile",
          },
        ],
      },
      {
        id: "kubernetes",
        title: "Kubernetes Basics",
        content: "Kubernetes orchestrates containerized applications across clusters.",
        questions: [
          {
            id: "q17",
            question: "What is the smallest deployable unit in Kubernetes?",
            options: ["Pod", "Node", "Service"],
            correctAnswer: "Pod",
          },
          {
            id: "q18",
            question: "Which command is used to interact with Kubernetes clusters?",
            options: ["kubectl", "docker", "kubeadm"],
            correctAnswer: "kubect"
          }
        ]
      }
    ],
    imageUrl: ""
  }
]