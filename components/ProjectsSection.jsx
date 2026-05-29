'use client';

import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { FiArrowRight } from 'react-icons/fi';

const ProjectsSection = () => {
  return (
    <section id="projects" className="page-container gradient-bg">
      <div className="section-container">

        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p
            className="mb-3 text-[10px] font-bold tracking-[0.22em] uppercase text-emerald-600 sm:text-xs"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // What I&apos;ve Built
          </p>
          <h2
            className="mb-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            My{' '}
            <span className="inline-block bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 bg-clip-text text-transparent px-1">
              Projects
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
            Real-world applications spanning freelance work, college initiatives, and academic builds.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-stretch justify-between gap-4 rounded-lg border border-emerald-100 bg-white p-5 shadow-sm animate-slide-up delay-400 sm:p-6 md:flex-row md:items-center">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-extrabold text-slate-800 sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
              Have a project in mind?
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              I'm open to new collaborations and exciting challenges.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-accent w-full flex-shrink-0 px-6 py-3 text-sm sm:w-auto"
          >
            Let's Talk
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
