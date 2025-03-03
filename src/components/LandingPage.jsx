import React from 'react';
import './LandingPage.css'; // Assuming you have a CSS file for styling
import BreathingText from './BreathingText'; // Import the BreathingText component

const LandingPage = () => {
  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="landing-page">
      {/* Background GIF in a separate div */}
      <div className="background-gif-container">
        {/* Dark overlay removed */}
      </div>
      
      {/* Social Media Links */}
      <div className="socials">
        <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
          <img src="/assets/x.svg" alt="Twitter" />
        </a>
        <a href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/assets/email.svg" alt="Email/Resume" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="GitHub" />
        </a>
      </div>

      {/* Main Content Rectangle */}
      <div className="content-rectangle">
        <h2 className="greeting">Hi, my name is</h2>
        <h1 className="name">
          <BreathingText 
            label="Joseph" 
            staggerFrom="center"
            staggerDuration={0.05}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="breathing-name"
          />
          <br />
          <BreathingText 
            label="Sackitey." 
            staggerFrom="center"
            staggerDuration={0.04}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="breathing-name"
          />
        </h1>
        <h2 className="title">I am an Engineer and a leader</h2>
      </div>

      {/* Browse Portfolio Section */}
      <div className="browse-section">
        <button onClick={scrollToAbout} className="portfolio-link">
          <p>Browse my portfolio</p>
          <div className="arrow-down"></div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage; 