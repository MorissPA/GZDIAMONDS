import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Approach = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="approach"
      className="min-h-screen pt-20 flex items-center justify-center bg-yblue text-gold px-6 scroll-mt-12 italic"
    >
      <div className="container mx-auto text-center max-w-3xl" data-aos="zoom-in">
        <h2 className="text-5xl font-bold mb-6 tracking-wide">Sekret wyjątkowej biżuterii</h2>
        <p className="text-2xl text-gold-light leading-relaxed">
        Tworzymy projekty od podstaw, specjalnie dla Ciebie. Tak jak w naturze nie ma dwóch identycznych płatków śniegu, tak i nasza biżuteria jest jedyna w swoim rodzaju. Wybór kruszcu, rodzaj i kolor kamieni szlachetnych, kształt – wszystkie te detale zależą od Ciebie.
        </p>
        <p className="text-2xl text-gold-light leading-relaxed mt-6">
        Wierzymy, że prawdziwe piękno tkwi w niepowtarzalności, dlatego cały proces tworzenia realizujemy z mistrzowską precyzją. To nie jest tylko biżuteria – to opowieść, która zaczyna się od Twojej wizji, a kończy w blasku złota i kamieni.
        </p>
      </div>
    </section>
  );
};

export default Approach;
