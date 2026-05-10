'use client';

import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { personalData } from '@/data/personal';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', icon: FiGithub, href: personalData.github },
    { name: 'LinkedIn', icon: FiLinkedin, href: personalData.linkedin },
    { name: 'Email', icon: FiMail, href: `mailto:${personalData.email}` },
  ];

  return (
    <footer className="bg-[#050806] border-t border-emerald-300/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-extrabold text-white text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                syam<span className="text-emerald-300">.dev</span>
              </span>
            </div>
            <p className="text-sm text-emerald-100/50 leading-relaxed mb-5">
              Full-Stack Developer building modern, performant web applications with a focus on clean code and great user experience.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-300/15 flex items-center justify-center text-emerald-100/45 hover:text-lime-200 hover:border-emerald-300/50 transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-[0.1em]">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { icon: FiMail, value: personalData.email, href: `mailto:${personalData.email}` },
                { icon: FiPhone, value: personalData.phone, href: `tel:${personalData.phone}` },
                { icon: FiMapPin, value: personalData.location, href: null },
              ].map(({ icon: Icon, value, href }) => (
                <li key={value} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="text-sm text-emerald-100/50 hover:text-lime-200 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-emerald-100/50">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-emerald-300/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-100/35">
            © {year} {personalData.name}. All rights reserved.
          </p>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-sm text-emerald-100/35 hover:text-lime-200 transition-colors"
          >
            Back to top <FiArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
