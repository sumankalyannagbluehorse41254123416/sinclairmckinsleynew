"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SliderBannerProps {
  slides: string[];
}

export default function SliderBanner({ slides }: SliderBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (step: number) => {
    let newIndex = currentSlide + step;

    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;

    setCurrentSlide(newIndex);
  };

  const prevSlide = (step: number) => {
    nextSlide(step);
  };

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides]);

  if (!slides.length) return null;

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

      <span
        className="controls"
        id="left-arrow"
        onClick={() => prevSlide(-1)}
      >
        <i className="fa fa-arrow-left" />
      </span>

      <span
        className="controls"
        id="right-arrow"
        onClick={() => nextSlide(1)}
      >
        <i className="fa fa-arrow-right" />
      </span>
    </div>
  );
}
