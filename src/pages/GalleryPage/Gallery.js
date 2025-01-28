import React from 'react';
import './Gallery.css';

import kids1 from '../../assets/kids1.jpg';
import kids2 from '../../assets/kids2.jpg';
import kids3 from '../../assets/kids3.jpg';
import kids4 from '../../assets/kids4.jpg';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Our Gallery</h2>
      <div className="gallery">
        <img src={kids1} alt="Gallery Item 1" className="gallery-item" />
        <img src={kids2} alt="Gallery Item 2" className="gallery-item" />
        <img src={kids3} alt="Gallery Item 3" className="gallery-item" />
        <img src={kids4} alt="Gallery Item 4" className="gallery-item" />
      </div>
    </div>
  );
};

export default Gallery;
