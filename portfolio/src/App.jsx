import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      {/* Skills, Education, Contact will come next */}
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

export default App;
