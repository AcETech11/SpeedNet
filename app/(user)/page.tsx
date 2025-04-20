import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServiceSection from '@/components/ServiceSection'
import ProjectSection from '@/components/ProjectSection'
import WorkProcess from '@/components/WorkProcess'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero/>
      <AboutSection/>
      <ServiceSection/>
      <ProjectSection/>
      <WorkProcess/>
      <Testimonial/>
    </div>
  );
}
