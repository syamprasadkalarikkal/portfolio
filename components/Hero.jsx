'use client';

import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { personalData } from '@/data/personal';


const Hero = () => {
  const firstName = personalData.name.split(' ')[0];
  const lastName = personalData.name.split(' ').slice(1).join(' ');
  const stats = [
    { label: 'Focus', value: 'Full Stack' },
    { label: 'Projects', value: '3+' },
    { label: 'Availability', value: 'Open' },
  ];

  return (
    <section id="home" className="relative flex overflow-hidden gradient-bg pb-10 pt-20 sm:min-h-[100svh] sm:items-center sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-70" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">

          <div className="order-2 space-y-4 text-center sm:space-y-6 lg:order-1 lg:col-span-7 lg:space-y-6 lg:text-left xl:space-y-7">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.12)] sm:text-xs sm:tracking-[0.14em]" style={{ fontFamily: 'var(--font-mono)' }}>
                <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_0_4px_rgba(190,242,100,0.15)] animate-pulse" />
                Available for developer roles
              </span>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-100/65 sm:mb-4 sm:text-sm lg:justify-start">
                <FiMapPin className="h-4 w-4 text-emerald-300" />
                {personalData.location}
              </p>
              <h1 className="mx-auto max-w-[22rem] text-[1.7rem] font-extrabold leading-[1.13] text-white min-[380px]:text-[2rem] sm:max-w-4xl sm:text-5xl lg:mx-0 lg:text-[4rem] lg:leading-[1] xl:text-7xl xl:leading-[0.98]" style={{ fontFamily: 'var(--font-display)' }}>
                Building modern web apps with
                <span className="gradient-text"> clean code</span>.
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-base font-semibold text-emerald-50 sm:text-xl md:text-2xl">
                {firstName} {lastName} <span className="text-emerald-300/80">/</span> {personalData.role}
              </p>
            </div>

            <div className="hidden animate-fade-up sm:block" style={{ animationDelay: '0.3s' }}>
              <p className="mx-auto max-w-[23rem] text-sm leading-6 text-emerald-100/70 sm:max-w-2xl sm:text-base md:text-lg md:leading-relaxed lg:mx-0 lg:max-w-xl">
                {personalData.about.summary}
              </p>
            </div>

            <div className="hidden max-w-xl grid-cols-1 gap-2 animate-fade-up min-[430px]:grid-cols-3 sm:grid" style={{ animationDelay: '0.35s' }}>
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-emerald-300/15 bg-black/25 px-3 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-5">
                  <p className="text-lg font-extrabold text-white sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300/55" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto grid max-w-[23rem] grid-cols-2 gap-2.5 animate-fade-up sm:max-w-none sm:flex sm:flex-row sm:flex-wrap sm:gap-3 lg:mx-0" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary group w-full px-3 text-xs sm:w-auto sm:px-5 sm:text-sm"
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
                className="btn btn-secondary w-full px-3 text-xs sm:w-auto sm:px-5 sm:text-sm"
              >
                <FiMail className="w-4 h-4" />
                Contact
              </a>
              <a
                href="/syamprasad_cv.pdf"
                download="Syam_Prasad_CV.pdf"
                className="btn btn-outline hidden w-full sm:inline-flex sm:w-auto"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div className="flex justify-center gap-2 animate-fade-up sm:justify-start sm:gap-4" style={{ animationDelay: '0.5s' }}>
              <span className="hidden text-sm font-semibold text-emerald-100/45 sm:inline">Connect</span>
              <div className="hidden h-px w-8 bg-emerald-300/20 sm:block" />
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
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/15 bg-emerald-400/10 text-emerald-100/60 transition-all hover:-translate-y-0.5 hover:border-emerald-300/50 hover:text-lime-200 hover:shadow-[0_0_18px_rgba(52,211,153,0.18)] sm:h-10 sm:w-10"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="order-1 animate-fade-up lg:order-2 lg:col-span-5" style={{ animationDelay: '0.25s' }}>
            <div className="relative mx-auto max-w-[21rem] sm:max-w-sm lg:max-w-[23rem] xl:max-w-md">
              <div className="absolute -inset-4 rounded-full bg-emerald-400/10 blur-2xl" />
              <div className="relative rounded-lg border border-emerald-300/20 bg-[#07100b]/85 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.34)] sm:p-5 sm:shadow-[0_24px_80px_rgba(0,0,0,0.42)] lg:p-6">
                <div className="flex items-center gap-3 text-left sm:flex-col sm:text-center">
                  <div className="relative flex-shrink-0">
                    <div className="hidden absolute -inset-3 rounded-full border border-emerald-300/15 sm:block" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-lime-300 via-emerald-400 to-teal-400 blur-sm opacity-80" />
                    <img
                      src={personalData.profileImage}
                      alt={personalData.name}
                      className="relative h-16 w-16 rounded-full border-4 border-[#07100b] object-cover object-top shadow-[0_0_30px_rgba(52,211,153,0.26)] sm:h-44 sm:w-44 sm:shadow-[0_0_36px_rgba(52,211,153,0.32)] lg:h-52 lg:w-52"
                    />
                    <span className="absolute -bottom-1 -right-1 rounded-md border border-lime-300/40 bg-[#07100b] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.1em] text-lime-200 shadow-[0_0_16px_rgba(190,242,100,0.22)] sm:bottom-2 sm:right-2 sm:rounded-lg sm:px-2 sm:py-1 sm:text-[10px] sm:tracking-[0.12em]" style={{ fontFamily: 'var(--font-mono)' }}>
                      Open
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 sm:mt-6 sm:w-full">
                    <h2 className="truncate text-lg font-extrabold text-white sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                      {personalData.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-emerald-100/65">
                      {personalData.role}
                    </p>
                    <p className="mt-1 text-xs font-medium text-emerald-100/40 sm:hidden">
                      Full-stack web developer
                    </p>
                  </div>
                </div>
                <div className="mt-6 hidden grid-cols-2 gap-3 border-t border-emerald-300/15 pt-5 lg:grid">
                  <div className="rounded-lg border border-emerald-300/15 bg-emerald-400/10 p-4 text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300/50">Education</p>
                    <p className="mt-2 text-sm font-bold text-white">{personalData.education.status}</p>
                    <p className="mt-1 text-xs text-emerald-100/50">BCA, Calicut University</p>
                  </div>
                  <div className="rounded-lg border border-emerald-300/15 bg-emerald-400/10 p-4 text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300/50">Available</p>
                    <p className="mt-2 text-sm font-bold text-white">Projects & Roles</p>
                    <p className="mt-1 text-xs text-emerald-100/50">Full-stack development</p>
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
