import ContactForm from '@/components/ContactForm';
import { personalData } from '@/data/personal';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactSection = () => {
  const contacts = [
    { icon: FiMail,    label: 'Mail To',       value: personalData.email,    href: `mailto:${personalData.email}` },
    { icon: FiPhone,   label: 'Phone',          value: personalData.phone,    href: `tel:${personalData.phone}` },
    { icon: FiMapPin,  label: 'Base Location',  value: personalData.location, href: null },
  ];

  const socials = [
    { icon: FiGithub,   name: 'GitHub',   href: personalData.github },
    { icon: FiLinkedin, name: 'LinkedIn', href: personalData.linkedin },
  ];

  return (
    <section id="contact" className="page-container bg-[#f8faf8]">
      <div className="section-container">

        {/* Centered heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <p
            className="mb-3 text-[10px] font-bold tracking-[0.22em] uppercase text-emerald-600 sm:text-xs"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Start a Conversation
          </p>
          <h2
            className="mb-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s Build a{' '}
            <span className="inline-block bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 bg-clip-text text-transparent px-1">
              Project
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 sm:text-base max-w-xl mx-auto">
            Have a role, freelance idea, or product in mind? Send the details and I&apos;ll reply with a clear next step.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5 lg:gap-8">

          {/* Left — info cards */}
          <div className="flex flex-col gap-5 lg:col-span-2">

            {/* Contact channels */}
            <div className="card card-hover border-emerald-100/60 bg-white/80 p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat contact.txt</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">UTF-8</span>
              </div>

              <div className="space-y-3">
                {contacts.map(({ icon: Icon, label, value, href }) => {
                  const Wrap = href ? 'a' : 'div';
                  const extra = href ? { href, ...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {};
                  return (
                    <Wrap
                      key={label}
                      {...extra}
                      className="flex items-center gap-3 rounded-lg border border-emerald-100/40 bg-white p-3 transition-all hover:border-emerald-200 hover:shadow-sm"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-0.5">
                          {label}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                          {value}
                        </p>
                      </div>
                    </Wrap>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="card card-hover border-emerald-100/60 bg-white/80 p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat social.conf</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">UTF-8</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 p-2.5 text-emerald-700 transition-all hover:border-emerald-300 hover:bg-emerald-100 sm:justify-start"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold font-mono">{name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card card-hover border-emerald-100/60 bg-white/80 p-5 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat status.log</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">LOG</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                <div>
                  <p className="font-extrabold text-slate-800 text-sm mb-1 font-mono">Available for Work</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Open to full-time roles, freelance projects, and internship opportunities. I respond promptly.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right — multi-step form */}
          <div className="animate-slide-up delay-200 lg:col-span-3">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
