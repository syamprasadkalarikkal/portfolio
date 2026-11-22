'use client';

import Link from 'next/link';

export default function Error({ reset }) {
  return (
    <section className="page-intro" aria-labelledby="error-title">
      <div className="portfolio-shell portfolio-section">
        <h1 id="error-title">Something went wrong</h1>
        <p className="project-detail-summary">Try again or return to the portfolio homepage.</p>
        <div className="portfolio-actions">
          <button type="button" onClick={reset} className="portfolio-button portfolio-button--primary">Try again</button>
          <Link href="/" className="portfolio-button">Home</Link>
        </div>
      </div>
    </section>
  );
}
