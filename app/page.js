import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Syam Prasad K - Full Stack Developer',
  description: 'Portfolio of Syam Prasad K, a Junior Software Developer passionate about creating modern web applications.',
};

export default function Home() {
  return (
    <>
      <Analytics />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}