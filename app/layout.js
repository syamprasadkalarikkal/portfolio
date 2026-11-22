import './globals.css';
import './portfolio.css';
import Script from 'next/script';
import Link from 'next/link';
import { FiMail, FiPhone, FiUserPlus } from 'react-icons/fi';
import SiteNavigation from '@/components/SiteNavigation';
import { personalData } from '@/data/personal';


export const metadata = {
  title: 'Syam Prasad K | ERPNext & Full-Stack Developer',
  description: 'Syam Prasad is an ERPNext and full-stack developer in Kerala.',
  keywords: 'Syam Prasad, ERPNext developer, Frappe, Saudi e-invoicing, full-stack developer, Next.js',
  authors: [{ name: 'Syam Prasad' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Syam Prasad Portfolio',
    description: 'ERPNext products, Saudi e-invoicing, and full-stack web applications.',
    type: 'website',
    url: 'https://syamprasad.xyz',
    images: [
      {
        url: 'https://syamprasad.xyz/syam.png',
        width: 960,
        height: 1088,
        alt: 'Syam Prasad Portfolio Preview',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Syam Prasad',
              url: 'https://syamprasad.xyz',
              jobTitle: 'ERPNext & Full-Stack Developer',
              sameAs: [
                'https://www.linkedin.com/in/syam-prasad-568849375',
                'https://github.com/syamprasadkalarikkal'
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="portfolio-skip">Skip to content</a>
        <header className="portfolio-header">
          <div className="portfolio-shell masthead">
            <Link href="/" className="portfolio-brand">syam<span>.</span></Link>
            <SiteNavigation />
          </div>
        </header>
        <main id="main-content" className="min-h-screen">{children}</main>
        <nav className="contact-dock" aria-label="Quick contact">
          <a className="contact-dock-phone" href={`tel:${personalData.phone.replace(/\s/g, '')}`}><FiPhone aria-hidden="true" /> <span className="contact-dock-number">{personalData.phone}</span></a>
          <a href={`mailto:${personalData.email}`} title="Email"><FiMail aria-hidden="true" /> <span className="sr-only">Email</span></a>
          <a className="contact-dock-referral" href={`mailto:${personalData.email}?subject=Referral%20for%20Syam%20Prasad`} title="Send a referral"><FiUserPlus aria-hidden="true" /> <span className="sr-only">Send a referral</span></a>
        </nav>
        <footer className="portfolio-footer">
          <div className="portfolio-shell masthead">
            <p>© {new Date().getFullYear()} {personalData.name}</p>
            <nav aria-label="Social links">
              <a href={personalData.github}>GitHub</a>
              <a href={personalData.linkedin}>LinkedIn</a>
              <a href={`mailto:${personalData.email}`}>Email</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
