'use client';

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalData } from '@/data/personal';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', icon: FiGithub, href: personalData.github },
    { name: 'LinkedIn', icon: FiLinkedin, href: personalData.linkedin },
    { name: 'Email', icon: FiMail, href: `mailto:${personalData.email}` },
  ];

  return (
    <footer className="bg-white border-t border-emerald-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 border-b border-emerald-100 pb-6 text-center sm:flex-row sm:text-left">
          <span className="text-lg font-extrabold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>
            syam<span className="text-emerald-600">.dev</span>
          </span>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-600 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-100 hover:text-emerald-700"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 pt-5 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {year} {personalData.name}. All rights reserved.
          </p>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
          >
            Back to top <FiArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
