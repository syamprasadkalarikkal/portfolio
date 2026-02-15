'use client';

import { useState } from 'react';
import { projectsData, projectCategories } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { FiFolder } from 'react-icons/fi';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="page-container gradient-bg">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            A showcase of my work including academic projects, internship contributions, and personal endeavors
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 scale-105'
                  : 'bg-white dark:bg-dark-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <FiFolder className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-900/20 dark:via-dark-900 dark:to-accent-900/20 rounded-2xl border border-primary-200 dark:border-primary-800 text-center animate-slide-up delay-500">
          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to collaborate?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always interested in working on exciting projects and learning new technologies.
            Let's build something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-block btn btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}