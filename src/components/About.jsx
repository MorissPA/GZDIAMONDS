import React, { useState, useEffect } from 'react';

const About = () => {
  const [inView, setInView] = useState(false);

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

    const element4 = document.getElementById('about');
    observer.observe(element4); // Obserwujemy sekcję 'about'

    return () => {
      observer.unobserve(element4); // Czyszczenie obserwatora przy unmount
    };
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center bg-black text-gold ${
        inView ? 'animate-slideInUp delay-200' : '' // Dodanie animacji, gdy sekcja jest widoczna
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${inView ? 'animate-slideInUp delay-200' : ''}`}
        >
          O nas
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src="./image/about_us.jpg"
            alt="O nas"
            className={`rounded-full mb-4 md:mb-0 md:mr-8 ${inView ? 'animate-slideInLeft delay-200' : ''}`}
            width="800"
            height="800"
          />
          <p
            className={`text-gold text-2xl max-w-lg ${inView ? 'animate-slideInUp delay-200' : ''}`}
          >
            Jesteśmy dwoma pasjonatami złota i diamentów, którzy od lat zamieniają marzenia w rzeczywistość. 
            Specjalizujemy się w tworzeniu unikalnej biżuterii, która odzwierciedla Twoją osobowość i historię.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
