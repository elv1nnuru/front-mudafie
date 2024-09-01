import React from 'react'

import '../assets/css/Servis.css'

 

const Services = () => {
    const services = [
        { title: "Business Services", description: "The tiny ship today stiller", imgSrc: "https://res.cloudinary.com/db1cpkt7q/image/upload/v1709745063/3_pc8z5b.jpg" },
        { title: "Consumer Product", description: "The tiny ship today stiller", imgSrc: "https://res.cloudinary.com/db1cpkt7q/image/upload/v1709745125/4_tvjt5o.jpg" },
        { title: "Financial Services", description: "The tiny ship today stiller", imgSrc: "https://res.cloudinary.com/db1cpkt7q/image/upload/v1709745162/5_fnzdwe.jpg" },
        { title: "Travel and Aviation", description: "The tiny ship today stiller", imgSrc: "https://res.cloudinary.com/db1cpkt7q/image/upload/v1709745200/6_hnlybn.jpg" },
        { title: "Software Research", description: "The tiny ship today stiller", imgSrc: "https://res.cloudinary.com/db1cpkt7q/image/upload/v1709745235/7_ei1sp2.jpg" },
        { title: "Quality Resourcing", description: "The tiny ship today stiller", imgSrc: "https://res.cloudinary.com/db1cpkt7q/image/upload/v1709745571/8_djqnkn.jpg" }
    ];

    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.imgSrc} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href="#read-more">READ MORE &gt;</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services; 





