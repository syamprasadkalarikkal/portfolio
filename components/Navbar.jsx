'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import MascotIcon from '@/components/MascotIcon';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);

    if (pathname !== '/' || !el) {
      window.location.href = `/${href}`;
      setIsOpen(false);
      return;
    }

    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? 'glass shadow-[0_12px_35px_rgba(0,0,0,0.35)] py-3' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2" aria-label="Syam portfolio home">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/30 bg-emerald-400/10 p-1 shadow-[0_0_18px_rgba(52,211,153,0.16)]">
              <MascotIcon />
            </span>
            <span className="font-extrabold text-white text-lg leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              syam<span className="text-emerald-300">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive
                      ? 'bg-emerald-400 text-[#041108] shadow-[0_0_18px_rgba(52,211,153,0.28)]'
                      : 'text-emerald-100/65 hover:text-emerald-100 hover:bg-emerald-400/10'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a href="/syamprasad_cv.pdf" download="Syam_Prasad_CV.pdf" className="btn btn-primary px-4 py-2">
              <FiDownload className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-emerald-300/20 bg-emerald-400/10 text-emerald-100 hover:bg-emerald-400/15 transition-all"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-2 animate-fade-up">
            <div className="glass rounded-lg p-2 space-y-1 shadow-xl shadow-black/30">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-all ${isActive
                        ? 'bg-emerald-400 text-[#041108]'
                        : 'text-emerald-100/70 hover:bg-emerald-400/10 hover:text-emerald-100'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="/syamprasad_cv.pdf"
                download="Syam_Prasad_CV.pdf"
                className="mt-2 btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                <FiDownload className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
