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
      className="min-h-screen  pt-20 flex items-center justify-center bg-yblue text-gold  px-6 scroll-mt-12 "
    >
      <div className="container mx-auto text-center max-w-3xl" data-aos="zoom-in">
        <h2 className="text-5xl font-bold mb-6 tracking-wide">Sekret wyjątkowej biżuterii</h2>
        <p className="text-2xl text-gold-light leading-relaxed">
        Każdy projekt tworzymy od podstaw, specjalnie dla Ciebie. Tak jak w naturze nie ma dwóch identycznych płatków śniegu, 
        tak i każda nasza biżuteria jest unikalna. Wybór kruszcu, rodzaj i kolor kamieni szlachetnych, kształt – każdy detal zależy od Ciebie. 
        </p>
        <p className="text-2xl text-gold-light leading-relaxed mt-6">
        Wierzymy, że prawdziwe piękno tkwi w niepowtarzalności, dlatego dbamy o każdy etap tworzenia z rzemieślniczą precyzją. 
        To coś więcej niż biżuteria – to opowieść zapisana w złocie i kamieniach.
        </p>
      </div>
    </section>
  );
};

export default Approach;
