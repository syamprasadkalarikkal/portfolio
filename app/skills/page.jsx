import { skillsData } from '@/data/skills';
import SkillCard from '@/components/SkillCard';
import { FiCode, FiZap } from 'react-icons/fi';

export const metadata = {
  title: 'Skills - Syam Prasak K',
  description: 'Technical skills and expertise in web development, including React, Next.js, JavaScript, and more.',
};

export default function Skills() {
  return (
    <div className="page-container gradient-bg">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Technical Skills</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency across various technologies
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillsData.categories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <div className="card p-8 animate-slide-up delay-500">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Additional Competencies
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.additional.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 
                           text-gray-700 dark:text-gray-300 rounded-lg border border-primary-200 dark:border-primary-800
                           font-medium hover:scale-105 transition-transform cursor-default
                           animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-900/20 dark:via-dark-900 dark:to-accent-900/20 rounded-2xl border border-primary-200 dark:border-primary-800 animate-slide-up delay-500">
          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I'm constantly expanding my skillset and staying updated with the latest technologies and best practices. 
            Currently exploring advanced Next.js features, TypeScript, and cloud deployment strategies.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My goal is to become a well-rounded full-stack developer capable of building scalable, 
            performant applications that deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}