import React from "react";
import "./Service.css"; // Import the CSS file for styling

const Service = () => {
  return (
    <section className="services">
      <h2 className="section-title">Our Services</h2>

      {/* Creative Arts & Craft Activities */}
      <div className="service-item">
        <h3 className="service-title">Creative Arts & Craft Activities</h3>
        <div className="service-details">
          <div className="service-detail">
            <h4>Art Classes</h4>
            <p>Encourage creativity through drawing, painting, and craftwork.</p>
          </div>
          <div className="service-detail">
            <h4>Music and Movement</h4>
            <p>Music sessions where kids sing, dance, and play instruments.</p>
          </div>
          <div className="service-detail">
            <h4>Drama and Role-Play</h4>
            <p>Develop social skills and imagination through dramatic play.</p>
          </div>
        </div>
      </div>

      {/* Language Development */}
      <div className="service-item">
        <h3 className="service-title">Language Development</h3>
        <div className="service-details">
          <div className="service-detail">
            <h4>Storytelling</h4>
            <p>Improve language skills through reading stories, singing songs, and interactive language activities.</p>
          </div>
          <div className="service-detail">
            <h4>Phonics Classes</h4>
            <p>Early phonics lessons to introduce letter sounds and letter recognition.</p>
          </div>
          <div className="service-detail">
            <h4>Bilingual Education</h4>
            <p>Teach children in more than one language, enhancing cognitive and language development.</p>
          </div>
        </div>
      </div>

      {/* Physical Education and Outdoor Activities */}
      <div className="service-item">
        <h3 className="service-title">Physical Education and Outdoor Activities</h3>
        <div className="service-details">
          <div className="service-detail">
            <h4>Sports and Games</h4>
            <p>Introduce children to basic sports, team-building games, and physical activities.</p>
          </div>
          <div className="service-detail">
            <h4>Outdoor Play</h4>
            <p>Provide a safe and engaging outdoor environment for children to play and explore.</p>
          </div>
          <div className="service-detail">
            <h4>Motor Skills Development</h4>
            <p>Activities that enhance fine and gross motor skills, such as building blocks, puzzles, and running.</p>
          </div>
        </div>
      </div>

      {/* Health & Nutrition Education */}
      <div className="service-item">
        <h3 className="service-title">Health & Nutrition Education</h3>
        <div className="service-details">
          <div className="service-detail">
            <h4>Healthy Eating Habits</h4>
            <p>Teach the importance of healthy eating and provide nutritious meals.</p>
          </div>
          <div className="service-detail">
            <h4>Hygiene Practices</h4>
            <p>Promote good hygiene habits like washing hands and brushing teeth.</p>
          </div>
          <div className="service-detail">
            <h4>Physical Health Monitoring</h4>
            <p>Regular checks on children's health to ensure they're growing properly.</p>
          </div>
        </div>
      </div>

      {/* Transportation Services */}
      <div className="service-item">
        <h3 className="service-title">Transportation Services & Safety and Security Services</h3>
        <div className="service-details">
          <div className="service-detail">
            <h4>Pick-up/Drop-off</h4>
            <p>Offer transportation services for children who need to be picked up and dropped off from home.</p>
          </div>
          <div className="service-detail">
            <h4>24/7 Security</h4>
            <p>Ensure a safe and secure environment for children, with security measures like CCTV surveillance and secure entry points.</p>
          </div>
          <div className="service-detail">
            <h4>Emergency Procedures</h4>
            <p>Well-established protocols for emergency situations like fire drills, first aid, etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
