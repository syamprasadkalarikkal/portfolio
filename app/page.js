import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Syam Prasad K - Full Stack Developer',
  description: 'Portfolio of Syam Prasad K, a Junior Software Developer passionate about creating modern web applications.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}