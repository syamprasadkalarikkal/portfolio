import { personalData } from '@/data/personal';
import { FiTerminal, FiCode, FiDatabase, FiCloud } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="page-container bg-[#f8faf8]">
      <div className="section-container">

        {/* Centered Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <p 
            className="mb-3 text-[10px] font-bold tracking-[0.22em] uppercase text-emerald-600 sm:text-xs"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Who I Am
          </p>
          <h2 
            className="mb-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 bg-clip-text text-transparent px-1 inline-block">Me</span>
          </h2>
          <p className="text-xs leading-relaxed text-slate-500 sm:text-base max-w-2xl mx-auto px-2">
            A developer focused on writing clean, scalable code and delivering premium digital solutions.
          </p>
        </div>

        {/* Main responsive grid: Bio & Stats in left column, Education & Core Skills in right column */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">

          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className="card card-hover p-5 sm:p-6 lg:p-8 flex flex-col border-emerald-100/60 bg-white/80 backdrop-blur-sm">
              {/* Terminal prompt header */}
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-455 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat bio.txt</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">UTF-8</span>
              </div>

              {/* Professional Short Bio */}
              <div className="space-y-3.5 text-slate-650 text-sm sm:text-[15px] sm:leading-relaxed font-sans">
                <p className="font-medium text-slate-700">
                  {personalData.about.summary}
                </p>
                <p>
                  Focused on React.js, Next.js, and Node.js to craft seamless, responsive user experiences backed by robust, well-designed backend APIs.
                </p>
              </div>
            </div>

            {/* Metrics Dashboard Card */}
            <div className="card card-hover p-5 sm:p-6 lg:p-8 flex flex-col border-emerald-100/60 bg-white/80 backdrop-blur-sm">
              {/* Terminal prompt header */}
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-455 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat metrics.json</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">JSON</span>
              </div>

              {/* Experience & Projects Stats in a Row */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1+ Year', label: 'Field Experience', code: 'experience.log', color: 'text-emerald-600' },
                  { value: '5+ Projects', label: 'Built & Deployed', code: 'projects.json', color: 'text-teal-600' },
                ].map(({ value, label, code, color }) => (
                  <div key={label} className="border border-emerald-100/40 rounded-lg p-3.5 sm:p-4 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400 select-none pb-1.5 border-b border-slate-50">
                      <span className="flex items-center gap-1">
                        <FiTerminal className="w-2.5 h-2.5 text-slate-400" />
                        syam@stats
                      </span>
                      <span className="font-semibold text-emerald-500">{code}</span>
                    </div>
                    <div className="mt-3">
                      <div className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight font-mono ${color}`}>
                        {value}
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider font-mono">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education & Core Skills */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="card card-hover p-5 sm:p-6 flex flex-col border-emerald-100/60 bg-white/80 backdrop-blur-sm">
              {/* Terminal prompt header */}
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-455 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat university.info</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">UTF-8</span>
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-500 py-1">
                <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-emerald-500 border-2 border-white" />
                <h3 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug">
                  {personalData.education.degree}
                </h3>
                <p className="text-emerald-600 font-semibold text-xs mt-1 font-mono">
                  {personalData.education.institution}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-slate-50">
                  <span className="text-slate-450 text-[10px] sm:text-[11px] font-mono">
                    Graduated {personalData.education.graduation}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[9px] sm:text-[10px] font-bold border border-emerald-100 font-mono">
                    {personalData.education.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Core Skills Card */}
            <div className="card card-hover p-5 sm:p-6 flex-1 flex flex-col border-emerald-100/60 bg-white/80 backdrop-blur-sm justify-between">
              {/* Terminal prompt header */}
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-455 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat core_skills.json</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">UTF-8</span>
              </div>

              {/* Skill items styled dynamically */}
              <div className="space-y-3 my-auto">
                {[
                  {
                    icon: FiCode,
                    title: 'Frontend',
                    details: 'React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Responsive Design',
                    color: 'text-emerald-600',
                    border: 'border-emerald-100/50 hover:border-emerald-300',
                    bg: 'bg-emerald-50/20',
                  },
                  {
                    icon: FiDatabase,
                    title: 'Backend & Databases',
                    details: 'Node.js, Express.js, REST API Dev, JWT Auth, SSR, SQL, PostgreSQL, MySQL, Supabase, Firebase',
                    color: 'text-teal-600',
                    border: 'border-teal-100/50 hover:border-teal-300',
                    bg: 'bg-teal-50/20',
                  },
                  {
                    icon: FiCloud,
                    title: 'DevOps & Tools',
                    details: 'Git, GitHub, Version Control, Postman API Testing & Documentation',
                    color: 'text-sky-600',
                    border: 'border-sky-100/50 hover:border-sky-300',
                    bg: 'bg-sky-50/20',
                  },
                ].map(({ icon: Icon, title, details, color, border, bg }) => (
                  <div key={title} className={`group/item flex items-start gap-3 p-2.5 sm:p-3 rounded-lg border ${border} ${bg} transition-all duration-300 hover:shadow-sm`}>
                    <div className={`p-1.5 sm:p-2 rounded-md bg-white border border-slate-100 ${color} shadow-sm transition-transform duration-300 group-hover/item:scale-105`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[10px] sm:text-xs font-black text-slate-800 font-mono tracking-tight uppercase">{title}</h4>
                      <p className="mt-0.5 text-[10px] sm:text-[11px] leading-relaxed text-slate-500 font-sans">{details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
