import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Example: Fetch gallery images from backend API
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(data => setGalleryImages(data.images || []));
  }, []);

  // Example: Fetch services from backend API
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/api/services")
      .then(res => res.json())
      .then(data => setServices(data.services || []));
  }, []);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="/ShaRaP.jpg" alt="Logo" className="logo-img" />
          <span className="logo-text">ShaRa</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#services">Our Services</a>
          <a href="#portfolio-video">Portfolio Video</a>
          <a href="#contact" className="contact-btn">Contact Us</a>
        </nav>
      </header>
      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-text">
            <span className="subtitle">ShaRa Digital Photography</span>
            <h1>
              STEP<br />INTO WORLD OF<br />IMAGES
            </h1>
          </div>
          <div className="hero-image">
            <img src="/Ravi sir 2.jpg" alt="Photographer" />
          </div>
        </section>

        {/* Portfolio Video & Quote Side by Side */}
        <div className="side-by-side-sections">
          <section className="portfolio-video-section" id="portfolio-video">
            <h2>Portfolio Video</h2>
            <div className="portfolio-video-container">
              <div className="portfolio-video-card">
                <video controls poster="/Logo.jpeg" width="100%">
                  <source src="/Portfolio Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
          <section className="quote-section">
            <div className="quote">
              <p>
                “Look Deep Into Nature And Then You Will Understand Everything Better.”
              </p>
              <span>Albert Einstein</span>
            </div>
          </section>
        </div>

        {/* About Section */}
        <section className="about-section" id="about">
          {/* ...about content here... */}
        </section>

        {/* Gallery Section */}
        <section className="gallery-section" id="gallery">
          <h2>Gallery</h2>
          <div className="slideshow-container">
            {/* Implement slideshow logic here */}
            {galleryImages.map((img, idx) => (
              <img key={idx} src={img} alt={`Gallery ${idx}`} className="slideshow-image" />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="services-container">
            <h2>Our Services</h2>
            <div className="services-list">
              {services.map((service, idx) => (
                <div className="service-item" key={idx}>
                  <img src={service.icon} alt={service.title} className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer className="contact-section" id="contact">
          {/* ...contact form and info here... */}
        </footer>
      </main>
    </div>
  );
}

export default App;