import { skillsData } from '@/data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-[#f8faf8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p
            className="mb-4 text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-600 sm:text-xs"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Tech Stack
          </p>
          <h2
            className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
            Frontend, backend, and deployment—designed to stay maintainable.
            <br className="hidden sm:block" />
            Every line of code is written with scalability and performance in mind.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 sm:gap-6 md:gap-6">
          {skillsData.categories.map((category) => (
            <div key={category.title}>
              {/* Category Label */}
              <p
                className="mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 sm:text-[11px]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {category.title}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-md sm:text-xs"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-12 flex items-center gap-4 sm:mt-16">
          <div className="h-px flex-1 bg-emerald-100" />
          <span
            className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-300"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            always learning
          </span>
          <div className="h-px flex-1 bg-emerald-100" />
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
