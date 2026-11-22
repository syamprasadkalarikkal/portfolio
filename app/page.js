import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import ContactForm from '@/components/ContactForm';
import MalayalamText from '@/components/MalayalamText';
import ProjectGallery from '@/components/ProjectGallery';
import { personalData } from '@/data/personal';
import { projectsData } from '@/data/projects';

export const metadata = {
  title: 'Syam Prasad K | ERPNext Developer',
  description: 'Syam Prasad K is an ERPNext and full-stack developer in Kerala working on Frappe products and Saudi e-invoicing.',
};

const skillGroups = [
  { title: 'ERPNext & Frappe', skills: ['Setup', 'Implementation', 'Customization', 'Custom dashboards'] },
  { title: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend & integration', skills: ['Node.js', 'Express', 'REST APIs', 'Authentication'] },
  { title: 'Data & reporting', skills: ['SQL', 'PostgreSQL', 'MySQL', 'Supabase'] },
];

export default function Home() {
  return (
    <>
      <Analytics />
      <section id="home" className="hero-stage" aria-labelledby="intro-title">
        <div className="portfolio-shell hero-intro">
          <div className="hero-copy">
            <p className="hero-greeting" lang="ml">നമസ്കാരം</p>
            <p className="hero-malayalam-name" lang="ml">{personalData.malayalamName}</p>
            <h1 id="intro-title">
              I build software <span>that makes</span> <em>work easier.</em>
            </h1>
          </div>
          <div className="hero-details">
            <div>
              <p className="hero-role">{personalData.role} · Malappuram, Kerala</p>
              <p className="hero-summary">ERPNext implementations, web applications, and desktop tools.</p>
              <a className="hero-availability" href="#contact">Available for work</a>
            </div>
            <div className="portfolio-actions">
              <a className="portfolio-button portfolio-button--primary" href="#projects">Explore projects</a>
              <a className="portfolio-button" href="/syamprasad_cv.pdf">View résumé</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="portfolio-shell portfolio-section portfolio-split" aria-labelledby="about-title">
        <div className="portfolio-section-heading">
          <MalayalamText className="portfolio-kicker">എന്നെക്കുറിച്ച്</MalayalamText>
          <h2 id="about-title">About me<span>.</span></h2>
        </div>
        <div className="portfolio-prose">
          <p>I’ve built <strong>5+ ERPNext products</strong>. My work covers implementation, workflow customization, and reporting.</p>
          <p>My full-stack projects include the Kalika storefront, the PrintQ web app and Windows agent, and client websites for CorpLearn and Outright Global.</p>
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
            {skillGroups.map(({ title, skills }) => (
              <section className="skill-panel" key={title}>
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
        <div className="portfolio-shell portfolio-section contact-inner">
          <p className="contact-kicker" lang="ml">ബന്ധപ്പെടാം</p>
          <h2 id="contact-title">Let’s talk<span>.</span></h2>
          <p className="contact-intro">Have a project or job opportunity in mind?</p>
          <a className="contact-email" href={`mailto:${personalData.email}`}>{personalData.email}</a>
          <details className="contact-card">
            <summary>Open contact form</summary>
            <div className="contact-card-content"><ContactForm /></div>
          </details>
        </div>
      </section>
    </>
  );
}
