export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Material {
  id: string;
  title: string;
  content: string;
  description: string;
  questions: Question[];
}

export interface Course {
  imageUrl: string;
  id: string;
  title: string;
  description: string;
  materials: Material[];
}
