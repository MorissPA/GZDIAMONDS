import React, { useEffect, useState } from 'react';

const WhyUs = ({ isScrolled, isAnimated }) => {
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

    const whyUsSection = document.getElementById('why-us');
    observer.observe(whyUsSection); // Obserwowanie sekcji 'why-us'

    return () => {
      observer.unobserve(whyUsSection); // Czyszczenie obserwatora przy unmount
    };
  }, []);

  return (
    <section
      id="why-us"
      className={`min-h-screen flex items-center justify-center bg-black text-gold font-serif ${
        inView ? 'animate-slideInUp delay-200' : ''
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${inView ? 'animate-slideInUp delay-200' : ''}`}
        >
          Dlaczego my?
        </h2>
        <h2
          className={`text-2xl font-bold mb-4 ${inView ? 'animate-slideInUp delay-200' : ''}`}
        >
          Trzy kluczowe korzyści:
        </h2>
        <p
          className={`text-gold-light ${inView ? 'animate-slideInUp delay-200' : ''}`}
        >
          Indywidualne podejście: Każdy projekt jest tworzony specjalnie dla Ciebie.
        </p>
        <p
          className={`text-gold-light ${inView ? 'animate-slideInUp delay-200' : ''}`}
        >
          Luksus bez kompromisów: Używamy tylko najwyższej jakości materiałów.
        </p>
        <p
          className={`text-gold-light ${inView ? 'animate-slideInUp delay-200' : ''}`}
        >
          Biżuteria od serca: Tworzymy biżuterię, która ma znaczenie.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
