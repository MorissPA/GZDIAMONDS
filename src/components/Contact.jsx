import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-yblue text-gold font-serif  scroll-mt-12"
      data-aos="zoom-in"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gold" data-aos="zoom-in">
        Twoja historia, nasza pasja – biżuteria, która mówi więcej niż słowa.
        </h2>
        <p className="text-lg text-gold-light mb-6" data-aos="zoom-in">
        Śledź nas, aby zobaczyć najnowsze projekty i inspiracje!
        </p>

        {/* Ikony social media */}
        <div className="flex justify-center gap-8 mb-6" data-aos="zoom-in">
          <div className="flex flex-col items-center">
          <a
              href="https://www.facebook.com/share/1YGQgnvJDd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold"
            >
            <FaFacebook className="text-4xl text-gold mb-2 hover:text-gold-dark" />
            </a>
            <a
              href="https://www.facebook.com/share/1YGQgnvJDd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold"
            >
              Facebook
            </a>
          </div>
          <div className="flex flex-col items-center">
          <a
              href="https://www.instagram.com/gz_diamonds/"
              target="_blank"
              rel="noopener noreferrer">
            <FaInstagram className="text-4xl text-gold mb-2 hover:text-gold-dark" />
            </a>
            <a
              href="https://www.instagram.com/gz_diamonds/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold"
            >
              Instagram
            </a>
          </div>
          {/*  TIKTOK
          <div className="flex flex-col items-center">
            <a 
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"><FaTiktok className="text-4xl text-gold mb-2 hover:text-gold-dark" /></a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold"
            >
              TikTok
            </a>
          </div>
          */}
        </div>

        {/* Dane kontaktowe */}
        <div className="text-gold-light" data-aos="zoom-in">
          <h3 className="text-xl font-bold">
            Czy Twoje marzenie jeszcze czeka na realizację? Skontaktuj się z nami:
          </h3>
          <p>Telefon/ WhatsApp: +48 512 437 497</p>
          <p>Telefon/ WhatsApp: +48 537 383 465</p>
          <p>Email: kontakt@gz-diamonds.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
