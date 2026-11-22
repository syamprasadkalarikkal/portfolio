import Link from 'next/link';
import PortfolioPageIntro from '@/components/PortfolioPageIntro';
import ProjectGallery from '@/components/ProjectGallery';
import { projectsData } from '@/data/projects';

export const metadata = { title: 'All Projects | Syam Prasad K' };

export default function ProjectsPage() {
  return (
    <>
      <PortfolioPageIntro
        title="All projects"
        label="എന്റെ പ്രോജക്റ്റുകൾ"
        backLink={<Link href="/#projects" className="portfolio-back">Back to selected work</Link>}
      />
      <section className="portfolio-shell portfolio-section" aria-label="Project gallery">
        <ProjectGallery projects={projectsData} />
      </section>
    </>
  );
}
