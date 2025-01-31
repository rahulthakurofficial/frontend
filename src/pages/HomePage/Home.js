import React, { useState } from 'react';
import { Modal, Button, Select, Form, Input } from 'antd';
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
      setFormData({ name: "", email: "", className: ""  }); 
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
      
      <section className="amenities-title">
        <h2>Our Amenities</h2>
      </section>

      <section className="amenities-list">
        <div className="amenity-card">
          <i className="fas fa-child"></i>
          <h3>Safe Play Areas</h3>
          <p>We offer safe and supervised play areas for your child's development.</p>
        </div>
        <div className="amenity-card">
          <i className="fas fa-tint"></i>
          <h3>Clean Drinking Water</h3>
          <p>We ensure that fresh, clean drinking water is available for all children.</p>
        </div>
        <div className="amenity-card">
          <i className="fas fa-parking"></i>
          <h3>Parking</h3>
          <p>Convenient parking space for parents to drop off and pick up their children.</p>
        </div>
        <div className="amenity-card">
          <i className="fas fa-comments"></i>
          <h3>Daily Communication App</h3>
          <p>Stay connected with your child's day through our daily communication app.</p>
        </div>
        <div className="amenity-card">
          <i className="fas fa-cogs"></i>
          <h3>Playground Equipment</h3>
          <p>We have a variety of safe, age-appropriate playground equipment for kids.</p>
        </div>
        <div className="amenity-card">
          <i className="fas fa-lock"></i>
          <h3>Secure Entry/Exit</h3>
          <p>Our premises are secure with restricted entry and exit points for safety.</p>
        </div>
      </section>

      <DiscountOffer /> {/* Render DiscountOffer component here */}
      
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

// DiscountOffer Component
const DiscountOffer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);  // Track form step
  const [selectedClass, setSelectedClass] = useState(null);
  const [feeStructure, setFeeStructure] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const feeData = {
    'PLAY GROUP':'fee: 37000',
    'NURSERY':'fee: 48000',
    'LKG': 'Fee: $500',
    'UKG': 'Fee: $700',
    'CLASS 1': 'Fee: $600',
  };

  // Handle closing the modal
  const handleCancel = () => {
    setIsFormVisible(false);
  };

  // Handle opening the modal
  const handleClick = () => {
    setIsFormVisible(true);
  };

  // Handle next step
  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2); // Go to class selection
    } else if (currentStep === 2) {
      setCurrentStep(3); // Go to fee structure
    }
  };

  // Handle previous step
  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1); // Go back to name/email
    } else if (currentStep === 3) {
      setCurrentStep(2); // Go back to class selection
    }
  };

  const handleClassChange = (value) => {
    setSelectedClass(value);
    setFeeStructure(feeData[value] || '');
  };

  const handleSubmit = () => {
    // Logic to handle submission
    alert('Fee Structure Submitted');
    setIsFormVisible(false);
  };

  return (
    <section className="discount-offer">
      <div className="discount-content">
        <h2 className="offer-title"> Special Offer for the First 20 Students!🎉</h2>
        <p className="offer-text">
          Enroll now and get an exclusive discount! The first 20 students to sign up will receive a 10% discount on their fees.
          Don’t miss out on this limited-time offer!
        </p>
        <button className="enroll-btn" onClick={handleClick}>
          Claim Your Discount
        </button>
      </div>

      {/* Ant Design Modal */}
      <Modal
        title="Claim Your Discount"
        visible={isFormVisible}
        onCancel={handleCancel}
        footer={[
          currentStep > 1 && (
            <Button key="back" onClick={handleBack}>
              Back
            </Button>
          ),
          <Button key="next" type="primary" onClick={handleNext}>
            {currentStep === 3 ? 'Submit' : 'Next'}
          </Button>,
        ]}
      >
        {/* Step 1: Name and Email */}
        {currentStep === 1 && (
          <Form>
            <Form.Item label="Name" name="name">
              <Input
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Form.Item>
          </Form>
        )}

        {/* Step 2: Class Selection */}
        {currentStep === 2 && (
          <>
            <h3>Select Your Class</h3>
            <Select
              style={{ width: 200 }}
              placeholder="Select a class"
              onChange={handleClassChange}
            >
              <Select.Option value="PLAY GROUP">PLAY GROUP</Select.Option>
              <Select.Option value="NURSERY">NURSERY</Select.Option>
              <Select.Option value="LKG">LKG</Select.Option>
              <Select.Option value="UKG">UKG</Select.Option>
            </Select>
            {selectedClass && <p>Selected Class: {selectedClass}</p>}
          </>
        )}

        {/* Step 3: Fee Structure */}
        {currentStep === 3 && (
          <>
            <h3>Fee Structure</h3>
            <p>{feeStructure}</p>
        
          </>
        )}
      </Modal>
    </section>
  );
};

export default Home;
