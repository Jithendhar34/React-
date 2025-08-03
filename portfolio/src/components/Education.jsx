 import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section fade-in">
      <h2>Education</h2>
      <div className="education-timeline">
        <div className="education-item">
          <h3>B.Tech in Computer Science</h3>
          <span className="duration">2021 – 2025</span>
          <p>Pallavi Engineering college, Hyderabad</p>
        </div>
        <div className="education-item">
          <h3>Intermediate (MPC)</h3>
          <span className="duration">2019 – 2021</span>
          <p>Narayana  Junior College</p>
        </div>
        <div className="education-item">
          <h3>10th Standard</h3>
          <span className="duration">2018 – 2019</span>
          <p>Master Minds Techno High School </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
