"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";

export function Archive({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return projects;
    return projects.filter((project) =>
      [project.name, project.description, ...project.tags].join(" ").toLowerCase().includes(needle),
    );
  }, [projects, query]);

  return (
    <main>
      <header className="site-header">
        <Link href="/" className="wordmark">YK / FRONTEND</Link>
        <p>Open-source interfaces and interactions.</p>
        <a href="https://github.com/YuvrajKashyap/frontend" target="_blank" rel="noreferrer">GitHub ↗</a>
      </header>

      <section className="intro" aria-labelledby="archive-title">
        <div className="intro-copy">
          <p className="eyebrow">Personal archive · Free to use</p>
          <h1 id="archive-title">Built to be<br /><em>taken apart.</em></h1>
        </div>
        <div className="intro-note">
          <p>A growing collection of things I make for the web. Open one, inspect it, fork it, and make it yours.</p>
          <span>By Yuvraj Kashyap</span>
        </div>
      </section>

      <section className="archive-controls" aria-label="Archive controls">
        <div><span className="status-dot" /> {String(projects.length).padStart(3, "0")} builds</div>
        <label>
          <span className="sr-only">Search the archive</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search builds" />
          <kbd>/</kbd>
        </label>
        <div className="license-note">MIT licensed</div>
      </section>

      <section className="project-grid" aria-live="polite">
        {filtered.map((project) => {
          const Demo = project.component;
          return (
            <article className="project-card" key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="preview-link" aria-label={`Open ${project.name}`}>
                <div className="browser-chrome" aria-hidden="true">
                  <span /><span /><span />
                  <small>frontend / {project.slug}</small>
                  <b>↗</b>
                </div>
                <div className="preview-stage"><Demo compact /></div>
              </Link>
              <div className="project-meta">
                <span className="project-index">{project.index}</span>
                <div>
                  <h2><Link href={`/projects/${project.slug}`}>{project.name}</Link></h2>
                  <p>{project.description}</p>
                </div>
                <ul aria-label="Technologies">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <span className="year">{project.year}</span>
              </div>
            </article>
          );
        })}
        {filtered.length === 0 && <p className="empty-state">Nothing matches “{query}”. Try another word.</p>}
      </section>

      <footer>
        <p>Use the code. Change the code. Ship something better.</p>
        <a href="https://github.com/YuvrajKashyap/frontend" target="_blank" rel="noreferrer">Fork the archive ↗</a>
      </footer>
    </main>
  );
}
