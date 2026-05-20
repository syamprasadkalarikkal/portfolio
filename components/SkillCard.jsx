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
      className="group relative overflow-hidden rounded-lg border border-emerald-300/15 bg-black/20 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/55 hover:bg-emerald-400/10 hover:shadow-[0_0_24px_rgba(52,211,153,0.12)] animate-scale-in sm:p-4"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Subtle hover bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-lime-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

      <div className="relative flex items-center gap-2.5 sm:items-start sm:gap-3">
        {/* Icon */}
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-300/10 bg-emerald-400/10 shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-lime-300 group-hover:to-emerald-400 sm:h-11 sm:w-11">
          <Icon className="h-4 w-4 text-emerald-200/70 transition-colors duration-300 group-hover:text-[#041108] sm:h-5 sm:w-5" />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[13px] font-bold text-white transition-colors group-hover:text-lime-200 sm:mb-1 sm:text-[15px]" style={{ fontFamily: 'var(--font-display)' }}>
            {skill.name}
          </h3>
          <p className="hidden text-xs leading-relaxed text-emerald-100/50 sm:block">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-lime-300 to-emerald-400 w-0 group-hover:w-full transition-all duration-500 rounded-b-lg" />
    </div>
  );
};

export default SkillCard;
