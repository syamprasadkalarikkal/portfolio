'use client';

import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalData } from '@/data/personal';

const Hero = () => {
  const firstName = personalData.name.split(' ')[0];
  const lastName = personalData.name.split(' ').slice(1).join(' ');

  return (
    <section id="home" className="relative flex overflow-hidden bg-[#f8faf8] pb-14 pt-24 sm:min-h-[100svh] sm:items-center sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute left-1/4 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl sm:h-96 sm:w-96" />

      {/* Background Profile Image taking complete hero section */}
      <div className="absolute inset-0 select-none pointer-events-none z-0">
        <img
          src={personalData.profileImage}
          alt=""
          className="w-full h-full object-cover object-top lg:object-[68%_15%] opacity-[0.22] lg:opacity-[0.38] filter contrast-[1.02]"
        />

        {/* Gradients to keep the text fully readable and clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8faf8] via-[#f8faf8]/95 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8faf8] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f8faf8]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Terminal Session Header */}
        <div className="mb-10 flex items-center gap-2.5 text-xs font-semibold text-slate-400 select-none animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono">Terminal Session: Active</span>
          <span className="text-slate-350">|</span>
          <span className="font-mono">syamprasad.dev</span>
        </div>

        <div className="space-y-8 sm:space-y-10 text-left">

          {/* 1. Whoami / Name */}
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 select-none">
              <span className="text-emerald-600 font-bold font-mono">syam:~$</span>
              <span className="font-mono tracking-tight">whoami</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 min-[380px]:text-5xl sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
              {firstName} <span className="gradient-text">{lastName}</span>
            </h1>
          </div>

          {/* 2. Role */}
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 select-none">
              <span className="text-emerald-600 font-bold font-mono">syam:~$</span>
              <span className="font-mono tracking-tight">role --focus</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-700 tracking-tight" style={{ fontFamily: 'var(--font-mono)' }}>
              {personalData.role}
            </p>
          </div>

          {/* 3. Mission / Tagline */}
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 select-none">
              <span className="text-emerald-600 font-bold font-mono">syam:~$</span>
              <span className="font-mono tracking-tight">cat mission.txt</span>
            </div>
            <p className="text-xl sm:text-2xl lg:text-[1.85rem] font-bold text-slate-800 leading-snug max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              Building modern web apps with{' '}
              <span className="gradient-text">clean code</span>.
            </p>
          </div>

          {/* 4. Actions / CTA Buttons */}
          <div className="space-y-3 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 select-none">
              <span className="text-emerald-600 font-bold font-mono">syam:~$</span>
              <span className="font-mono tracking-tight">./run-actions.sh</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/syamprasad_cv.pdf"
                download="Syam_Prasad_CV.pdf"
                className="btn btn-primary group gap-2 px-5 py-3 text-sm shadow-sm"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary group gap-2 px-5 py-3 text-sm border-2 border-slate-800 hover:bg-slate-50"
              >
                Projects
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-outline gap-2 px-5 py-3 text-sm bg-white border border-emerald-200 hover:border-emerald-400 hover:text-emerald-700 shadow-sm"
              >
                <FiMail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
