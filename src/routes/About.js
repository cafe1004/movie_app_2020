import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about-container">
      <span> About this page: I built it because I love movies.</span>
    </div>
  );
}

export default About;
