import React, { useState } from "react";
import SliderData from "./SliderData";

const Slider = () => {
  const [currentImg, setCurrentImg] = useState(0);
  //   const length = slides.length;
  return (
    <>
      <p>This is from Slider</p>
      <img key={1} src="https://unsplash.com/photos/LqKhnDzSF-8" />
      {SliderData.map((slide, index) => {
        <div>
          <img src={slide.image} key={index} alt="image" />
        </div>;
      })}
    </>
  );
};

export default Slider;
