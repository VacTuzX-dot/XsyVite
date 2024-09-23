import React from "react";
import "../style/index.css";

const About_Nice: React.FC = () => {
  return (
    <>
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are passionate about providing great
          services and content.
        </p>
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products and services that
            bring value to our customers.
          </p>
        </section>
        <section className="team-section">
          <h2>Meet the Team</h2>
          <p>
            Our team consists of dedicated professionals who strive for
            excellence in everything they do.
          </p>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feel free to reach out at{" "}
            <a href="mailto:contact@example.com">contact@example.com</a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default About_Nice;
