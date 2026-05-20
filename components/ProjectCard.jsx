import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowUpRight, FiShoppingBag, FiCalendar, FiTerminal } from 'react-icons/fi';

const coverStyles = {
  emerald: {
    shell: 'from-emerald-950 via-slate-950 to-slate-900',
    accent: 'bg-emerald-400',
    text: 'text-emerald-200',
    icon: FiShoppingBag,
  },
  violet: {
    shell: 'from-emerald-950 via-slate-950 to-black',
    accent: 'bg-lime-300',
    text: 'text-lime-200',
    icon: FiCalendar,
  },
  sky: {
    shell: 'from-teal-950 via-slate-950 to-black',
    accent: 'bg-emerald-300',
    text: 'text-emerald-200',
    icon: FiTerminal,
  },
};

const ProjectCover = ({ project }) => {
  const style = coverStyles[project.cover?.tone] || coverStyles.sky;
  const Icon = style.icon;

  return (
    <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${style.shell}`}>
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
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(74,222,128,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#050806]/85 via-[#050806]/10 to-transparent" />
      <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-[#050806]/70 px-2.5 py-1.5 backdrop-blur-md">
          <span className={`h-2 w-2 flex-shrink-0 rounded-full ${style.accent}`} />
          <span className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-white/75">
            {project.cover?.label}
          </span>
        </div>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#050806]/70 text-emerald-100 backdrop-blur-md">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-1.5">
        <span className={`rounded-md border border-white/10 bg-[#050806]/75 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${style.text}`}>
          {project.cover?.metric}
        </span>
        {project.technologies.slice(0, 1).map((tech) => (
          <span key={tech} className="rounded-md border border-white/10 bg-[#050806]/70 px-2.5 py-1 text-[11px] font-semibold text-emerald-50/80 backdrop-blur-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const typeStyle = {
    'Freelance Project': 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/50',
    'College Tech Fest': 'bg-lime-300/10 text-lime-200 border border-lime-300/25',
    'Academic Project': 'bg-emerald-400/10 text-emerald-200 border border-emerald-300/25',
  };

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-emerald-300/15 bg-[#07100b]/90 shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/55 hover:shadow-[0_0_28px_rgba(52,211,153,0.14)] animate-slide-up"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <ProjectCover project={project} />

      <div className="flex h-full flex-col p-4">

        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${typeStyle[project.type] || typeStyle['Academic Project']}`}>
                {project.type}
              </span>
              <span className="text-xs text-emerald-100/40 font-mono">
                {project.duration}
              </span>
            </div>
            <h3 className="text-base font-extrabold leading-snug text-white transition-colors group-hover:text-lime-200 sm:text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              {project.title}
            </h3>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} details`}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-300/15 text-emerald-100/45 transition-all hover:-translate-y-0.5 hover:border-emerald-300/50 hover:text-lime-200"
          >
            <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Description */}
        <p
          className="mb-4 text-sm leading-6 text-emerald-100/65"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-4 rounded-lg border border-emerald-300/15 bg-black/25 p-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300/50">Highlights</p>
          <ul className="space-y-1.5">
            {project.keyFeatures.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[13px] leading-5 text-emerald-100/75">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-lime-300 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300/50">Built With</p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md border border-emerald-300/15 bg-emerald-400/10 px-2 py-1 text-[11px] font-medium text-emerald-100/70"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md px-2 py-1 text-[11px] font-semibold text-emerald-100/45">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-auto grid grid-cols-[1fr_auto_auto] gap-2 border-t border-emerald-300/15 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-emerald-400 text-sm font-semibold text-[#041108] shadow-[0_0_18px_rgba(52,211,153,0.18)] transition-all hover:bg-lime-300"
          >
            Details
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-300/15 bg-emerald-400/10 text-emerald-100 transition-all hover:bg-emerald-400/15"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-300/15 bg-emerald-400/10 text-emerald-100 transition-all hover:bg-emerald-400/15"
          >
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </article>
  );
};

export default ProjectCard;
