import {
  SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiMysql, SiGit, SiGithub,
  SiExpress, SiFirebase, SiPostgresql, SiRedux, SiTypescript, SiPython,
  SiDocker, SiVercel, SiFigma, SiPostman, SiVite
} from 'react-icons/si';
import { FaDatabase, FaLock, FaServer, FaCode, FaMobile } from 'react-icons/fa';

const techIcons = {
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'HTML': SiHtml5,
  'HTML & CSS': SiHtml5,
  'HTML5': SiHtml5,
  'CSS': SiCss3,
  'CSS3': SiCss3,
  'React': SiReact,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'NextJS': SiNextdotjs,
  'Redux': SiRedux,
  'Tailwind CSS': SiTailwindcss,
  'Tailwind': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Node': SiNodedotjs,
  'Express': SiExpress,
  'Express.js': SiExpress,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Firebase': SiFirebase,
  'Database': FaDatabase,
  'Database Handling': FaDatabase,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Git & GitHub': SiGit,
  'VS Code': FaCode,
  'Visual Studio Code': FaCode,
  'Docker': SiDocker,
  'Vercel': SiVercel,
  'Figma': SiFigma,
  'Postman': SiPostman,
  'Vite': SiVite,
  'Authentication': FaLock,
  'JWT': FaLock,
  'Responsive Design': FaMobile,
  'RESTful API': FaServer,
  'API': FaServer,
  'REST API': FaServer,
  'Backend': FaServer,
  'Full Stack': FaCode,
};

const getIcon = (name) => techIcons[name] || FaCode;

const SkillCard = ({ skill, index }) => {
  const Icon = getIcon(skill.name);

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-emerald-100 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50/50 hover:shadow-sm animate-scale-in sm:p-4"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Subtle hover bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

      <div className="relative flex items-center gap-2.5 sm:items-start sm:gap-3">
        {/* Icon */}
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-400 group-hover:to-emerald-500 sm:h-11 sm:w-11">
          <Icon className="h-4 w-4 text-emerald-600 transition-colors duration-300 group-hover:text-white sm:h-5 sm:w-5" />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[13px] font-bold text-slate-800 transition-colors group-hover:text-emerald-700 sm:mb-1 sm:text-[15px]" style={{ fontFamily: 'var(--font-display)' }}>
            {skill.name}
          </h3>
          <p className="hidden text-xs leading-relaxed text-slate-500 sm:block">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-lg" />
    </div>
  );
};

export default SkillCard;
