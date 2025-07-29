import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section fade-in">
      <h2 className="section-title"><u>My Projects</u></h2>
      <p className="section-subtitle">Explore my creative and technical work</p>

      <div className="filter-buttons">
        <button className="filter-btn">Technical</button>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <h3>
            <a 
              href="https://the-mavericks-assistant.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              The Mavericks Assistant
            </a>
          </h3>
          <p>
            Developed a healthy chatbot using IBM Watson Assistant and integrated into a responsive webpage.
          </p>
        </div>

        <div className="project-card">
          <h3>
            <a 
              href="https://github.com/yourusername/product-management-app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Product Management Application (Backend Project)
            </a>
          </h3>
          <p>
            CRUD Operations using Node.js, Express, and MongoDB.
          </p>
        </div>

        <div className="project-card">
          <h3>
            <a 
              href="https://reliable-bombolone-dedf05.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              E-Commerce Frontend Website
            </a>
          </h3>
          <p>
            Built with HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
