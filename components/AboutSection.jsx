import { personalData } from '@/data/personal';
import { FiMapPin, FiMail, FiUser, FiBookOpen, FiTarget, FiLayers } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="page-container gradient-bg">
      <div className="section-container">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label">Who I Am</p>
          <h1 className="section-title">
            About <span>Me</span>
          </h1>
          <p className="section-subtitle max-w-2xl">
            A dedicated developer who thrives at the intersection of clean code and thoughtful design.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Bio — wide card */}
          <div className="lg:col-span-7">
            <div className="card card-hover p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-300/15 flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-emerald-300" />
                </div>
                <h2 className="text-xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Profile
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-emerald-100/65 leading-relaxed text-[15px]">
                  {personalData.about.summary}
                </p>
                <p className="text-emerald-100/65 leading-relaxed text-[15px]">
                  My technical expertise spans JavaScript, React.js, Next.js, and backend fundamentals with database
                  integration and REST API handling. I prioritise writing clean, maintainable, and scalable code while
                  ensuring every application is responsive and performant across all devices.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FiTarget, title: 'Product Mindset', text: 'I focus on useful features, clear user flows, and dependable delivery.' },
                  { icon: FiLayers, title: 'Full-Stack Range', text: 'Comfortable connecting polished interfaces with APIs and databases.' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-lg border border-emerald-300/15 bg-black/25 p-4">
                    <Icon className="mb-3 h-5 w-5 text-lime-300" />
                    <h3 className="text-sm font-bold text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-emerald-100/50">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-emerald-300/15">
                {[
                  { icon: FiUser, label: 'Name', value: personalData.name },
                  { icon: FiMapPin, label: 'Location', value: personalData.location },
                  { icon: FiMail, label: 'Email', value: personalData.email },
                  { icon: FiBookOpen, label: 'Role', value: personalData.role },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-md bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-emerald-300/70" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300/45 font-medium mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-white break-words">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Education */}
            <div className="card card-hover p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-lime-300/10 border border-lime-300/20 flex items-center justify-center">
                  <FiBookOpen className="w-5 h-5 text-lime-300" />
                </div>
                <h2 className="text-xl font-extrabold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Education
                </h2>
              </div>
              <div className="relative pl-4 border-l-2 border-emerald-300/30">
                <h3 className="font-bold text-white text-[15px] leading-snug">
                  {personalData.education.degree}
                </h3>
                <p className="text-emerald-300 font-semibold text-sm mt-1">
                  {personalData.education.institution}
                </p>
                <p className="text-emerald-100/45 text-sm mt-1">
                  Graduating {personalData.education.graduation}
                </p>
                <span className="inline-block mt-3 px-3 py-1 bg-emerald-400/10 text-lime-200 rounded-full text-xs font-semibold border border-emerald-300/25">
                  {personalData.education.status}
                </span>
              </div>
            </div>

            {/* Interests */}
            <div className="card card-hover p-6 sm:p-7 flex-1">
              <h2 className="text-xl font-extrabold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {personalData.about.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-emerald-400/10 text-emerald-100/75 border border-emerald-300/15 hover:border-emerald-300/50 hover:text-lime-200 transition-all cursor-default"
                  >
                    {interest}
                  </span>
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
