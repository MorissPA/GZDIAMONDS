import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="about"
      className="pt-20 min-h-screen flex flex-col items-center justify-center bg-yblue text-gold p-8"
      data-aos="zoom-in"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src="./image/about_us.jpg"
            alt="O nas"
            className="rounded-full mb-4 md:mb-0 md:mr-8 w-auto h-96 object-cover shadow-light-gold"
          />
          <p className="text-2xl max-w-lg">
            Jesteśmy pasjonatami złota i diamentów, którzy zamieniają marzenia w rzeczywistość.
            Tworzymy biżuterię, opowiadającą historię - Twoją historię.
            Każdy projekt to indywidualna opowieść zapisana w szlachetnych kruszcach i kamieniach. Chcesz dowiedzieć się więcej?
            <span 
              onClick={() => setExpanded(!expanded)}
              className="text-gold cursor-pointer underline hover:text-gold-dark transition"
            >
              {expanded ? "Zwiń" : "Poznaj naszą drogę"}
            </span>
          </p>
        </div>

        {/* Sekcja rozwijana */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${expanded ? "h-auto w-auto opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-6 p-6 bg-black text-gold rounded-lg shadow-md">
            <p className="text-lg">
              Zaczęło się od pasji – fascynacji diamentami i pięknem biżuterii. Niemal dekadę temu zaczęliśmy tworzyć pierwsze projekty na własny użytek, ale szybko dostrzegliśmy,
              że nasza miłość do detali może spełniać marzenia innych. Rodzina, przyjaciele, znajomi – każdy miał swoją wizję idealnej biżuterii, a my mogliśmy ją urzeczywistnić.
              Pierścionki zaręczynowe, odtworzone pamiątki rodzinne, unikalne projekty na wyjątkowe okazje – każde zlecenie było dla nas wyzwaniem. Zamiast mówić, że czegoś nie da się zrobić,
              szukaliśmy sposobów, by zamieniać marzenia w rzeczywistość.
              Dziś nie chodzi już tylko o naszą pasję. Liczy się Twoja historia, emocje i potrzeby. Niezależnie od tego, czy szukasz symbolu ważnej chwili, czy po prostu czegoś wyjątkowego –
              jesteśmy tu, by pomóc Ci stworzyć biżuterię, która stanie się częścią Twojej historii.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
