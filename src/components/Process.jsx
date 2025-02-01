import React, { useEffect, useState } from 'react';

const Process = ({ isScrolled, isAnimated }) => {
  const [inView, setInView] = useState(false);

  // Funkcja do sprawdzania, czy element jest widoczny
  useEffect(() => {
    // Tworzymy instancję IntersectionObserver
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
      { threshold: 0.5 } // Aktywacja animacji, gdy sekcja jest widoczna w 50%
    );

    const element3 = document.getElementById('process');
    observer.observe(element3); // Obserwowanie sekcji

    return () => {
      observer.unobserve(element3); // Czyszczenie obserwatora przy unmount
    };
  }, []);

  return (
    <section
      id="process"
      className={`min-h-screen flex items-center justify-center bg-black text-gold font-serif ${
        inView ? 'animate-slideInUp delay-200' : '' // Użycie animacji slideInUp
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${
            inView ? 'animate-slideInUp delay-200' : '' // Animacja dla nagłówka
          }`}
        >
          Twoja wizja
        </h2>
        <p
          className={`text-gold-light ${
            inView ? 'animate-slideInUp delay-200' : '' // Animacja dla tekstu
          }`}
        >
          Rozmawiamy, aby zrozumieć Twoje potrzeby i marzenia
        </p>
      </div>
    </section>
  );
};

export default Process;
