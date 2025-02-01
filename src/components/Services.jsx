import React from 'react';

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Usługa 1</h3>
            <p className="text-gray-700">Opis usługi 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Usługa 2</h3>
            <p className="text-gray-700">Opis usługi 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Usługa 3</h3>
            <p className="text-gray-700">Opis usługi 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;