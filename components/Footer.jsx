import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { personalData } from '@/data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      href: personalData.github,
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: personalData.linkedin,
    },
    {
      name: 'Email',
      icon: FiMail,
      href: `mailto:${personalData.email}`,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-display text-2xl font-bold gradient-text mb-4">
              syam.dev
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer passionate about building modern web applications 
              and creating great user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-200 dark:bg-dark-800 
                           hover:bg-primary-500 dark:hover:bg-primary-600 
                           hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 
                             dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <FiMail className="w-5 h-5 text-primary-500" />
                <a
                  href={`mailto:${personalData.email}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {personalData.email}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <FiPhone className="w-5 h-5 text-primary-500" />
                <span>{personalData.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <FiMapPin className="w-5 h-5 text-primary-500" />
                <span>{personalData.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;