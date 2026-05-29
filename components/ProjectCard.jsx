import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowUpRight, FiShoppingBag, FiCalendar, FiTerminal } from 'react-icons/fi';

const coverStyles = {
  emerald: {
    shell: 'bg-emerald-50/60',
    accent: 'bg-emerald-500',
    text: 'text-emerald-700',
    icon: FiShoppingBag,
  },
  violet: {
    shell: 'bg-violet-50/60',
    accent: 'bg-violet-500',
    text: 'text-violet-750 border-violet-100',
    icon: FiCalendar,
  },
  sky: {
    shell: 'bg-sky-50/60',
    accent: 'bg-sky-500',
    text: 'text-sky-700',
    icon: FiTerminal,
  },
};

const ProjectCover = ({ project }) => {
  const style = coverStyles[project.cover?.tone] || coverStyles.sky;
  const Icon = style.icon;

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

      {/* Floating Header Info */}
      <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 rounded-md border border-slate-100 bg-white/90 px-2.5 py-1.5 backdrop-blur-md shadow-sm">
          <span className={`h-2 w-2 flex-shrink-0 rounded-full ${style.accent}`} />
          <span className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">
            {project.cover?.label}
          </span>
        </div>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-slate-100 bg-white/90 text-emerald-600 backdrop-blur-md shadow-sm">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      {/* Floating Footer Info */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-1.5">
        <span className={`rounded-md border border-emerald-100 bg-white/95 px-2.5 py-1 text-[11px] font-bold backdrop-blur-md shadow-sm ${style.text}`}>
          {project.cover?.metric}
        </span>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const typeStyle = {
    'Freelance Project': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    'College Tech Fest': 'bg-violet-50 text-violet-750 border border-violet-200',
    'Academic Project': 'bg-sky-50 text-sky-755 border border-sky-250',
  };

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] animate-slide-up"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
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
        <div className="mt-auto grid grid-cols-[1fr_auto_auto] gap-2 border-t border-emerald-100 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
          >
            Details
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-slate-600 transition-all hover:border-emerald-400 hover:text-emerald-600"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-slate-600 transition-all hover:border-emerald-400 hover:text-emerald-600"
          >
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </article>
  );
};

export default ProjectCard;
