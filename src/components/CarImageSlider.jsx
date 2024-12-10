import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export function CarImageSlider({ images }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Enables auto-scrolling
    autoplaySpeed: 3000,  // Set to 3 seconds, adjust as needed
    pauseOnHover: true,  // Stops scrolling when the user hovers over the slider
  }

  return (
    <Slider {...sliderSettings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Car view ${index + 1}`} className="w-2/3 max-w-sm mx-auto h-auto" />
        </div>
      ))}
    </Slider>
  )
}
