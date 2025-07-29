import './Home.css';
import developerGif from '../assets/developer.gif'; // adjust path if needed

function Home() {
  return (
    <section id="home" className="home-section fade-in">
      <div className="home-content">
        <h1 className="fade-in-text">Hi, I'm Jithendhar Reddy</h1>
        <h2 className="fade-in-text">Full Stack Developer</h2>
        <p className="fade-in-text">
       "I enjoy building modern web applications using the MERN stack (MongoDB, Express, React, and Node.js)."
        </p>
        <div className="home-buttons">
          <a href="#contact">Contact Me</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
<<<<<<< HEAD
      </div>

      {/* GIF Image Section */}
      <div className="image-container">
        <img
          src={developerGif}
          alt="Developer working at desk"
          className="developer-image"
        />
      </div>
    </section>
  );
}

export default Home;
=======
      </section>
    );
  }
export default Home;
  
>>>>>>> bcb8a2680a9ef4dac223f1fb9f4d432edb20c84f
