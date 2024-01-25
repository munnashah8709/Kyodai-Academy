import React from 'react';
import '../component/About.css'; // Import your CSS file for styling
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"

function About() {
  return (
    <div className="image-container">
    <div className="hover-container">
      <img src={image1} alt="Image 1" className="first-image" />
      <img src={image2}alt="Image 2" className="second-image" />
    </div>
  </div>
  );
}

export default About;
