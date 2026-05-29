'use client';

import { useEffect } from 'react';
import { FiRefreshCw, FiHome } from 'react-icons/fi';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <section className="page-container min-h-[70vh] bg-[#f8faf8]">
      <div className="section-container flex min-h-[58vh] items-center justify-center">
        <div className="card max-w-xl border-emerald-100/70 bg-white/90 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8">
          <p
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-600 sm:text-xs"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Runtime Error
          </p>
          <h1 className="mb-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Something went wrong
          </h1>
          <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
            The page hit an unexpected issue. Try again, or return home and continue browsing.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={reset} className="btn btn-primary">
              <FiRefreshCw className="h-4 w-4" />
              Try again
            </button>
            <a href="/" className="btn btn-secondary">
              <FiHome className="h-4 w-4" />
              Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
