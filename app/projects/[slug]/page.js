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
    <section className="gradient-bg px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="mb-5 inline-flex items-center gap-2 rounded-lg border border-emerald-300/15 bg-emerald-400/10 px-3 py-2 text-sm font-semibold text-emerald-100/75 transition-all hover:border-emerald-300/45 hover:text-lime-200"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <article className="overflow-hidden rounded-lg border border-emerald-300/15 bg-[#07100b]/92 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
          <div className="relative aspect-[16/10] bg-[#050806] sm:aspect-[16/7]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-[#050806]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-emerald-300/20 bg-[#050806]/75 px-3 py-1 text-xs font-bold text-emerald-100/75 backdrop-blur-md">
                  {project.type}
                </span>
                <span className="rounded-full border border-emerald-300/20 bg-[#050806]/75 px-3 py-1 text-xs font-mono text-emerald-100/55 backdrop-blur-md">
                  {project.duration}
                </span>
              </div>
              <h1 className="max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h1>
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_18rem] lg:p-8">
            <div>
              <p className="text-base leading-7 text-emerald-100/70 sm:text-lg sm:leading-8">
                {project.description}
              </p>

              <div className="mt-7">
                <h2 className="mb-4 text-lg font-extrabold text-white sm:text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                  Project Details
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-lg border border-emerald-300/15 bg-black/25 p-3 text-sm leading-6 text-emerald-100/75"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-lg border border-emerald-300/15 bg-black/25 p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300/50">
                  Built With
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-emerald-300/15 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-100/75"
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
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-emerald-300/15 bg-emerald-400/10 text-sm font-semibold text-emerald-100 transition-all hover:bg-emerald-400/15"
                >
                  <FiGithub className="h-4 w-4" />
                  Source
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-400 text-sm font-semibold text-[#041108] transition-all hover:bg-lime-300"
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
