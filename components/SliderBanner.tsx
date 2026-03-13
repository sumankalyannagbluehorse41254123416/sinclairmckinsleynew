"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SliderBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/banking_img11.jpg",
    "/images/banner_img2.png",
    "/images/slider3.jpg",
  ];

  const nextSlide = (step: number) => {
    let newIndex = currentSlide + step;

    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;

    setCurrentSlide(newIndex);
  };

  const prevSlide = (step: number) => {
    nextSlide(step);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div id="slider_banner">
      {slides.map((img, index) => (
        <div
          key={index}
          className="slide_banner"
          style={{ display: currentSlide === index ? "block" : "none" }}
        >
          <Image src={img} alt="banner" width={766} height={396} />
        </div>
      ))}

      {/* Controlling arrows */}
      <span
        className="controls"
        id="left-arrow"
        onClick={() => prevSlide(-1)}
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </span>

      <span
        className="controls"
        id="right-arrow"
        onClick={() => nextSlide(1)}
      >
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </span>
    </div>
  );
}
