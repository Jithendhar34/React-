import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications'; // <-- Import Certifications
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Skills />
      <Certifications /> {/* <-- Add Certifications Component */}
      <Education />
      <Contact />
    </>
  );
}

export default App;
