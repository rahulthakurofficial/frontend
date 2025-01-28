import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
import aboutusImage from "../../assets/aboutus.png"; 
import Teachers from "../../assets/Teachers.jpg";
import teacherA from "../../assets/teacherA.jpg";
import Teacher from "../../assets/Teacher.jpg";
import teacherB from "../../assets/teacherB.jpg";
import teacherc from "../../assets/teacherc.jpg";
import teacherd from "../../assets/teacherd.jpg";
import coregoal from "../../assets/coregoal.jpg";
import coregoals from "../../assets/coregoals.jpg";

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", className: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/admissions", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", className: "" }); 
      setIsFormVisible(false); 
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div>
      {/* Welcome Section */}
      <header className="welcome-section">
        <h1 className="title">Welcome to Gigglezz Preschool!</h1>
        <p className="subtitle">Where Little Giggles Begin Their Big Journey!</p>
        <button className="enroll-btn">Enroll Now</button>
      </header>

      {/* About Section */}
      <section className="about-area">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            At Gigglezz, we nurture curiosity and creativity through play-based learning in a safe and happy
            environment. Our goal is to provide children with the opportunity to explore, discover, and grow 
            while having fun. Every child is valued and respected, and we aim to build a strong foundation
            for their future success. Come join us and be a part of the fun-filled learning journey!
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1737903296373!6m8!1m7!1sCAoSLEFGMVFpcE5DVmN0ZVBudjJSWVc3ZTJKT285U0xhYWRNMlp0eE9wU0FIaDgt!2m2!1d12.89627456744329!2d77.58808555922155!3f80.01844357416653!4f2.1998036717126155!5f0.4000000000000002"
          width="600"
          height="450"
          className="map-frame"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      

      {/* Discount Offer Section */}
      <section className="discount-offer">
        <div className="discount-content">
          <h2 className="offer-title">🎉 Special Offer for the First 30 Students! 🎉</h2>
          <p className="offer-text">
            Enroll now and get an exclusive discount! The first 30 students to sign up will receive a
            20% discount on their fees. Don’t miss out on this limited-time offer!
          </p>
          <button className="enroll-btn" onClick={() => setIsFormVisible(true)}>
            Claim Your Discount
          </button>
        </div>

        {isFormVisible && (
          <form className="discount-form" onSubmit={handleSubmit}>
            <h3>Fill Your Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        )}
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <h3>Our Mission & Vision</h3>
        <div className="mission-vision-content">
          <div className="mission">
            <h4>Mission</h4>
            <p>To help every child be curious and creative in a safe and fun learning space.</p>
          </div>
          <div className="vision">
            <h4>Vision</h4>
            <p>To motivate and encourage the next generation to explore, learn, and grow.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-members">
          {[Teachers, teacherA, Teacher, teacherB, teacherc, teacherd].map((img, index) => (
            <div className="team-member" key={index}>
              <img src={img} alt={`Teacher ${index + 1}`} />
              <h3>Teacher {index + 1}</h3>
              <p>Bio about the teacher...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values">
          <div className="value-item">
            <img src={coregoal} alt="Inclusivity" />
            <h3>Inclusivity</h3>
            <p>We believe in an inclusive environment where every child is valued.</p>
          </div>
          <div className="value-item">
            <img src={coregoals} alt="Creativity" />
            <h3>Creativity</h3>
            <p>We encourage creativity in everything we do, allowing children to express themselves.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
