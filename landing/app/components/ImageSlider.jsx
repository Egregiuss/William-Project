"use client"
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import testImg from "../images/insta.png"

// const ImageSlider = ({ images }) => {
//     return (
//       <Swiper
//         spaceBetween={10}
//         slidesPerView={3}
//         navigation
//         loop={true}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img src={image} alt={`Image ${index}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     );
//   };
  
//   export default ImageSlider;


import { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => handleImageClick(index)}
        />
      ))}
      <style jsx>{`
        .image-slider {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-slider img {
          width: 100px; /* Adjust the size as needed */
          margin: 5px; /* Adjust the spacing as needed */
          cursor: pointer;
        }
        .image-slider img.active {
          width: 150px; /* Adjust the size of the active image */
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;