import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const coverStyles = {
  emerald: {
    shell: 'bg-emerald-50/60',
    accent: 'bg-emerald-500',
    text: 'text-emerald-700',
  },
  violet: {
    shell: 'bg-violet-50/60',
    accent: 'bg-violet-500',
    text: 'text-violet-700 border-violet-100',
  },
  sky: {
    shell: 'bg-sky-50/60',
    accent: 'bg-sky-500',
    text: 'text-sky-700',
  },
};

const ProjectCover = ({ project }) => {
  const style = coverStyles[project.cover?.tone] || coverStyles.sky;

  return (
    <div className={`relative aspect-[16/9] overflow-hidden ${style.shell} border-b border-emerald-100/50`}>
      {project.cover?.image ? (
        <Image
          src={project.cover.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
          priority={project.id === 1}
        />
      ) : (
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(16,185,129,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const typeStyle = {
    'Freelance Project': 'bg-emerald-50 text-emerald-700 border border-emerald-250',
    'College Tech Fest': 'bg-violet-50 text-violet-700 border border-violet-250',
    'Academic Project': 'bg-sky-50 text-sky-700 border border-sky-200',
  };

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] animate-slide-up"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Terminal prompt header */}
      <div className="flex items-center justify-between bg-slate-50/80 px-3.5 py-2.5 border-b border-emerald-100/50 text-[11px] font-mono text-slate-450">
        <div className="flex items-center gap-1.5 truncate">
          <span className="text-emerald-600 font-bold">syam:~$</span>
          <span className="truncate">cat {project.slug}.info</span>
        </div>
        <span className="text-[9px] text-slate-350 select-none uppercase font-sans">INFO</span>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <ProjectCover project={project} />

      <div className="flex flex-col flex-1 p-4">

        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${typeStyle[project.type] || typeStyle['Academic Project']}`}>
                {project.type}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.duration}
              </span>
            </div>
            <h3 className="text-base font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-emerald-700 sm:text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              {project.title}
            </h3>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} details`}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-100 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600"
          >
            <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Description */}
        <p
          className="mb-4 text-sm leading-6 text-slate-500"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Action Links */}
        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-emerald-100/50 pt-4 font-mono text-[11px]">
          <Link
            href={`/projects/${project.slug}`}
            className="flex min-h-10 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50/50 font-bold text-emerald-800 transition-all hover:bg-emerald-100/50 hover:border-emerald-400"
          >
            ./details
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50/80 font-bold text-slate-650 transition-all hover:bg-slate-100/70 hover:border-slate-350 hover:text-slate-800"
          >
            git_clone
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 items-center justify-center rounded-lg bg-slate-900 font-bold text-emerald-400 shadow-sm transition-all hover:bg-slate-800 hover:text-emerald-300"
          >
            npm_run
          </a>
        </div>

      </div>
    </article>
  );
};

export default ProjectCard;
