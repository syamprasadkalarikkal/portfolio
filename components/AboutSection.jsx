import { personalData } from '@/data/personal';
import { FiTerminal } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="page-container bg-[#f8faf8]">
      <div className="section-container">

        {/* Centered Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p 
            className="mb-4 text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-600 sm:text-xs"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            // Who I Am
          </p>
          <h2 
            className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 sm:text-base max-w-2xl mx-auto">
            A developer focused on writing clean, scalable code and delivering premium digital solutions.
          </p>
        </div>

        {/* Main responsive grid: Bio & Stats in left column, Education in right column */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-stretch">

          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="card card-hover flex-1 p-5 sm:p-8 flex flex-col justify-between border-emerald-100/60 bg-white/80 backdrop-blur-sm">
              <div>
                {/* Terminal prompt header */}
                <div className="mb-5 flex items-center justify-between text-xs font-mono text-slate-450 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">syam:~$</span>
                    <span>cat bio.txt</span>
                  </div>
                  <span className="text-[10px] text-slate-350 select-none font-sans">UTF-8</span>
                </div>

                {/* Professional Short Bio */}
                <div className="space-y-4 text-slate-650 text-sm sm:text-[15px] sm:leading-relaxed font-sans">
                  <p>
                    {personalData.about.summary}
                  </p>
                  <p>
                    My technical expertise spans JavaScript, React.js, Next.js, and backend fundamentals with database
                    integration and REST API handling. I prioritize building clean, maintainable, and scalable applications while
                    ensuring they are highly performant across all devices.
                  </p>
                </div>
              </div>

              {/* Experience & Projects Stats in a Row under the Bio */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '1+ Year', label: 'Field Experience', code: 'experience.log', color: 'text-emerald-600' },
                    { value: '5+ Projects', label: 'Built & Deployed', code: 'projects.json', color: 'text-teal-600' },
                  ].map(({ value, label, code, color }) => (
                    <div key={label} className="border border-emerald-100/40 rounded-lg p-4 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 select-none pb-2 border-b border-slate-50">
                        <span className="flex items-center gap-1">
                          <FiTerminal className="w-2.5 h-2.5 text-slate-400" />
                          syam@stats:~
                        </span>
                        <span className="font-semibold text-emerald-500">{code}</span>
                      </div>
                      <div className="mt-3">
                        <div className={`text-2xl sm:text-3xl font-black tracking-tight font-mono ${color}`}>
                          {value}
                        </div>
                        <div className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider font-mono">
                          {label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 flex flex-col justify-stretch">
            <div className="card card-hover p-5 sm:p-8 flex-1 flex flex-col border-emerald-100/60 bg-white/80 backdrop-blur-sm">
              {/* Terminal prompt header */}
              <div className="mb-5 flex items-center justify-between text-xs font-mono text-slate-450 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat university.info</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none font-sans">UTF-8</span>
              </div>

              <div className="flex-1 flex flex-col justify-center py-4">
                <div className="relative pl-5 border-l-2 border-emerald-500 py-2">
                  <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg leading-snug">
                    {personalData.education.degree}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-sm mt-1.5 font-mono">
                    {personalData.education.institution}
                  </p>
                  <p className="text-slate-450 text-xs mt-1 font-mono">
                    Graduated {personalData.education.graduation}
                  </p>
                  <span className="inline-block mt-4 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-100 font-mono">
                    {personalData.education.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
