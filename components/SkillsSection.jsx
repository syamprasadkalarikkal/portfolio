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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-6">
          {skillsData.categories.map((category) => {
            const fileName = `${category.title.toLowerCase().replace(/\s+&\s+/g, '_').replace(/\s+/g, '_')}.json`;
            return (
              <div 
                key={category.title} 
                className="card card-hover p-4 sm:p-5 border border-emerald-100/60 bg-white/80 backdrop-blur-sm rounded-lg flex flex-col justify-between"
              >
                <div>
                  {/* Terminal prompt header */}
                  <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-450 border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-emerald-600 font-bold">syam:~$</span>
                      <span className="truncate">cat {fileName}</span>
                    </div>
                    <span className="text-[9px] text-slate-350 select-none font-sans uppercase">JSON</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.06em] text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-md"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
