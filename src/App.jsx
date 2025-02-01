import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Process from './components/Process';
import Approach from './components/Approach';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleLinkClick = (value) => {
    setIsAnimated(value); // Ustawia isAnimated na true, gdy link jest kliknięty
  };

  return (
    <div className="bg-black">
      <Navbar onLinkClick={handleLinkClick} />
      <Home />
      <About />
      <Process/>
      <Approach/>
      <Gallery/>
      <WhyUs />
      <Contact />
      <Footer  />
    </div>
  );
}

export default App;
