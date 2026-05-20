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
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-10 lg:mx-0 lg:text-left">
          <p className="section-label">Start a Conversation</p>
          <h1 className="section-title">
            Let's Build a <span>Project</span>
          </h1>
          <p className="section-subtitle">
            Have a role, freelance idea, or product feature in mind? Send the details and I'll reply with a clear next step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-8">

          {/* Left Panel */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">

            {/* Contact Methods */}
            <div className="space-y-2.5 sm:space-y-3">
              {contactMethods.map((method, i) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="card card-hover flex items-center gap-3 p-3.5 sm:gap-4 sm:p-4"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border sm:h-10 sm:w-10 ${method.accent}`}>
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
            <div className="card p-4 sm:p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300/50 sm:mb-4">Social</p>
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
                    className="group flex items-center justify-center gap-2.5 rounded-lg border border-emerald-300/15 bg-emerald-400/10 p-3 text-emerald-100/75 transition-all hover:border-emerald-300/50 hover:text-lime-200 sm:justify-start"
                  >
                    <s.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
              <div className="mt-1 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] flex-shrink-0 animate-pulse" />
              <div>
                <p className="font-bold text-white text-sm mb-1">Available for Projects</p>
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

      </div>
    </section>
  );
};

export default ContactSection;
