import './Certifications.css';

// 1. Import all your certificate files from the assets folder.
// Make sure the filenames and paths are exactly correct.
import infosysCertificate from '../assets/infosys .jpg';
import nimsmeCertificate from '../assets/ni-msme certifiacte .jpg';
import ciscoCertificate from '../assets/Cyber security essentials .pdf';
import udemyCertificate from '../assets/udemy certificate.pdf';

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">76 Total Certifications</p>

      <div className="certification-filters">
        <button className="filter-btn active">📘 Course Certifications</button>
        <button className="filter-btn">🏆 Competition Participation</button>
      </div>

      {/* Infosys Foundation */}
      <div className="certification-card">
        <div className="certification-info">
          <h3>UI/UX Developer</h3>
          <p>Infosys Foundation</p>
          <span>June 2024</span>
        </div>
        {/* 2. Use the imported variables in the href for each link */}
        <a href={infosysCertificate} className="certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>

      {/* ni-msme */}
      <div className="certification-card">
        <div className="certification-info">
          <h3>Junior Software Developer Training</h3>
          <p>ni-msme (National Institute for Micro, Small and Medium Enterprises)</p>
          <span>April 2024</span>
        </div>
        <a href={nimsmeCertificate} className="certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>

      {/* Cisco Networking Academy */}
      <div className="certification-card">
        <div className="certification-info">
          <h3>Cybersecurity Essentials Course</h3>
          <p>Cisco Networking Academy</p>
          <span>May 2023</span>
        </div>
        <a href={ciscoCertificate} className="certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>

      {/* Udemy - DSA with Java */}
      <div className="certification-card">
        <div className="certification-info">
          <h3>Java Data Structures and Algorithms</h3>
          <p>Udemy</p>
          <span>December 2023</span>
        </div>
        <a href={udemyCertificate} className="certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>

      {/* AlmaBetter Capstone */}
      <div className="certification-card">
        <div className="certification-info">
          <h3>Capstone Project on Coding Challenges</h3>
          <p>AlmaBetter</p>
          <span>July 2024</span>
        </div>
        {/* This link is still a placeholder, you can import its certificate too */}
        <a href="#" className="certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>

    </section>
  );
}

export default Certifications;
