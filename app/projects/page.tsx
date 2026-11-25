
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kris Paul Sobrio",
};

const projects = [
  {
    id: 1,
    name: "FoodExpress",
    description:
      "An online food ordering and delivery management system.",
  },
  {
    id: 2,
    name: "ClothingStore",
    description:
      "An online clothing store for browsing and purchasing products.",
  },
  {
    id: 3,
     name: "BookSystem",
     description:
       "A library management system for borrowing, returning, and managing books.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">
        My Projects
      </h1>

      <p className="mb-8 text-gray-600">
        Here are some of my programming projects.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <h2 className="mb-3 text-xl font-bold">
              {project.name}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
