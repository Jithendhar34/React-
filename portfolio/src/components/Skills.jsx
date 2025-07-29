import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section fade-in">
      <div className="skills-box">
        <h2>Skills</h2>
        <div className="skills-tags">
          {[
            'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
            'SQL', 'MongoDB', 'Java', 'Git', 'GitHub', 'Express', 'Vue.js'
          ].map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
