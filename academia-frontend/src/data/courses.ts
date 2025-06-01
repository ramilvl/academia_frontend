export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "HTML, CSS, JS, React və Tailwind ilə UI yarat.",
    imageUrl: "https://source.unsplash.com/400x200/?frontend"
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Node.js, Express və MongoDB ilə server yarat.",
    imageUrl: "https://source.unsplash.com/400x200/?backend"
  },
  {
    id: 3,
    title: "UX/UI Design",
    description: "Figma ilə dizayn prinsiplərini öyrən.",
    imageUrl: "https://source.unsplash.com/400x200/?design"
  }
];
