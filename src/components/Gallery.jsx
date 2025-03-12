import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <FaArrowRight size={30} color="gray" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <FaArrowLeft size={30} color="gray" />
  </div>
);

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageWidth, setImageWidth] = useState("70%");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      const aspectRatio = window.innerWidth / window.innerHeight;
      if (aspectRatio > 1.5) {
        setImageWidth("50%");
      } else if (aspectRatio > 1) {
        setImageWidth("60%");
      } else {
        setImageWidth("80%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: true,
    arrows: !isMobile,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "linear",
  };

  const images = [
    { src: "./image/galeria1.jpg", desc: "" },
    { src: "./image/galeria2.jpg", desc: "" },
    { src: "./image/galeria3.jpg", desc: "" },
    { src: "./image/galeria4.jpg", desc: "" },
    { src: "./image/galeria5.jpg", desc: "" },
    { src: "./image/galeria6.jpg", desc: "" },
    { src: "./image/galeria7.jpg", desc: "" },
    { src: "./image/galeria8.jpg", desc: "" },
    { src: "./image/galeria9.jpg", desc: "" }
  ];

  return (
    <section id="gallery" className="h-screen pt-12 flex items-center justify-center bg-yblue text-gold px-4 relative pb-12">
      <div className="container mx-auto text-center px-4 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl font-segoe ui italic mb-12">Poznaj kilka przykładów biżuterii, którą stworzyliśmy dla naszych klientów.</h2>
        <div className="w-full max-w-3xl mx-auto relative">
          <Slider {...sliderSettings}>
            {images.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center relative">
                <img
                  src={item.src}
                  alt={`Galeria ${index + 1}`}
                  className="object-cover rounded-lg mx-auto shadow-light-gold"
                  style={{ width: imageWidth }}
                />
                <p className="text-gold text-lg font-semibold mt-2 text-center">{item.desc}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .custom-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          z-index: 2;
        }
        .custom-prev {
          left: 10px;
          color: "gold"
        }
        .custom-next {
          right: 10px;
          color: "gold"
        }
      `}</style>
    </section>
  );
};

export default Gallery;