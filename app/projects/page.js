import Link from 'next/link';
import MalayalamText from '@/components/MalayalamText';
import ProjectGallery from '@/components/ProjectGallery';
import { projectsData } from '@/data/projects';

export const metadata = { title: 'All Projects | Syam Prasad K' };

export default function ProjectsPage() {
  return (
    <section className="portfolio-shell portfolio-section">
      <Link href="/#projects" className="portfolio-back">Back to home</Link>
      <div className="portfolio-section-heading">
        <MalayalamText className="portfolio-kicker">എന്റെ പ്രോജക്റ്റുകൾ</MalayalamText>
        <h1 className="gallery-title">All projects<span>.</span></h1>
      </div>
      <ProjectGallery projects={projectsData} />
    </section>
  );
}
