import React from 'react';
import "../assets/css/Consultation.css"

const FreeConsultationForm = () => {
  return (
    <div className="consultation-container">
      <h2>FREE CONSULTATION</h2>
      <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
      <div className="form-container">
        <div className="form-image">
          <img src="https://res.cloudinary.com/db1cpkt7q/image/upload/v1725042165/10_n4nevp.jpg" alt="Consultation" />
        </div>
        <form className="consultation-form">
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone" required />
          <input type="email" placeholder="Email" required />
          <select required>
            <option value="">Service you're looking for?</option>
            <option value="service1">Business Services</option>
            <option value="service2">Financial Services</option>
            <option value="service3">Software Research</option>
          </select>
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">GET A QUOTE</button>
        </form>
      </div>
    </div>
  );
};

export default FreeConsultationForm;