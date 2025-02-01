import React, { useState } from 'react';

const Navbar = ({ onLinkClick }) => {
  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick(true); // Ustawienie isAnimated na true, gdy link jest kliknięty
    }
  };

  return (
    <nav className="bg-black text-gold p-4 sticky top-0 z-50 font-serif">
      <div className="container mx-auto flex justify-between items-center">
        {/* Lewy róg - Nazwa firmy */}
        <a href="#home" className="text-2xl font-bold text-gold">
          GZ DIAMONDS
        </a>

        {/* Prawy róg - Linki do sekcji */}
        <ul className="flex space-x-6">
          <li><a href="#home" onClick={handleLinkClick} className="hover:text-gold-light">Home</a></li>
          <li><a href="#about" onClick={handleLinkClick} className="hover:text-gold-light">O nas</a></li>
          <li><a href="#process" onClick={handleLinkClick} className="hover:text-gold-light">Proces tworzenia</a></li>
          <li><a href="#approach" onClick={handleLinkClick} className="hover:text-gold-light">Nasze Podejście</a></li>
          <li><a href="#gallery" onClick={handleLinkClick} className="hover:text-gold-light">Galeria</a></li>
          <li><a href="#why-us" onClick={handleLinkClick} className="hover:text-gold-light">Dlaczego my?</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="hover:text-gold-light">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
