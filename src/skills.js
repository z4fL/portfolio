import { asset } from "./lib/asset";
export const skills = [
  {
    title: "Frontend",
    tech: [
      {
        icon: asset("/assets/tech-stack/nextjs-icon.webp"),
        alt: "NextJS",
      },
      {
        icon: asset("/assets/tech-stack/reactjs-icon.webp"),
        alt: "ReactJS",
      },
      {
        icon: asset("/assets/tech-stack/flutter-icon.webp"),
        alt: "Flutter",
      },
    ],
  },
  {
    title: "Backend",
    tech: [
      {
        icon: asset("/assets/tech-stack/golang-icon.webp"),
        alt: "Golang",
      },
      {
        icon: asset("/assets/tech-stack/laravel-icon.webp"),
        alt: "Laravel",
      },
    ],
  },
  {
    title: "AI Tools",
    tech: [
      {
        icon: asset("/assets/tech-stack/huggingface-icon.webp"),
        alt: "Huggingface",
      },
      {
        icon: asset("/assets/tech-stack/jupyternotebook-icon.webp"),
        alt: "Jupyter Notebook",
      },
    ],
  },
  {
    title: "Database",
    tech: [
      {
        icon: asset("/assets/tech-stack/postgresql-icon.webp"),
        alt: "PostgreSQL",
      },
      {
        icon: asset("/assets/tech-stack/mysql-icon.webp"),
        alt: "MySQL",
      },
    ],
  },
];
