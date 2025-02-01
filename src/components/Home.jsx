import React, { useEffect, useState } from 'react';

const Home = ({ isScrolled, isAnimated }) => {
  const [inView, setInView] = useState(false);

  // Funkcja do sprawdzania, czy element jest widoczny
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Ustawienie progu animacji na 0.5
          if (entry.isIntersecting) {
            setInView(true); // Aktywacja animacji
          } else {
            setInView(false); // Dezaktywacja animacji
          }
        });
      },
      { threshold: 0.5 } // Próg, przy którym animacja jest wyzwalana
    );

    const homeSection1 = document.getElementById('home');
    observer.observe(homeSection1); // Obserwowanie sekcji home

    return () => {
      observer.unobserve(homeSection1); // Czyszczenie obserwatora przy unmount
    };
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center font-serif bg-blue-50 relative ${
        inView || isScrolled || isAnimated ? 'animate-slideInLeft delay-200' : ''
      }`}
      style={{
        backgroundImage: 'url(./image/footer_background.jpg)', // Ścieżka do zdjęcia
        backgroundSize: 'cover', // Dopasowanie tła do rozmiaru sekcji
        backgroundPosition: 'center', // Wyśrodkowanie tła
      }}
    >
      {/* Przyciemnienie tła */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2
          className={`text-8xl font-bold mb-4 text-gold ${
            inView || isScrolled || isAnimated ? 'animate-slideInUp delay-200' : ''
          }`}
        >
          GZ DIAMONDS
        </h2>
        <p
          className={`text-gold ${
            inView || isScrolled || isAnimated ? 'animate-slideInUp delay-200' : ''
          }`}
        >
          Tworzymy biżuterię, która opowiada Twoją historię.
        </p>
      </div>
    </section>
  );
};

export default Home;
