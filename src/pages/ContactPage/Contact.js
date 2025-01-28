import React, { useState } from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Handle Input Change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/contact', formData);
      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      setResponseMessage('Failed to send the message. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Have questions or need assistance? Feel free to reach out to us.
        </p>

        <div className="contact-grid">
          <div className="contact-form">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-button">
                Send Message
              </button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </div>

          <div className="contact-info">
            <h3 className="info-title">Get in Touch</h3>
            <p><strong>Phone:</strong> 8761928727</p>
            <p><strong>Email:</strong> rahulthakur.2314@gmail.com</p>
            <p><strong>Address:</strong> Vasi Navi Mumbai</p>
            <div className="flex items-center space-x-2 mt-4">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Telegram">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
