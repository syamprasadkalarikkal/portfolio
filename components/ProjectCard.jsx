import { FiExternalLink, FiGithub, FiCode, FiCheckCircle, FiStar, FiArrowRight } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group relative h-full animate-slide-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

      {/* Card Content */}
      <div className="relative h-full flex flex-col bg-white dark:bg-dark-900 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 shadow-xl group-hover:scale-[1.01] transition-transform duration-300">

        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${project.type === 'Internship Project'
                  ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800'
                  : 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800'
                }`}>
                {project.type}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                {project.duration}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="p-2 bg-gray-100 dark:bg-dark-800 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
            <FiCode className="w-6 h-6 text-gray-400 group-hover:text-primary-500 transition-colors" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6 space-y-3 bg-gray-50 dark:bg-dark-800/50 p-4 rounded-xl border border-gray-100 dark:border-dark-800">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Features</h4>
          <ul className="space-y-2">
            {project.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                <FiCheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Technology Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 
                         rounded-md text-xs font-medium border border-gray-200 dark:border-dark-700
                         shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 text-xs text-gray-400 font-medium self-center">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-dark-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-dark-800 
                     text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-dark-700 
                     transition-all group/btn"
          >
            <FiGithub className="w-5 h-5" />
            <span>Source Code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 
                     text-white rounded-xl font-semibold hover:bg-primary-700 shadow-lg 
                     shadow-primary-600/20 hover:shadow-primary-600/40 transition-all group/btn"
          >
            <span>Live Demo</span>
            <FiArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;