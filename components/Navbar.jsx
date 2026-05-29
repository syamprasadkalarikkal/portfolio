'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? 'glass shadow-[0_12px_35px_rgba(16,185,129,0.04)] py-3' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <Link href="/" className="group flex items-center gap-2" aria-label="Syam portfolio home">
            <span className="font-extrabold text-slate-800 text-lg leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              syam<span className="text-emerald-600">.dev</span>
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
                    ? 'bg-emerald-600 text-white shadow-[0_4px_12px_rgba(16,185,129,0.2)]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-emerald-50'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}

          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-emerald-250 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all"
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
            <div className="glass rounded-lg p-2 space-y-1 shadow-xl shadow-emerald-950/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-all ${isActive
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-600 hover:bg-emerald-50 hover:text-slate-900'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
