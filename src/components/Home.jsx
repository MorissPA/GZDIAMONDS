import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center bg-blue-50 relative overflow-hidden"
      style={{
        backgroundImage: 'url(./image/footer_background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="w-full h-screen flex flex-col items-center justify-center text-center relative z-10 px-4">
        <img
          src="./image/LOGOGOLD.png"
          alt="Naszyjnik 2"
          className="w-full h-full object-contain max-w-screen-lg"
        />

      </div>
    </section>
  );
};

export default Home;
