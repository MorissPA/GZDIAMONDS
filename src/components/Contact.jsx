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
        <h2 className="text-4xl font-bold mb-4 text-gold" data-aos="zoom-in">
          To tylko część historii, które pomogliśmy stworzyć.
        </h2>
        <p className="text-lg text-gold-light mb-6" data-aos="zoom-in">
          Zobacz więcej na naszych profilach społecznościowych.
        </p>

        {/* Ikony social media */}
        <div className="flex justify-center gap-8 mb-6" data-aos="zoom-in">
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

        {/* Dane kontaktowe */}
        <div className="text-gold-light" data-aos="zoom-in">
          <h3 className="text-xl font-bold">
            A może to Twoje marzenie czeka na realizację? Skontaktuj się z nami:
          </h3>
          <p>Telefon: +48 123 456 789</p>
          <p>Telefon: +48 123 456 789</p>
          <p>Email: kontakt@gzdiamonds.pl</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
