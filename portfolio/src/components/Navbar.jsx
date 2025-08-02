import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2><span className="brand-name">MyPortfolio</span></h2>
      <div className="nav-links">
        <a href="#home" className="nav-btn">Home</a>
        <a href="#projects" className="nav-btn">Projects</a>
        <a href="#skills" className="nav-btn">Skills</a>
        <a href="#experience" className="nav-btn">Experience</a> {/* New */}
        <a href="#certifications" className="nav-btn">Certifications</a> {/* New */}
        <a href="#education" className="nav-btn">Education</a>
        <a href="#contact" className="nav-btn">Contact</a>
        <a href="/Resume-K_Jithendhar_reddy.pdf" className="nav-btn resume" download>
          Resume
        </a>
      </div>
    </nav>
  );
}
//first 
//second
//third
//fourth

export default Navbar;

