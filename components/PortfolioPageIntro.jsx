export default function PortfolioPageIntro({ title, description, label, backLink, children }) {
  return (
    <header className="page-intro">
      <div className="portfolio-shell portfolio-section">
        {backLink}
        <div className={children ? 'page-intro-content page-intro-content--split' : 'page-intro-content'}>
          <div>
            {label && <p className="portfolio-kicker" lang="ml">{label}</p>}
            <h1>{title}</h1>
            {description && <p className="project-detail-summary">{description}</p>}
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}
