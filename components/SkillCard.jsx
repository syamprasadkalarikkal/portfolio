import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiExpress,
  SiFirebase,
  SiPostgresql,
  SiRedux,
  SiTypescript,
  SiPython,
  SiDocker,
  SiVercel,
  SiFigma,
  SiPostman,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiVite,
  SiFramer,
  SiBootstrap,
  SiSass,
  SiGraphql,
  SiJest,
  SiCypress,
  SiEslint,
  SiPrettier
} from 'react-icons/si';
import { 
  FaDatabase, 
  FaShoppingCart, 
  FaHeart, 
  FaCode,
  FaServer,
  FaTools,
  FaLaptopCode,
  FaGlobe,
  FaRocket,
  FaMobile,
  FaPalette,
  FaLock,
  FaBolt
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

// Icon mapping for different technologies
const techIcons = {
  // Languages
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'HTML': SiHtml5,
  'HTML & CSS': SiHtml5,
  'HTML5': SiHtml5,
  'CSS': SiCss3,
  'CSS3': SiCss3,
  
  // Frontend Frameworks
  'React': SiReact,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'NextJS': SiNextdotjs,
  'Redux': SiRedux,
  'Framer Motion': SiFramer,
  
  // Styling
  'Tailwind CSS': SiTailwindcss,
  'Tailwind': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'Sass': SiSass,
  'SCSS': SiSass,
  
  // Backend
  'Node.js': SiNodedotjs,
  'Node': SiNodedotjs,
  'Express': SiExpress,
  'Express.js': SiExpress,
  'GraphQL': SiGraphql,
  
  // Databases
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Firebase': SiFirebase,
  'Database': FaDatabase,
  'Database Handling': FaDatabase,
  
  // Tools
  'Git': SiGit,
  'GitHub': SiGithub,
  'Git & GitHub': SiGit,
  'VS Code': SiVisualstudiocode,
  'Visual Studio Code': SiVisualstudiocode,
  'Docker': SiDocker,
  'Vercel': SiVercel,
  'Figma': SiFigma,
  'Postman': SiPostman,
  'npm': SiNpm,
  'Yarn': SiYarn,
  'Webpack': SiWebpack,
  'Vite': SiVite,
  
  // Testing
  'Jest': SiJest,
  'Cypress': SiCypress,
  
  // Code Quality
  'ESLint': SiEslint,
  'Prettier': SiPrettier,
  
  // Concepts/Features
  'Authentication': FaLock,
  'JWT': FaLock,
  'Shopping Cart': FaShoppingCart,
  'Add to Cart': FaShoppingCart,
  'Cart': FaShoppingCart,
  'Wishlist': FaHeart,
  'Product Management': FaShoppingCart,
  'Responsive Design': FaMobile,
  'RESTful API': FaServer,
  'API': FaServer,
  'REST API': FaServer,
  'Backend': FaServer,
  'Full Stack': FaCode,
  'Frontend': FaLaptopCode,
  'Web Development': FaGlobe,
  'Performance': FaBolt,
  'UI/UX': FaPalette,
  'Design': FaPalette,
  'Deployment': FaRocket,
};

// Get icon for a skill, fallback to default
const getSkillIcon = (skillName) => {
  const Icon = techIcons[skillName] || FaCode;
  return Icon;
};

const SkillCard = ({ skill, index }) => {
  const Icon = getSkillIcon(skill.name);
  
  return (
    <div
      className="group relative bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-800 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] animate-scale-in overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-start space-x-4 mb-4">
          {/* Icon Container */}
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>
          
          {/* Title */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {skill.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {skill.description}
        </p>

        {/* Bottom Accent Line */}
        <div className="mt-5 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
};

export default SkillCard;