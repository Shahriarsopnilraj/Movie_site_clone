import React from "react";
import {
  Swiper as SwiperCarousel,
  SwiperSlide,
} from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

// Import your images
import slider1 from "../assets/banner.jpg";
import slider2 from "../assets/banner2.jpg";
import slider3 from "../assets/movie.jpg";
import slider4 from "../assets/squad.webp";
import slider5 from "../assets/Wednesday.webp";

export default function ImageCarousel() {
  const images = [slider1, slider2, slider3, slider4, slider5];

  return (
    <>
      {/* Inline CSS for Swiper dots */}
      <style>
        {`
          
        `}
      </style>

      <div className="w-full h-[60vh] object-cover md:h-[70vh] lg:h-[90vh] ">
        <SwiperCarousel
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          
          className="mySwiper "
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </SwiperSlide>
          ))}
        </SwiperCarousel>
      </div>
    </>
  );
}
