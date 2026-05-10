'use client';

import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin, FiBriefcase, FiCode } from 'react-icons/fi';
import { personalData } from '@/data/personal';


const Hero = () => {
  const firstName = personalData.name.split(' ')[0];
  const lastName = personalData.name.split(' ').slice(1).join(' ');
  const stats = [
    { label: 'Class', value: 'Full Stack' },
    { label: 'Quests', value: '3+' },
    { label: 'Status', value: 'Open' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-bg pt-24 sm:pt-28 pb-14 sm:pb-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-70" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <div className="lg:col-span-7 space-y-7">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.12)]" style={{ fontFamily: 'var(--font-mono)' }}>
                <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_0_4px_rgba(190,242,100,0.15)] animate-pulse" />
                Ready for developer roles
              </span>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-emerald-100/65">
                <FiMapPin className="h-4 w-4 text-emerald-300" />
                {personalData.location}
              </p>
              <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.08] text-white min-[380px]:text-4xl sm:text-5xl lg:text-7xl lg:leading-[0.98]" style={{ fontFamily: 'var(--font-display)' }}>
                Building web quests with
                <span className="gradient-text"> clean code</span>.
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-50">
                {firstName} {lastName} <span className="text-emerald-300/80">/</span> {personalData.role}
              </p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-base md:text-lg text-emerald-100/70 leading-relaxed max-w-2xl">
                {personalData.about.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 max-w-xl gap-2 animate-fade-up min-[430px]:grid-cols-3" style={{ animationDelay: '0.35s' }}>
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-emerald-300/15 bg-black/25 px-3 py-4 sm:px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p className="text-lg sm:text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300/55" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary group w-full sm:w-auto"
              >
                View Projects
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary w-full sm:w-auto"
              >
                <FiMail className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href="/syamprasad_cv.pdf"
                download="Syam_Prasad_CV.pdf"
                className="btn btn-outline w-full sm:w-auto"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <span className="text-sm text-emerald-100/45 font-semibold">Connect</span>
              <div className="h-px w-8 bg-emerald-300/20" />
              <div className="flex gap-2">
                {[
                  { href: personalData.github, icon: FiGithub, label: 'GitHub' },
                  { href: personalData.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
                  { href: `mailto:${personalData.email}`, icon: FiMail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-300/15 flex items-center justify-center text-emerald-100/60 hover:text-lime-200 hover:border-emerald-300/50 hover:shadow-[0_0_18px_rgba(52,211,153,0.18)] transition-all hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 animate-fade-up order-first lg:order-none" style={{ animationDelay: '0.25s' }}>
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute -inset-4 rounded-full bg-emerald-400/10 blur-2xl" />
              <div className="relative rounded-lg border border-emerald-300/20 bg-[#07100b]/85 p-4 sm:p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full border border-emerald-300/15" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-lime-300 via-emerald-400 to-teal-400 blur-sm opacity-80" />
                    <img
                      src={personalData.profileImage}
                      alt={personalData.name}
                      className="relative h-36 w-36 rounded-full border-4 border-[#07100b] object-cover object-top shadow-[0_0_36px_rgba(52,211,153,0.32)] sm:h-44 sm:w-44"
                    />
                    <span className="absolute bottom-2 right-2 rounded-lg border border-lime-300/40 bg-[#07100b] px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-lime-200 shadow-[0_0_16px_rgba(190,242,100,0.22)]" style={{ fontFamily: 'var(--font-mono)' }}>
                      Open
                    </span>
                  </div>

                  <div className="mt-7 w-full">
                    <h2 className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {personalData.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-emerald-100/65">
                      {personalData.role}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <div className="rounded-md border border-emerald-300/15 bg-emerald-400/10 p-4 text-left">
                        <FiCode className="mb-3 h-5 w-5 text-lime-300" />
                        <p className="text-sm font-bold text-white">Full-Stack</p>
                        <p className="mt-1 text-xs text-emerald-100/50">Frontend + backend</p>
                      </div>
                      <div className="rounded-md border border-emerald-300/15 bg-emerald-400/10 p-4 text-left">
                        <FiBriefcase className="mb-3 h-5 w-5 text-emerald-300" />
                        <p className="text-sm font-bold text-white">Internship</p>
                        <p className="mt-1 text-xs text-emerald-100/50">Real project work</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
