import React, { useEffect, useState } from 'react';

const Approach = ({ isScrolled, isAnimated }) => {
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
      { threshold: 0.5 } // Animacja jest wyzwalana, gdy sekcja jest widoczna w 50%
    );

    const approachSection = document.getElementById('approach');
    observer.observe(approachSection); // Obserwowanie sekcji 'approach'

    return () => {
      observer.unobserve(approachSection); // Czyszczenie obserwatora przy unmount
    };
  }, []);

  return (
    <section
      id="approach"
      className={`min-h-screen flex items-center justify-center bg-black text-gold font-serif ${
        inView || isScrolled || isAnimated ? 'animate-slideInUp delay-200' : '' // Dodanie animacji po przewinięciu
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${inView || isAnimated ? 'animate-slideInUp delay-200' : ''}`}
        >
          Trzy kluczowe wartości:
        </h2>
        <p
          className={`text-gold-light ${inView || isAnimated ? 'animate-slideInUp delay-200' : ''}`}
        >
          Słuchamy: Każdy projekt zaczyna się od uważnego wysłuchania Twoich potrzeb.
        </p>
        <p
          className={`text-gold-light ${inView || isAnimated ? 'animate-slideInUp delay-200' : ''}`}
        >
          Precyzja: Każdy detal jest dopracowany z najwyższą starannością.
        </p>
        <p
          className={`text-gold-light ${inView || isAnimated ? 'animate-slideInUp delay-200' : ''}`}
        >
          Perfekcja: Dążymy do doskonałości w każdym elemencie biżuterii.
        </p>
      </div>
    </section>
  );
};

export default Approach;
