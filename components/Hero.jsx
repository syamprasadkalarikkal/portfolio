'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalData } from '@/data/personal';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center gradient-bg relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium animate-fade-in">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white animate-slide-up delay-100">
              Hi, I'm <span className="gradient-text">{personalData.name.split(' ')[0]}</span>
            </h1>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 animate-slide-up delay-200">
              {personalData.role}
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-slide-up delay-300">
              {personalData.tagline}
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-slide-up delay-400">
              Full-Stack Web Developer focused on building scalable, secure, and user-friendly web applications using modern technologies. </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up delay-500">
              <Link
                href="/projects"
                className="btn btn-primary flex items-center space-x-2 group"
              >
                <span>View My Work</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="btn btn-outline flex items-center space-x-2"
              >
                <FiMail />
                <span>Get In Touch</span>
              </Link>

              <a
                href="/syamprasad_cv.pdf"
                download="Syam_Prasad_CV.pdf"
                className="btn btn-secondary flex items-center space-x-2"
              >
                <FiDownload />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 animate-slide-up delay-500">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Connect:</span>
              <div className="flex space-x-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-200 dark:bg-dark-800 hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-110 hover-glow"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-200 dark:bg-dark-800 hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-110 hover-glow"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-3 rounded-lg bg-gray-200 dark:bg-dark-800 hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-110 hover-glow"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          {/* Right Column - Visual Element */}
          <div className="relative animate-fade-in delay-300 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Profile Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-[2rem] rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-white dark:bg-dark-800 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-dark-700 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 animate-float delay-100">
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Current Role</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Full-Stack Web Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;