'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectVisual from './ProjectVisual';

export default function ProjectGallery({ projects, preview = false }) {
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map((project) => project.category).filter(Boolean))];
  const visibleProjects = category === 'All' ? projects : projects.filter((project) => project.category === category);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {categories.map((name) => (
          <button key={name} type="button" aria-pressed={name === category} onClick={() => setCategory(name)}>
            {name}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} matching projects</p>
      <div className={preview && category === 'All' ? "project-grid project-grid--preview" : "project-grid"}>
        {(preview ? visibleProjects.slice(0, 6) : visibleProjects).map((project) => (
          <article className="work-card" key={project.slug}>
            <Link className="work-link" href={`/projects/${project.slug}`}>
              <ProjectVisual project={project} sizes="(min-width: 76rem) 360px, (min-width: 64rem) 31vw, (min-width: 42rem) 46vw, 92vw" />
              <div className="work-meta">
                <span>{project.category}</span>
                {project.duration && <span>{project.duration}</span>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          </article>
        ))}
      </div>
      {preview && (
        <Link className="project-text-link project-more" href="/projects">
          View all projects
        </Link>
      )}
    </>
  );
}
