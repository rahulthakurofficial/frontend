import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './pages/HeaderPage/Header';
import Home from './pages/HomePage/Home';
import Service from './pages/ServicePage/Service';
import Gallery from './pages/GalleryPage/Gallery';
import Contact from './pages/ContactPage/Contact';
import Footer from './pages/FooterPage/Footer';
//import GigglezzChatbot from "./pages/Chatbot/GigglezzChatbot";

const App = () => {
  return (
    <Router> 
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/Service" element={<Service />} /> 
        <Route path="/Gallery" element={<Gallery />} /> 
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
      {/* <GigglezzChatbot /> */}
      <Footer />
    </Router>
  );
};

export default App;

