import React, { useState } from 'react';
import { CarImageSlider } from './components/CarImageSlider';
import { CarOverview } from './components/Card/CarOverview';
import { PriceCalculator } from './components/Price/PriceCalculator';
import Navbar from './components/Navbar';
import img1 from "./assets/car/1.jpg";
import img2 from "./assets/car/2.jpg";
import img3 from "./assets/car/3.jpg";
import img4 from "./assets/car/4.jpg";
import img5 from "./assets/car/5.jpg";
import img6 from "./assets/car/6.jpg";
import img7 from "./assets/car/7.jpg";
import img8 from "./assets/car/8.jpg";
import img9 from "./assets/car/9.jpg";
import img10 from "./assets/car/10.jpg";

const carData = {
  model: "Hyundai Aura",
  year: 2023,
  mileage: 20,
  price: 10,
  images: [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
  ]
}

export default function CarShowcase() {
  const [invites, setInvites] = useState();
  const [duration, setDuration] = useState();
  const [calculatedValue, setCalculatedValue] = useState();

  const handleCalculate = () => {
    if (invites && duration && invites > 0 && duration > 0) {
      setCalculatedValue(invites * duration * 10);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-r from-blue-200 to-white min-h-screen text-black">
      <Navbar></Navbar>
      <div className="flex flex-col space-y-8">
        {/* Flex container for slider and car overview */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
          {/* Car Image Slider */}
          <div className="w-full lg:w-2/3 mt-3  rounded-lg shadow-lg overflow-hidden">
            <CarImageSlider images={carData.images} />
          </div>
          {/* Car Overview */}
          <div className="w-full lg:w-1/3  rounded-lg shadow-lg p-4 sm:p-6">
            <CarOverview carData={carData} />
          </div>
        </div>
  
        {/* Price Calculator below the slider and overview */}
        <div className=" rounded-lg shadow-lg p-4 sm:p-6">
          <PriceCalculator 
            invites={invites} 
            setInvites={setInvites} 
            duration={duration} 
            setDuration={setDuration} 
            handleCalculate={handleCalculate} 
            calculatedValue={calculatedValue} 
          />
        </div>
      </div>
    </div>
  );
}
