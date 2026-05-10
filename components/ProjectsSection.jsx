'use client';

import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { FiArrowRight } from 'react-icons/fi';

const ProjectsSection = () => {
  return (
    <section id="projects" className="page-container gradient-bg">
      <div className="section-container">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label">What I've Built</p>
          <h1 className="section-title">
            My <span>Projects</span>
          </h1>
          <p className="section-subtitle max-w-2xl">
            Real-world applications spanning freelance work, college initiatives, and academic builds.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 rounded-lg bg-[#07100b] border border-emerald-300/15 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-slide-up delay-400 shadow-[0_0_35px_rgba(52,211,153,0.08)]">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Have a project in mind?
            </h3>
            <p className="text-emerald-100/60 text-sm">
              I'm open to new collaborations and exciting challenges.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 btn btn-accent px-7 py-3 text-sm w-full sm:w-auto"
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
