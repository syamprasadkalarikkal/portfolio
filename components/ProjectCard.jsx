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
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(74,222,128,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative h-full p-5 sm:p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${style.accent}`} />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">
              {project.cover?.label}
            </span>
          </div>
          <div className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 p-2 text-emerald-100 backdrop-blur">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div>
          <p className={`mb-2 text-xs font-semibold ${style.text}`}>
            {project.cover?.metric}
          </p>
          <h4 className="max-w-xs text-2xl sm:text-3xl font-extrabold leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {project.cover?.title}
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-md border border-emerald-300/15 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-100/80 backdrop-blur">
              {tech}
            </span>
          ))}
        </div>
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
    <div
      className="group relative flex flex-col h-full bg-[#07100b]/90 rounded-lg border border-emerald-300/15 hover:border-emerald-300/55 shadow-[0_16px_45px_rgba(0,0,0,0.24)] hover:shadow-[0_0_32px_rgba(52,211,153,0.16)] transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <ProjectCover project={project} />

      <div className="flex flex-col h-full p-5 sm:p-7">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${typeStyle[project.type] || typeStyle['Academic Project']}`}>
                {project.type}
              </span>
              <span className="text-xs text-emerald-100/40 font-mono">
                {project.duration}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white group-hover:text-lime-200 transition-colors leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
              {project.title}
            </h3>
          </div>

          {/* External link icon */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="flex-shrink-0 w-9 h-9 rounded-lg border border-emerald-300/15 flex items-center justify-center text-emerald-100/45 hover:text-lime-200 hover:border-emerald-300/50 transition-all hover:-translate-y-0.5"
          >
            <FiArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-emerald-100/65 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6 p-4 bg-black/25 rounded-lg border border-emerald-300/15">
          <p className="text-[10px] font-bold text-emerald-300/50 uppercase tracking-[0.12em] mb-3">Highlights</p>
          <ul className="space-y-2">
            {project.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-emerald-100/75">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-lime-300 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-emerald-300/50 uppercase tracking-[0.12em] mb-3">Built With</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-100/70 rounded-md border border-emerald-300/15"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 text-xs text-emerald-100/40 font-medium self-center">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-emerald-300/15 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-emerald-400/10 text-emerald-100 border border-emerald-300/15 hover:bg-emerald-400/15 transition-all"
          >
            <FiGithub className="w-4 h-4" />
            Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-emerald-400 text-[#041108] hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.22)]"
          >
            Live Demo
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
