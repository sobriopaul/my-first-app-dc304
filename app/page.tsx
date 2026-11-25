
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <section className="rounded-2xl bg-white p-10 shadow-md">

        <p className="mb-3 font-semibold text-blue-600">
          WELCOME TO MY PERSONAL WEBSITE
        </p>

        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          Hello, my name is Kris Paul Sobrio.
        </h1>

        <p className="mb-4 leading-relaxed text-gray-600">
          I am an Information Technology student
          interested in programming and web development.
        </p>

        <p className="mb-8 leading-relaxed text-gray-600">
          I enjoy creating websites, learning new
          technologies, and developing useful applications.
        </p>

        <Link
          href="/projects"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          See my projects
        </Link>

      </section>

    </main>
  );
}
