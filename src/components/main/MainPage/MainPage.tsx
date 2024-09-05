import cl from './MainPage.module.scss';
import { FirstSection } from '../sections/FirstSection/FirstSection';
import SkillsSection from '../sections/SkillsSection/SkillsSection';
import { MyExperience } from '../sections/MyExperience/MyExperience';
import { AboutMe } from '../sections/AboutMe/AboutMe';
import { MyProjects } from '../sections/MyProjects/MyProjects/MyProjects';
import { MyTestimonial } from '../sections/MyTestimonial/MyTestimonial/MyTestimonial';
import { ContactForm } from '../sections/ContactForm/ContactForm';
import { Footer } from '@/components/Footer/Footer';

const MainPage = () => {
  return (
    <main className={cl.main}>
      <FirstSection />
      <SkillsSection />
      <MyExperience />
      <AboutMe />
      <MyProjects />
      <MyTestimonial />
      <ContactForm />
      <Footer />
    </main>
  );
};

export { MainPage };