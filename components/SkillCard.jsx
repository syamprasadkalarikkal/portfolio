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
      className="group relative bg-[#07100b]/90 rounded-lg p-5 border border-emerald-300/15 hover:border-emerald-300/55 shadow-[0_16px_45px_rgba(0,0,0,0.24)] hover:shadow-[0_0_28px_rgba(52,211,153,0.16)] transition-all duration-300 hover:-translate-y-0.5 animate-scale-in overflow-hidden"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Subtle hover bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-lime-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-emerald-400/10 group-hover:bg-gradient-to-br group-hover:from-lime-300 group-hover:to-emerald-400 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm border border-emerald-300/10">
          <Icon className="w-5 h-5 text-emerald-200/70 group-hover:text-[#041108] transition-colors duration-300" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-[15px] mb-1 group-hover:text-lime-200 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
            {skill.name}
          </h3>
          <p className="text-xs text-emerald-100/50 leading-relaxed">
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
