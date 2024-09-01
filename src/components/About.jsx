import React from 'react';
import '../assets/css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="https://res.cloudinary.com/db1cpkt7q/image/upload/v1725178768/fff_uimo86.jpg" alt="About Us" />
      </div>
      <div className="about-content">
        <h2>ABOUT OUR COMPANY</h2>
        <p>
          A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.
          <br /><br />
          The government they survive as soldiers of fortune baby if you've ever wondered the east side to a deluxe apartment.
        </p>
        <div className="about-icons">
          <div className="icon">
            <span>⭐</span>
            <p>Vision</p>
          </div>
          <div className="icon">
            <span>🏅</span>
            <p>Missions</p>
          </div>
          <div className="icon">
            <span>🎯</span>
            <p>Goals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;