import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // importowanie ikon społecznościowych

const Contact = ({ isScrolled, isAnimated }) => {
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

    const contactSection = document.getElementById('contact');
    observer.observe(contactSection); // Obserwowanie sekcji 'contact'

    return () => {
      observer.unobserve(contactSection); // Czyszczenie obserwatora przy unmount
    };
  }, []);

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center bg-black text-gold font-serif ${
        inView || isScrolled || isAnimated ? 'animate-fadeIn' : ''
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold mb-4 text-gold ${
            inView || isAnimated ? 'animate-slideInUp delay-200' : ''
          }`}
        >
          Skontaktuj się z nami
        </h2>
        <p className="text-lg text-gold-light mb-6">
          Jesteśmy dostępni na różnych platformach społecznościowych. Skontaktuj się z nami na Facebooku, Instagramie, lub TikToku.
        </p>

        {/* Dane kontaktowe */}
        <div
          className={`flex justify-center gap-8 mb-6 ${
            inView || isAnimated ? 'animate-slideInUp delay-200' : ''
          }`}
        >
          <div className="flex flex-col items-center">
            <FaFacebook className="text-4xl text-gold mb-2 hover:text-gold-dark" />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold"
            >
              Facebook
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaInstagram className="text-4xl text-gold mb-2 hover:text-gold-dark" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaTiktok className="text-4xl text-gold mb-2 hover:text-gold-dark" />
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold"
            >
              TikTok
            </a>
          </div>
        </div>

        {/* Inne dane kontaktowe */}
        <div
          className={`text-gold-light ${
            inView || isAnimated ? 'animate-slideInUp delay-200' : ''
          }`}
        >
          <p>Telefon: +48 123 456 789</p>
          <p>Email: kontakt@gzdiamonds.pl</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
