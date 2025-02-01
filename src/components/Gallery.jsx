import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ isScrolled, isAnimated }) => {
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

    const gallerySection = document.getElementById("gallery");
    if (gallerySection) observer.observe(gallerySection);

    return () => {
      if (gallerySection) observer.unobserve(gallerySection);
    };
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-1/2 -translate-x-16 bottom-[-40px] bg-gold text-black px-3 py-2 rounded-full shadow-lg hover:bg-gold-dark transition"
    >
      &#8592;
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-1/2 -translate-x-2 bottom-[-40px] bg-gold text-black px-3 py-2 rounded-full shadow-lg hover:bg-gold-dark transition"
    >
      &#8594;
    </button>
  );

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section
      id="gallery"
      className={`min-h-screen flex items-center justify-center bg-black text-gold font-serif ${
        inView || isScrolled || isAnimated ? "animate-fadeIn" : ""
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Galeria</h2>
        <p className="text-gold-light mb-8">
          Zobacz nasze najnowsze projekty i zainspiruj się pięknem naszej biżuterii.
        </p>

        {/* Kontener na 3 slidery obok siebie */}
        <div className="flex flex-row justify-center gap-12">
          {/* Sekcja Naszyjniki */}
          <div className="w-1/3 text-center">
            <h3 className="text-2xl font-semibold mb-4">Naszyjniki</h3>
            <div className="w-full relative">
              <Slider {...sliderSettings}>
                <div>
                  <img
                    src="./image/gallery_necklace1.jpg"
                    alt="Naszyjnik 1"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="./image/gallery_necklace1.jpg"
                    alt="Naszyjnik 2"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="./image/gallery_necklace1.jpg"
                    alt="Naszyjnik 3"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Slider>
            </div>
          </div>

          {/* Sekcja Pierścionki */}
          <div className="w-1/3 text-center">
            <h3 className="text-2xl font-semibold mb-4">Pierścionki</h3>
            <div className="w-full relative">
              <Slider {...sliderSettings}>
                <div>
                  <img
                    src="./image/gallery_ring1.jpg"
                    alt="Pierścionek 1"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="./image/gallery_ring1.jpg"
                    alt="Pierścionek 2"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="./image/gallery_ring1.jpg"
                    alt="Pierścionek 3"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Slider>
            </div>
          </div>

          {/* Sekcja Bransoletki */}
          <div className="w-1/3 text-center">
            <h3 className="text-2xl font-semibold mb-4">Bransoletki</h3>
            <div className="w-full relative">
              <Slider {...sliderSettings}>
                <div>
                  <img
                    src="./image/gallery_earrings1.jpg"
                    alt="Bransoletka 1"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="./image/gallery_earrings1.jpg"
                    alt="Bransoletka 2"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="./image/gallery_earrings1.jpg"
                    alt="Bransoletka 3"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
