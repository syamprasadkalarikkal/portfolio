'use client';

export default function GuideNavigation({ topics }) {
  return (
    <div className="guide-contents">
      <nav className="guide-topic-list" aria-label="Guide topics">
        {topics.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
      </nav>
      <select
        className="guide-topic-select"
        aria-label="Guide topics"
        defaultValue=""
        onChange={(event) => { window.location.hash = event.currentTarget.value; }}
      >
        <option value="" disabled>Guide topics</option>
        {topics.map(({ id, title }) => <option key={id} value={id}>{title}</option>)}
      </select>
    </div>
  );
}
