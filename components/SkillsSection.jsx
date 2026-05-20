import { skillsData } from '@/data/skills';
import SkillCard from '@/components/SkillCard';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-8 sm:py-14 lg:py-16 gradient-bg">
      <div className="section-container">

        {/* Header */}
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-10">
          <p className="section-label">What I Work With</p>
          <h1 className="section-title">
            Technical <span>Skills</span>
          </h1>
          <p className="section-subtitle">
            A snapshot of my technical toolkit — from frontend interfaces to backend systems and developer tooling.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-5 sm:space-y-8">
          {skillsData.categories.map((category, catIdx) => (
            <div
              key={category.title}
              className="rounded-lg border border-emerald-300/15 bg-[#07100b]/70 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.18)] animate-slide-up sm:p-5"
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <h2 className="text-base font-extrabold text-white sm:text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                  {category.title}
                </h2>
                <div className="ml-1 h-px flex-1 bg-emerald-300/15" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillCard key={skill.name} skill={skill} index={skillIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="mt-5 rounded-lg border border-emerald-300/15 bg-[#07100b]/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] animate-slide-up delay-400 sm:mt-8 sm:p-6">
          <h2 className="mb-3 text-base font-extrabold text-white sm:mb-5 sm:text-xl" style={{ fontFamily: 'var(--font-display)' }}>
            Additional Competencies
          </h2>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {skillsData.additional.map((skill, i) => (
              <span
                key={i}
                className="rounded-lg border border-emerald-300/15 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-100/70 transition-all hover:border-emerald-300/50 hover:text-lime-200 sm:px-3 sm:py-1.5 sm:text-sm"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
