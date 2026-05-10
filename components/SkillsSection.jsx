import { skillsData } from '@/data/skills';
import SkillCard from '@/components/SkillCard';

const SkillsSection = () => {
  return (
    <section id="skills" className="page-container gradient-bg">
      <div className="section-container">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label">What I Work With</p>
          <h1 className="section-title">
            Technical <span>Skills</span>
          </h1>
          <p className="section-subtitle max-w-2xl">
            A snapshot of my technical toolkit — from frontend interfaces to backend systems and developer tooling.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {skillsData.categories.map((category, catIdx) => (
            <div
              key={category.title}
              className="animate-slide-up"
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {category.title}
                </h2>
                <div className="flex-1 h-px bg-emerald-300/15 ml-2" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillCard key={skill.name} skill={skill} index={skillIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="mt-10 card p-6 sm:p-8 animate-slide-up delay-400">
          <h2 className="text-xl font-extrabold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            Additional Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillsData.additional.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-emerald-400/10 text-emerald-100/70 border border-emerald-300/15 hover:border-emerald-300/50 hover:text-lime-200 transition-all cursor-default"
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
