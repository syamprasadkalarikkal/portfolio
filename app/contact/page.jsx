import ContactForm from '@/components/ContactForm';
import { personalData } from '@/data/personal';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiMessageSquare } from 'react-icons/fi';

export const metadata = {
  title: 'Contact - Syam Prasak K',
  description: 'Get in touch with me for job opportunities, collaborations, or just to say hello.',
};

export default function Contact() {
  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      color: 'text-primary-500',
      bgColor: 'bg-primary-50 dark:bg-primary-900/20',
      borderColor: 'border-primary-200 dark:border-primary-800',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
      color: 'text-accent-500',
      bgColor: 'bg-accent-50 dark:bg-accent-900/20',
      borderColor: 'border-accent-200 dark:border-accent-800',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: personalData.location,
      href: '#',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      href: personalData.github,
      color: 'hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900',
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      href: personalData.linkedin,
      color: 'hover:bg-blue-600 hover:text-white',
    },
  ];

  return (
    <div className="page-container gradient-bg">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just a friendly chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col h-full space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4 animate-slide-up">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.href}
                  className={`block p-6 rounded-xl border ${method.bgColor} ${method.borderColor} 
                           hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${method.bgColor} ${method.color} group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="card p-6 animate-slide-up delay-300">
              <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FiMessageSquare className="mr-2 text-primary-500" />
                Connect on Social Media
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 p-4 rounded-lg bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-dark-700
                             transition-all duration-200 hover:scale-105 hover-glow group ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-medium text-center mt-2">{social.name}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Notice */}
            <div className="card p-6 animate-slide-up delay-400 flex-grow">
              <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                I am available for new projects and opportunities.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Available 24 Hours
                </span>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800 animate-slide-up delay-500">
              <p className="text-sm text-primary-700 dark:text-primary-300">
                <strong>Response Time:</strong> I'm always online and typically respond immediately or within a few hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up delay-200 h-full">
            <ContactForm />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-900/20 dark:via-dark-900 dark:to-accent-900/20 rounded-2xl border border-primary-200 dark:border-primary-800 text-center animate-slide-up delay-500">
          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something Great Together
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a project in mind, a job opportunity, or just want to connect,
            I'm always excited to hear from fellow developers and potential collaborators.
          </p>
        </div>
      </div>
    </div>
  );
}