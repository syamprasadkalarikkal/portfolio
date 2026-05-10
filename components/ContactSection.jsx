import ContactForm from '@/components/ContactForm';
import { personalData } from '@/data/personal';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      accent: 'bg-emerald-400/10 text-emerald-300 border-emerald-300/25',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
      accent: 'bg-lime-300/10 text-lime-300 border-lime-300/25',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: personalData.location,
      href: '#',
      accent: 'bg-teal-300/10 text-teal-200 border-teal-300/25',
    },
  ];

  return (
    <section id="contact" className="page-container gradient-bg">
      <div className="section-container">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label">Let's Connect</p>
          <h1 className="section-title">
            Get In <span>Touch</span>
          </h1>
          <p className="section-subtitle max-w-2xl">
            Open to opportunities, collaborations, or just a conversation about technology — reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left Panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Contact Methods */}
            <div className="space-y-3">
              {contactMethods.map((method, i) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="flex items-center gap-4 p-4 card card-hover"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${method.accent}`}>
                    <method.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-emerald-300/45 uppercase tracking-wide mb-0.5">{method.title}</p>
                    <p className="text-sm font-semibold text-white truncate">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="card p-5">
              <p className="text-xs font-bold text-emerald-300/50 uppercase tracking-[0.12em] mb-4">Social</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FiGithub, name: 'GitHub', href: personalData.github },
                  { icon: FiLinkedin, name: 'LinkedIn', href: personalData.linkedin },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-400/10 border border-emerald-300/15 text-emerald-100/75 hover:text-lime-200 hover:border-emerald-300/50 transition-all group"
                  >
                    <s.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card p-5 flex items-start gap-4">
              <div className="mt-1 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] flex-shrink-0 animate-pulse" />
              <div>
                <p className="font-bold text-white text-sm mb-1">Available for Work</p>
                <p className="text-xs text-emerald-100/50 leading-relaxed">
                  Currently open to full-time roles, freelance projects, and internship opportunities.
                  I respond promptly to all messages.
                </p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-slide-up delay-200">
            <ContactForm />
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-10 rounded-lg border border-emerald-300/15 bg-[#07100b]/90 p-6 sm:p-10 text-center animate-slide-up delay-400">
          <h3 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Let's Build Something Great Together
          </h3>
          <p className="text-emerald-100/60 max-w-xl mx-auto text-sm leading-relaxed">
            Whether it's a startup idea, a freelance project, or a full-time position — I'm always excited to explore meaningful work with driven teams and individuals.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
