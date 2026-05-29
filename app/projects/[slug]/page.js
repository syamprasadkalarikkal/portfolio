import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { getProjectBySlug, projectsData } from '@/data/projects';

export const generateStaticParams = () =>
  projectsData.map((project) => ({ slug: project.slug }));

export const generateMetadata = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Syam Prasad',
    };
  }

  return {
    title: `${project.title} | Syam Prasad`,
    description: project.description,
  };
};

export default function ProjectDetailsPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-[#f8faf8] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="mb-5 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-all hover:border-emerald-400 hover:text-emerald-700"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <article className="overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm">
          {/* Cover Image */}
          <div className="relative aspect-[16/10] bg-slate-100 sm:aspect-[16/7]">
            {project.cover?.image && (
              <Image
                src={project.cover.image}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover object-top"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 backdrop-blur-md">
                  {project.type}
                </span>
                <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-mono text-slate-500 backdrop-blur-md">
                  {project.duration}
                </span>
              </div>
              <h1 className="max-w-3xl text-2xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_18rem] lg:p-8">
            <div>
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {project.description}
              </p>

              <div className="mt-7">
                <h2 className="mb-4 text-lg font-extrabold text-slate-800 sm:text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                  Project Details
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-lg border border-emerald-100 bg-slate-50 p-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="rounded-lg border border-emerald-100 bg-slate-50 p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Built With
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-400 hover:text-emerald-700"
                >
                  <FiGithub className="h-4 w-4" />
                  Source
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
                >
                  Demo
                  <FiExternalLink className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}
