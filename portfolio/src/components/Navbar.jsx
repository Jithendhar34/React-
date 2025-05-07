import './Navbar.css';


function Navbar() {
    return (
      <nav className="navbar">
        <h2>MyPortfolio</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  