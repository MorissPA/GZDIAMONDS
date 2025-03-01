import React, { useEffect, useState } from "react";

const Process = ({ isScrolled, isAnimated }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const element3 = document.getElementById("process");
    if (element3) {
      observer.observe(element3);
    }

    return () => {
      if (element3) {
        observer.unobserve(element3);
      }
    };
  }, []);

  return (
    <section
      id="process"
      className="pt-20 h-auto flex flex-col items-center justify-center bg-yblue text-gold p-8 scroll-mt-12"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="zoom-in">
          Cztery Etapy Spełniania Marzeń
        </h2>
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-y-24 relative z-10">
        {[
          {
            title: "Opowiedz czego pragniesz",
            src: "./image/proces1.png",
            quote:
              "Najpierw Cię słuchamy – możesz skontaktować się z nami w sposób, który Ci odpowiada: telefonicznie, osobiście lub online. Niezależnie od tego, czy masz już konkretną wizję, czy dopiero szukasz inspiracji, pomożemy Ci znaleźć najlepsze rozwiązanie. Czy to symbol ważnej chwili, wyjątkowy prezent, czy ponadczasowa biżuteria– wspólnie odkryjemy, co będzie dla Ciebie idealne.",
          },
          {
            title: "Wizja to dopiero początek",
            src: "./image/proces2.png",
            quote:
              "Pomysły nabierają kształtu – tworzymy projekt i wizualizację, dzięki której zobaczysz swoją biżuterię zanim powstanie. Wspólnie dobieramy kształt, materiały i kamienie dbając o każdy detal. To Ty decydujesz o finalnym efekcie.",
          },
          {
            title: "Mistrzowska precyzja",
            src: "./image/proces3.png",
            quote:
              "Tworzenie biżuterii to sztuka, w której liczy się każdy szczegół. Każdy element jest dopracowany ręcznie przez mistrzów rzemiosła, dbających o idealne proporcje, wyjątkowy blask i unikalny charakter. Nadzorujemy cały proces, by mieć pewność, że efekt końcowy będzie czymś więcej niż biżuterią – ponadczasowym symbolem piękna i emocji.",
          },
          {
            title: "Marzenie staje się rzeczywistością",
            src: "./image/proces4.png",
            quote:
              "Ostatni krok to Twoja chwila – moment, w którym biżuteria trafia w Twoje ręce. Nie jest to już tylko przedmiot, ale emocje, zachwyt i radość. Marzenie stworzone specjalnie dla Ciebie, które możesz zobaczyć, dotknąć i poczuć. Niezależnie od tego, gdzie jesteś, dostarczymy ją tam, gdzie chcesz.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } relative`}
            data-aos="zoom-in"
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={item.src}
                alt={item.title}
                className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-lg shadow-light-gold transition-all duration-500 transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-sm italic text-gold-light mt-2 text-center">
                {item.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
