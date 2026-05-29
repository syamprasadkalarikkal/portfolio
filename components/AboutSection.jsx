import { personalData } from '@/data/personal';
import { FiUser, FiBookOpen, FiTarget, FiLayers, FiTerminal, FiCpu } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="page-container bg-[#f8faf8]">
      <div className="section-container">

        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 lg:mx-0 lg:text-left">
          <p className="section-label">Who I Am</p>
          <h1 className="section-title">
            About <span>Me</span>
          </h1>
          <p className="section-subtitle max-w-2xl">
            A developer focused on writing clean, scalable code and delivering premium digital solutions.
          </p>
        </div>

        {/* Telemetry/Stats Grid - Coder Theme */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8 sm:mb-10">
          {[
            { value: '1+ Year', label: 'Field Experience', code: 'experience.log', color: 'text-emerald-600' },
            { value: '5+ Projects', label: 'Built & Deployed', code: 'projects.json', color: 'text-teal-600' },
            { value: '100%', label: 'Clean Code Focus', code: 'code_quality.sh', color: 'text-lime-600' },
          ].map(({ value, label, code, color }) => (
            <div key={label} className="card card-hover p-5 flex flex-col justify-between border-emerald-100/60 bg-white/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 select-none pb-2 border-b border-slate-50">
                <span className="flex items-center gap-1">
                  <FiTerminal className="w-3 h-3 text-slate-400" />
                  syam@stats:~
                </span>
                <span className="font-semibold text-emerald-500">{code}</span>
              </div>
              <div className="mt-4">
                <div className={`text-3xl sm:text-4xl font-black tracking-tight font-mono ${color}`}>
                  {value}
                </div>
                <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide font-mono">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-stretch">

          {/* Bio — wide card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="card card-hover flex-1 p-5 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Terminal prompt header */}
                <div className="mb-5 flex items-center justify-between text-xs font-mono text-slate-450 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">syam:~$</span>
                    <span>cat bio.txt</span>
                  </div>
                  <span className="text-[10px] text-slate-350 select-none">UTF-8</span>
                </div>

                <div className="space-y-4 text-slate-650 text-sm sm:text-[15px] sm:leading-relaxed font-sans">
                  <p>
                    {personalData.about.summary}
                  </p>
                  <p>
                    My technical expertise spans JavaScript, React.js, Next.js, and backend fundamentals with database
                    integration and REST API handling. I prioritise writing clean, maintainable, and scalable code while
                    ensuring every application is responsive and performant across all devices.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 border-t border-slate-100 pt-6">
                {[
                  { icon: FiTarget, title: 'Product Mindset', text: 'I focus on useful features, clear user flows, and dependable delivery.' },
                  { icon: FiLayers, title: 'Full-Stack Range', text: 'Comfortable connecting polished interfaces with APIs and databases.' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-lg border border-emerald-100 bg-slate-50/50 p-4">
                    <Icon className="mb-2 h-5 w-5 text-emerald-600 sm:mb-3" />
                    <h3 className="text-sm font-bold text-slate-800 font-mono">{title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-stretch">

            {/* Education Card */}
            <div className="card card-hover p-5 sm:p-8 flex-1 flex flex-col">
              {/* Terminal prompt header */}
              <div className="mb-5 flex items-center justify-between text-xs font-mono text-slate-450 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">syam:~$</span>
                  <span>cat university.info</span>
                </div>
                <span className="text-[10px] text-slate-350 select-none">UTF-8</span>
              </div>

              <div className="flex-1 flex flex-col justify-center">
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
