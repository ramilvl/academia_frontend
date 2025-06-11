import type { Course } from "../data/types";
import calculusImg from '../assets/img/calculus.png';
import physicsImg from '../assets/img/physics.png';
import programmingImg from '../assets/img/programming.png';

export const courses: Course[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Learn HTML, CSS, React, and more.",
    materials: [
      {
  id: "html",
  title: "HTML Basics",
  description: "Learn the structure and syntax of HTML to build web content.",
  content: `
HTML (HyperText Markup Language) is the backbone of any web page. It defines the structure of content by using tags and elements. Elements like headings, paragraphs, links, images, lists, and forms are all created using HTML. Browsers interpret HTML to display the webpage visually.

For example, the <head> element contains metadata, and the <body> contains the visible content. Understanding semantic HTML is important for accessibility and SEO.

HTML documents are made up of nested elements that give meaning and structure to the page content. The basic structure includes the doctype declaration, html root element, head, and body sections.

Some common tags and their purposes:
- <h1> to <h6>: Headings of different levels
- <p>: Paragraphs for text blocks
- <a>: Hyperlinks to navigate between pages or resources
- <img>: Embedding images into the page
- <ul> and <ol>: Unordered and ordered lists respectively
- <li>: List items inside ul or ol
- <form>: Collect user input via form controls like <input>, <textarea>, <select>, and <button>

Semantic HTML tags provide meaningful structure that helps search engines and assistive technologies understand the content. Examples include <header>, <footer>, <nav>, <article>, and <section>.

HTML attributes provide additional information about elements, such as:
- href in <a> tags to specify the URL of the link
- src and alt in <img> tags to specify the image source and alternative text
- class and id to add CSS styling or JavaScript hooks

HTML5 introduced many new elements and APIs, enhancing the capabilities of web pages, including:
- <video> and <audio> for multimedia embedding
- <canvas> for graphics rendering
- Geolocation, drag and drop, local storage, and offline web applications APIs

Learning HTML is the first step toward web development and is often combined with CSS for styling and JavaScript for behavior.

Remember to always write valid, well-formed HTML for best browser compatibility and performance.

Here’s an example of a simple HTML document structure:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to my website</h1>
    <p>This is a paragraph explaining my site.</p>
    <a href="https://www.example.com">Visit example.com</a>
</body>
</html>

Practice writing HTML code to get comfortable with tags, nesting, and attributes. Use developer tools in browsers to inspect and debug HTML.

Understanding HTML thoroughly will make learning CSS and JavaScript easier since they build on this foundation.

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
        description: "Style web pages with colors, layouts, and responsive design using CSS.",
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
        description: "Get introduced to React components, JSX, and hooks.",
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
    imageUrl: physicsImg,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Learn Node.js, Databases, APIs, and more.",
    materials: [
      {
        id: "node",
        title: "Node.js Basics",
                description: "Explore server-side JavaScript with Node.js and build scalable applications.",
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
                description: "Understand relational and NoSQL databases for data storage.",

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
                description: "Learn how applications communicate using REST APIs and HTTP methods.",

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
    imageUrl: calculusImg,
  },
  {
    id: "devops",
    title: "DevOps Fundamentals",
    description: "Learn about CI/CD, Docker, Kubernetes, and automation.",
    materials: [
      {
        id: "ci-cd",
        title: "CI/CD Pipelines",
                description: "Automate testing and deployment processes using CI/CD practices.",

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
                description: "Package and deploy applications using containerization with Docker.",


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
                description: "Manage containerized applications using Kubernetes orchestration.",

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
            correctAnswer: "kubectl",
          },
        ],
      },
    ],
    imageUrl: programmingImg,
  },

  {
  id: "cybersecurity",
  title: "Cybersecurity Essentials",
  description: "Understand the core principles of protecting digital assets and networks.",
  materials: [
    {
      id: "network-security",
      title: "Network Security",
              description: "Protect data during transmission using firewalls, VPNs, and encryption protocols.",

      content: "Network security protects data during transmission through firewalls, VPNs, and secure protocols.",
      questions: [
        {
          id: "q19",
          question: "Which device filters traffic between networks?",
          options: ["Firewall", "Router", "Modem"],
          correctAnswer: "Firewall",
        },
        {
          id: "q20",
          question: "What does VPN stand for?",
          options: ["Virtual Private Network", "Verified Protection Node", "Virtual Packet Network"],
          correctAnswer: "Virtual Private Network",
        },
      ],
    },
    {
      id: "malware",
      title: "Malware Types",
                    description: "Protect data during transmission using firewalls, VPNs, and encryption protocols.",

      content: "Malware includes viruses, worms, ransomware, and spyware designed to cause harm or steal data.",
      questions: [
        {
          id: "q21",
          question: "Which malware encrypts files and demands payment?",
          options: ["Ransomware", "Trojan", "Spyware"],
          correctAnswer: "Ransomware",
        },
        {
          id: "q22",
          question: "Which malware disguises itself as legitimate software?",
          options: ["Trojan", "Worm", "Rootkit"],
          correctAnswer: "Trojan",
        },
      ],
    },
    {
      id: "authentication",
      title: "Authentication Methods",
        description: "Learn how to verify user identities using methods like login systems, tokens, and OAuth.",

      content: "Authentication verifies user identity using passwords, biometrics, or tokens.",
      questions: [
        {
          id: "q23",
          question: "Which is an example of two-factor authentication?",
          options: ["Password + OTP", "Username only", "Biometrics only"],
          correctAnswer: "Password + OTP",
        },
        {
          id: "q24",
          question: "Which biometric method is commonly used in phones?",
          options: ["Fingerprint", "Voice recognition", "Iris scan"],
          correctAnswer: "Fingerprint",
        },
      ],
    },
  ],
  imageUrl: programmingImg
  }

];
