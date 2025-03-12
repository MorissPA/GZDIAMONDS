import React, { useState, useEffect } from 'react';

const Navbar = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setIsTransparent(window.scrollY < homeBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    if (onLinkClick) {
      onLinkClick(section);
    }
    setIsMenuOpen(false); // Zamknięcie menu po kliknięciu w link (na telefonach)
  };

  return (
    <nav className={` p-4 fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${isTransparent ? 'bg-transparent text-gold border-transparent' : 'bg-yblue text-gold border-b border-gold-dark'}`}>
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo i nazwa */}
        <a href="#home" className="flex items-center space-x-3">
          <img 
            src="./image/LOGOGOLD123.png" 
            alt="GZ Diamonds Logo" 
            className="h-10 w-auto"
          />
          <div className="text-gold font-bold leading-tight text-center">
           
          </div>
        </a>

        {/* Przycisk hamburgera na telefonach */}
        <button
          className="lg:hidden text-gold text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Linki nawigacyjne */}
        <ul
          className={`lg:flex space-x-6 ${
            isMenuOpen 
              ? "absolute left-0 top-full w-full bg-yblue flex flex-col items-center space-y-4 p-4 transition-all duration-300 ease-in-out" 
              : "hidden lg:flex"
          }`}
        >
          <li><a href="#about" onClick={() => handleLinkClick('about')} className=" hover:text-gold-light italic">O nas</a></li>
          <li><a href="#process" onClick={() => handleLinkClick('process')} className="hover:text-gold-light italic">Proces tworzenia</a></li>
          <li><a href="#gallery" onClick={() => handleLinkClick('gallery')} className="hover:text-gold-light italic">Galeria</a></li>
          <li><a href="#approach" onClick={() => handleLinkClick('approach')} className="hover:text-gold-light italic">Dlaczego my</a></li>
          <li><a href="#contact" onClick={() => handleLinkClick('contact')} className="hover:text-gold-light italic">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;