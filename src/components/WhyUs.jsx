import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  const benefits = [
    { title: 'Indywidualne podejście', text: 'Każdy projekt jest tworzony specjalnie dla Ciebie.' },
    { title: 'Luksus bez kompromisów', text: 'Używamy tylko najwyższej jakości materiałów.' },
    { title: 'Biżuteria od serca', text: 'Tworzymy biżuterię, która ma znaczenie.' },
  ];

  return (
    <section
      id="why-us"
      className="relative h-auto flex flex-col items-center justify-center bg-yblue text-gold font-serif p-8 "
    >
      <div className="text-center max-w-7xl">
        <h2 className="text-5xl font-bold mb-6">Dlaczego my?</h2>
        <h3 className="text-3xl font-semibold mb-8 text-gold-light">
          Trzy kluczowe korzyści
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-black-light p-6 rounded-lg shadow-lg border border-gold flex flex-col items-center"
            >
              <CheckCircle className="w-12 h-12 text-gold mb-4" />
              <h4 className="text-5xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gold-light text-2xl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;