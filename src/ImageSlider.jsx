


import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  const slides = [
    {
      image: "https://i.postimg.cc/jSfJd5Cr/Designer-5.png",
      text: "Get Your BiteBox"
    },
    {
      image: "https://i.postimg.cc/cLFrXnKZ/Designer-9.png",
      text: "Subscribe !"
    },
    {
      image: "https://i.postimg.cc/NfCjqw4v/Designer-4.png",
      text: "Customise Your Menu"
    },

    {
      image: "https://i.postimg.cc/zvM1yqvs/Designer-6.png",
      text: "From Trusted Ones"
    },

  ];

  const lengthitems = slides.length - 1;

  const nextSlide = () => {
    setActive(active === lengthitems ? 0 : active + 1);
  };

  const prevSlide = () => {
    setActive(active === 0 ? lengthitems : active - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [active]);

  const reloadSlider = (key) => {
    setActive(key);
  };

  return (
    <>
      <div className="slider">
        <div className="list" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide.image} alt={`slide${index + 1}`} />
              <div className="text-overlay">
                <h2>{slide.text}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={prevSlide}>&lt;</button>
          <button id="next" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
