'use client';

import { useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function GuideNavigation({ topics }) {
  const menu = useRef(null);

  return (
    <div className="guide-contents">
      <nav className="guide-topic-list" aria-label="Guide topics">
        {topics.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
      </nav>
      <details className="guide-topic-menu" ref={menu}>
        <summary>Guide topics <FiChevronDown aria-hidden="true" /></summary>
        <nav aria-label="Guide topics">
          {topics.map(({ id, title }) => (
            <a key={id} href={`#${id}`} onClick={() => { menu.current.open = false; }}>{title}</a>
          ))}
        </nav>
      </details>
    </div>
  );
}
