import React, { useState } from 'react';

const Navbar = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section) => {
    // Jeśli onLinkClick jest dostępny, uruchom animację tylko po kliknięciu w link
    if (onLinkClick) {
      onLinkClick(section); // Ustawienie animacji dla odpowiedniej sekcji
    }
    
    // Zamknięcie menu po kliknięciu w link (tylko na mobilnych)
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-black text-gold p-4 sticky top-0 z-50 font-serif">
      <div className="container mx-auto flex justify-between items-center">
        {/* Lewy róg - Nazwa firmy */}
        <a href="#home" className="text-2xl font-bold text-gold">
          GZ DIAMONDS
        </a>

        {/* Przycisk hamburgera na urządzeniach mobilnych */}
        <button
          className="lg:hidden text-gold text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776; {/* Symbol hamburgera */}
        </button>

        {/* Prawy róg - Linki do sekcji */}
        <ul
          className={`flex space-x-6 lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <li><a href="#home" onClick={() => handleLinkClick('home')} className="hover:text-gold-light">Home</a></li>
          <li><a href="#about" onClick={() => handleLinkClick('about')} className="hover:text-gold-light">O nas</a></li>
          <li><a href="#process" onClick={() => handleLinkClick('process')} className="hover:text-gold-light">Proces tworzenia</a></li>
          <li><a href="#approach" onClick={() => handleLinkClick('approach')} className="hover:text-gold-light">Nasze Podejście</a></li>
          <li><a href="#gallery" onClick={() => handleLinkClick('gallery')} className="hover:text-gold-light">Galeria</a></li>
          <li><a href="#why-us" onClick={() => handleLinkClick('why-us')} className="hover:text-gold-light">Dlaczego my?</a></li>
          <li><a href="#contact" onClick={() => handleLinkClick('contact')} className="hover:text-gold-light">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
