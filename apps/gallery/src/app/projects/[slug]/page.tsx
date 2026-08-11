import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const Demo = project.component;

  return (
    <main className="project-page">
      <header className="project-bar">
        <Link href="/" className="back-link" aria-label="Back to archive">← Archive</Link>
        <div className="project-bar-title">
          <span>{project.index}</span>
          {project.name}
        </div>
        <a href={`https://github.com/YuvrajKashyap/frontend/tree/main/projects/${project.slug}`} target="_blank" rel="noreferrer">
          Source ↗
        </a>
      </header>
      <section className="full-demo" aria-label={`${project.name} demo`}>
        <Demo />
      </section>
    </main>
  );
}
