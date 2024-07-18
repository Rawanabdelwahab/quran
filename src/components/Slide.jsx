/* eslint-disable no-unused-vars */
import React from "react";
import MuiImageSlider from "mui-image-slider";

export default function Slide() {
  const images = [
    'https://aldani.org/files/fa50dc522ade44c89e4400a52792bf74.jpg',
    'https://aldani.org/files/9bf09db48b39194763dfad0c3d5f0d63.jpg'
  ];

  return (
    <div>
    
      <MuiImageSlider images={images} autoPlay={true} />
    </div>
  );
}
