import React, { useState, useEffect } from 'react';

const Carousel = ({ slides, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    let intervalId;

    if (autoPlay) {
      intervalId = setInterval(goToNextSlide, 3000); // Adjust the interval as needed (in milliseconds)
    }

    return () => clearInterval(intervalId);
  }, [autoPlay]);

  return (
    <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true }' className="relative">
      <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
        <div
          className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides && slides.map((slide, index) => (
            <div key={index} className="hs-carousel-slide">
              <div className={`flex justify-center h-full ${slide.bgClass} p-6`}>
                <span className="self-center text-4xl transition duration-700">{slide.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        onClick={goToPrevSlide}
      >
        <span className="text-2xl" aria-hidden="true">
          &lt;
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        onClick={goToNextSlide}
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          &gt;
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        {slides && slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 border border-gray-400 rounded-full cursor-pointer ${
              index === currentIndex ? 'hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
