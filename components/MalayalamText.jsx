'use client';

import { useEffect, useRef, useState } from 'react';

export default function MalayalamText({ as: Tag = 'p', className, children, startDelay }) {
  const textRef = useRef(null);
  const [typed, setTyped] = useState(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !Intl.Segmenter) return;

    const text = textRef.current;
    const letters = Array.from(
      new Intl.Segmenter('ml', { granularity: 'grapheme' }).segment(children),
      ({ segment }) => segment,
    );
    const interval = Math.min(65, 1800 / letters.length);
    let frame;
    let observer;
    let startedAt;

    const type = (now) => {
      startedAt ??= now;
      const count = Math.floor((now - startedAt - (startDelay ?? 0)) / interval);
      if (count >= letters.length || motion.matches) {
        setTyped(null);
        return;
      }
      setTyped(letters.slice(0, Math.max(0, count)).join(''));
      frame = requestAnimationFrame(type);
    };

    if (startDelay !== undefined) {
      frame = requestAnimationFrame(type);
    } else if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        frame = requestAnimationFrame(type);
      }, { threshold: 0.2 });
      observer.observe(text);
    }

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [children, startDelay]);

  return (
    <Tag ref={textRef} className={className} lang="ml" data-malayalam-text>
      <span className={typed === null ? undefined : 'malayalam-text-reserve'}>{children}</span>
      {typed !== null && (
        <span aria-hidden="true" className="malayalam-text-typed">
          {typed}<span className="malayalam-caret" />
        </span>
      )}
    </Tag>
  );
}
