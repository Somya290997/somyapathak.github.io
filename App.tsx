import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import SkillsEducation from './SkillsEducation';
import Contact from './Contacts';

function App() {
  return (
    <>
      <main className="pt-20 scroll-smooth">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><SkillsEducation /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;
