import Image from 'next/image';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import ContactForm from '@/components/ContactForm';
import MalayalamText from '@/components/MalayalamText';
import ProjectGallery from '@/components/ProjectGallery';
import { personalData } from '@/data/personal';
import { projectsData } from '@/data/projects';
import { FiCode, FiDatabase, FiLayers, FiTool } from 'react-icons/fi';

export const metadata = {
  title: 'Syam Prasad K | ERPNext Developer',
  description: 'Syam Prasad K is an ERPNext and full-stack developer in Kerala working on Frappe products and Saudi e-invoicing.',
};

const skillGroups = [
  { title: 'ERPNext & Frappe', icon: FiLayers, skills: ['Setup', 'Implementation', 'Customization', 'Custom dashboards'] },
  { title: 'Frontend', icon: FiCode, skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend & integration', icon: FiTool, skills: ['Node.js', 'Express', 'REST APIs', 'Authentication'] },
  { title: 'Data & reporting', icon: FiDatabase, skills: ['SQL', 'PostgreSQL', 'MySQL', 'Supabase'] },
];

export default function Home() {
  return (
    <>
      <Analytics />
      <div className="portfolio-entrance" aria-hidden="true"><span /></div>
      <section id="home" className="portfolio-shell hero-intro" aria-labelledby="intro-title">
        <div className="hero-copy">
          <MalayalamText className="portfolio-kicker" startDelay={780}>നമസ്കാരം</MalayalamText>
          <h1 id="intro-title">Syam Prasad <span>K.</span></h1>
        </div>
        <figure className="hero-portrait">
          <Image src={personalData.profileImage} alt="Syam Prasad K" fill preload sizes="(min-width: 48rem) 336px, 280px" />
          <MalayalamText as="figcaption" startDelay={1300}>ശ്യാം പ്രസാദ് കെ</MalayalamText>
        </figure>
        <div className="hero-details">
          <p className="hero-role">{personalData.role} <span aria-hidden="true">/</span> Kerala, India</p>
          <p className="hero-summary">I build ERPNext products and full-stack web applications. My work includes Saudi e-invoicing, print queues, and tools for everyday business.</p>
          <p className="hero-malayalam-note" lang="ml">ദിവസവും ചെയ്യുന്ന പണി കുറച്ചുകൂടി എളുപ്പമാക്കുന്ന സോഫ്റ്റ്‌വെയർ.</p>
          <div className="portfolio-actions">
            <a className="portfolio-button portfolio-button--primary" href="#projects">Explore projects</a>
            <a className="portfolio-button" href="/syamprasad_cv.pdf">View résumé</a>
          </div>
        </div>
      </section>

      <section id="about" className="portfolio-shell portfolio-section portfolio-split" aria-labelledby="about-title">
        <div className="portfolio-section-heading">
          <MalayalamText className="portfolio-kicker">എന്നെക്കുറിച്ച്</MalayalamText>
          <h2 id="about-title">About me<span>.</span></h2>
          <p className="about-lead">ERPNext and full-stack developer based in Malappuram, Kerala.</p>
        </div>
        <div className="portfolio-prose">
          <p>I’ve built <strong>5+ ERPNext products</strong> and worked on real web and desktop projects, from mapping workflows and developing features to testing them and deploying client websites. My ERPNext work includes implementation, workflow customization, and reporting.</p>
          <p>My web and desktop work includes the Kalika storefront, the PrintQ web app and Windows agent, a Doctor Appointment System, and a Collaborative Online Compiler. I also built and deployed the CorpLearn and Outright Global websites.</p>
          <p className="about-malayalam" lang="ml">മലപ്പുറമാണ് നാട്. ഒരു കടയിലായാലും ഓഫീസിലായാലും, ദിവസവും ഒരേ പണി രണ്ടുവട്ടം ചെയ്യേണ്ടിവരുന്നിടത്താണ് ഞാൻ ആദ്യം ശ്രദ്ധിക്കുന്നത്. ആ പണി കുറയ്ക്കുന്നൊരു സംവിധാനം ഉണ്ടാക്കുന്നതിലാണ് എനിക്ക് സന്തോഷം.</p>
          <div className="portfolio-actions">
            <a className="project-text-link" href="#projects">Explore my projects</a>
            <Link className="project-text-link" href="/erpnext">Read my ERPNext guide</Link>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section" aria-labelledby="skills-title">
        <div className="portfolio-shell portfolio-section">
          <div className="portfolio-section-heading">
            <MalayalamText className="portfolio-kicker">എന്റെ കഴിവുകൾ</MalayalamText>
            <h2 id="skills-title">Skills<span>.</span></h2>
          </div>
          <div className="skill-panel-grid">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <section className="skill-panel" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-work" aria-labelledby="work-title">
        <div className="portfolio-shell portfolio-section">
          <div className="portfolio-section-heading">
            <MalayalamText className="portfolio-kicker">എന്റെ പ്രോജക്റ്റുകൾ</MalayalamText>
            <h2 id="work-title">Selected work<span>.</span></h2>
          </div>
          <ProjectGallery projects={projectsData} preview />
        </div>
      </section>

      <section id="contact" className="portfolio-contact" aria-labelledby="contact-title">
        <div className="portfolio-shell portfolio-section portfolio-split">
          <div className="portfolio-section-heading">
            <MalayalamText className="portfolio-kicker">ബന്ധപ്പെടാം</MalayalamText>
            <h2 id="contact-title">Let’s talk<span>.</span></h2>
          </div>
          <div className="portfolio-prose">
            <p>Have a project or job opportunity in mind? Tell me a little about it.</p>
            <details className="contact-card">
              <summary>Open contact form</summary>
              <div className="contact-card-content"><ContactForm /></div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
