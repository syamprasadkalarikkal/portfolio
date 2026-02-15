import { personalData } from '@/data/personal';
import { FiUser, FiBookOpen, FiHeart, FiTarget } from 'react-icons/fi';

export const metadata = {
  title: 'About - Syam Prasak K',
  description: 'Learn more about my background, education, and interests in software development.',
};

export default function About() {
  return (
    <div className="page-container gradient-bg">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Get to know more about my journey, education, and what drives me in software development
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="card p-8 animate-slide-up h-full">
              <div className="flex items-center space-x-3 mb-6">
                <FiUser className="w-6 h-6 text-primary-500" />
                <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                  Profile
                </h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {personalData.about.summary}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My technical skill set includes JavaScript, React.js, Next.js, and backend fundamentals, along with database integration and API handling. I focus on writing maintainable, scalable code and ensuring applications are responsive, performant, and easy to use across devices.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="h-full">
            <div className="card p-6 animate-slide-up delay-100 h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                  Quick Info
                </h3>
              </div>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-gray-500 dark:text-gray-400">Name</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{personalData.name}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 dark:text-gray-400">Role</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{personalData.role}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 dark:text-gray-400">Location</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{personalData.location}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 dark:text-gray-400">Email</dt>
                  <dd className="font-medium text-primary-600 dark:text-primary-400 break-all">
                    {personalData.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Education & Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="card p-8 animate-slide-up delay-200">
            <div className="flex items-center space-x-3 mb-6">
              <FiBookOpen className="w-6 h-6 text-primary-500" />
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {personalData.education.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {personalData.education.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Graduation: {personalData.education.graduation}
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {personalData.education.status}
                </span>
              </div>
            </div>
          </div>

          {/* Interests Card */}
          <div className="card p-8 animate-slide-up delay-300">
            <div className="flex items-center space-x-3 mb-6">
              <FiHeart className="w-6 h-6 text-accent-500" />
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Interests
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {personalData.about.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 
                           text-gray-700 dark:text-gray-300 rounded-lg border border-accent-200 dark:border-accent-800
                           font-medium hover:scale-105 transition-transform cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}