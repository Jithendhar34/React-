import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <p className="section-subtitle">My professional journey and career highlights</p>

      {/* IBM SkillsBuild Internship */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>Intern - Web Development</h3>
          <span className="date-badge">March 2024 - May 2024</span>
        </div>
        <p className="organization">IBM SkillsBuild Program</p>
        <p className="experience-description">
          During my internship, I worked on real-time projects including building a chatbot using IBM Watson Assistant
          and developing an e-commerce platform. I collaborated in agile teams to understand end-user requirements and 
          deliver high-quality web solutions.
        </p>
        <div className="skill-tags">
          <span>React.js</span>
          <span>IBM Watson</span>
          <span>Team Collaboration</span>
          <span>APIs</span>
        </div>
        <a href="#certifications" className="certificate-link">📄 View Certificate</a>
      </div>

    </section>
  );
}

export default Experience;
