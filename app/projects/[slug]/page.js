import Link from 'next/link';
import { notFound } from 'next/navigation';
import PortfolioPageIntro from '@/components/PortfolioPageIntro';
import ProjectVisual from '@/components/ProjectVisual';
import { getProjectBySlug, projectsData } from '@/data/projects';

export const generateStaticParams = () =>
  projectsData.map((project) => ({ slug: project.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return project
    ? { title: `${project.title} | Syam Prasad`, description: project.description }
    : { title: 'Project Not Found | Syam Prasad' };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article>
      <PortfolioPageIntro
        title={project.title}
        description={project.description}
        label="പ്രോജക്റ്റ്"
        backLink={<Link className="portfolio-back" href="/projects">All projects</Link>}
      />
      <div className="portfolio-shell portfolio-section project-detail">
        {project.live && <p className="project-site">Website <a href={project.live}>{project.live}</a></p>}
        {project.github && (
          <section className="project-clone" aria-label="Git clone commands">
            <code>git clone {project.github}.git</code>
            {project.relatedLink && (
              <div>
                <p>{project.relatedLink.label}</p>
                <code>git clone {project.relatedLink.href}.git</code>
              </div>
            )}
          </section>
        )}

        <ProjectVisual project={project} sizes="(min-width: 76rem) 1136px, 92vw" />

        <section className="project-overview">
          <h2>Project description</h2>
          {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        {(project.keyFeatures?.length || project.technologies?.length) ? <div className="portfolio-split project-detail-info">
          {project.keyFeatures?.length > 0 && (
            <section>
              <h2>Key features</h2>
              <ul className="project-features">
                {project.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </section>
          )}
          {project.technologies?.length > 0 && (
            <section>
              <h2>Technologies</h2>
              <ul className="project-tags">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </section>
          )}
        </div> : null}
      </div>
    </article>
  );
}
