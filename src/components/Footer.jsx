import React, { useEffect, useState } from 'react';

const Footer = ({ isScrolled, isAnimated }) => {
  const [inView, setInView] = useState(false);

  // Funkcja do sprawdzania, czy element jest widoczny
  useEffect(() => {
    const handleScroll = () => {
      const footerSection = document.querySelector('footer');
      const rect = footerSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Sprawdzenie na starcie
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      className={`bg-black text-gold py-6 font-serif ${
        isScrolled || inView || isAnimated ? 'animate-fadeIn' : ''
      }`}
    >
      <div className="container mx-auto text-center">
        <p>&copy; Niech Twoje emocje nabiorą kształtu.</p>
      </div>
    </footer>
  );
};

export default Footer;
