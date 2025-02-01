import React, { useEffect, useState } from 'react';

const Gallery = ({ isScrolled, isAnimated }) => {
  const [inView, setInView] = useState(false);

  // Funkcja do sprawdzania, czy element jest widoczny
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true); // Aktywacja animacji, gdy sekcja jest widoczna
          } else {
            setInView(false); // Dezaktywacja animacji, gdy sekcja jest niewidoczna
          }
        });
      },
      { threshold: 0.5 } // Animacja wyzwalana, gdy sekcja jest widoczna w 50%
    );

    const gallerySection = document.getElementById('gallery');
    observer.observe(gallerySection); // Obserwowanie sekcji 'gallery'

    return () => {
      observer.unobserve(gallerySection); // Czyszczenie obserwatora przy unmount
    };
  }, []);

  return (
    <section
      id="gallery"
      className={`min-h-screen flex items-center justify-center bg-black text-gold font-serif ${
        inView || isScrolled || isAnimated ? 'animate-fadeIn' : ''
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${inView || isAnimated ? 'animate-slideInUp delay-200' : ''}`}
        >
          Galeria
        </h2>
        <p
          className={`text-gold-light mb-8 ${inView || isAnimated ? 'animate-slideInUp delay-200' : ''}`}
        >
          Zobacz nasze najnowsze projekty i zainspiruj się pięknem naszej biżuterii.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Obrazki galerii */}
          <div className={`${inView || isAnimated ? 'animate-slideInLeft delay-200' : ''}`}>
            <img
              src="./image/gallery_earrings1.jpg"
              alt="Projekt 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className={`${inView || isAnimated ? 'animate-slideInLeft delay-200' : ''}`}>
            <img
              src="./image/gallery_necklace1.jpg"
              alt="Projekt 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className={`${inView || isAnimated ? 'animate-slideInLeft delay-200' : ''}`}>
            <img
              src="./image/gallery_ring1.jpg"
              alt="Projekt 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
