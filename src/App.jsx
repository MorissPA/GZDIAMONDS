import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Process from './components/Process';
import Approach from './components/Approach';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => { 
    if (window.innerWidth > 768) {  // Animacje tylko dla większych ekranów
      AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }
  }, []);
  

  const handleLinkClick = (value) => {
    setIsAnimated(value); // Ustawia isAnimated na true, gdy link jest kliknięty
  };

  return (
    <div className="bg-yblue text-shadow-light-gold">
      <Navbar onLinkClick={handleLinkClick}></Navbar>
      <Home />
      <About />
      <Process />
      <Gallery />
      <Approach />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
