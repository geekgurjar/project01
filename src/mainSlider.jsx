import React, { useState, useEffect } from 'react';
import './Slider.css'; // Assuming you'll extract the styles into a separate CSS file

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      title: 'Customise Menu',
      description: 'Choose from a wide range of meals and enjoy a customized BiteBox',
      backgroundColor: 'rgb(36, 46, 71)',
      imageUrl: 'https://i.postimg.cc/cLFrXnKZ/Designer-9.png',
      boxcolor:'rgb(102, 93, 148)',
    },
    {
      title: 'Your BiteBox',
      description: 'Receive your BiteBox right at your door!',
      backgroundColor: 'rgb(221, 183, 149)',
      imageUrl: 'https://i.postimg.cc/zvM1yqvs/Designer-6.png',
      boxcolor:'rgb(180, 156, 124)',
    },
    {
      title: 'From your nearby places',
      description: 'Explore a range of meal options available nearby',
      backgroundColor: 'rgb(147, 213, 232)',
      imageUrl: 'https://i.postimg.cc/jSfJd5Cr/Designer-5.png',
      boxcolor:'rgb(88, 143, 161)',
    },
    {
      title: 'Subscription',
      description: 'Select the subscription length that perfectly suits your needs.',
      backgroundColor: 'rgb(255, 181, 113)',
      imageUrl: 'https://i.postimg.cc/NfCjqw4v/Designer-4.png',
      boxcolor:' rgb(185, 168, 146)',
    },
  ];

  const slidesLength = slides.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      changeSlide('up');
    }, 3000);
    
    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, []);

  const changeSlide = (direction) => {
    const sliderHeight = window.innerHeight * 0.4; // 50vh = 50% of the viewport height
    if (direction === 'up') {
      setActiveSlideIndex((prev) => (prev + 1) % slidesLength);
    } else {
      setActiveSlideIndex((prev) => (prev - 1 + slidesLength) % slidesLength);
    }

    // Update the transformation
    document.querySelector('.left-slide').style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
    document.querySelector('.right-slide').style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  };

  return (
    <>
    <div className="slider-container">
      <div className="left-slide" style={{ top: `-${(slidesLength - 1) * 40}vh`, transform: `translateY(${activeSlideIndex * 40}vh)` }}>
        {slides.map((slide, index) => (
          <div key={index} style={{ backgroundColor: slide.backgroundColor }}>
            <h1>{slide.title}</h1>
            <div className='text-discription' style={{ backgroundColor: slide.boxcolor }}><p>{slide.description}</p></div>
            
          </div>
        ))}
      </div>
      <div className="right-slide" style={{ transform: `translateY(-${activeSlideIndex * 40}vh)` }}>
        {slides.map((slide, index) => (
          <div key={index} style={{ backgroundImage: `url(${slide.imageUrl})` }}></div>
        ))}
      </div>
      <div className="action-buttons">
        <button className="up-button" onClick={() => changeSlide('up')}>↑</button>
        <button className="down-button px-0 py-0" onClick={() => changeSlide('down')}>↓</button>
      </div>
    </div>
    
    </>
  );
};

export default Slider;
