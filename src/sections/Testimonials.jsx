import { reviews } from "../constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick} />;
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick} />;
};

const Testimonials = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };
  // const Testimonials = () => {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="overflow-x-hidden"
        >
          <div className="flex justify-center items-center flex-col p-4  shadow-2xl ">
            <img
              src={review.imgURL}
              alt={review.name}
              className="mx-auto rounded-full object-cover w-[120px] h-[120px] bg-white"
            />
            <p className="mt-6 max-w-sm text-center info-text">
              {review.feedback}
            </p>
            <p className="text-xl font-montserrat text-slate-gray">
              ({review.rating})
            </p>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
              {review.customerName}
            </h3>
          </div>
          <p>{review.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
// import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import 'tailwindcss/tailwind.css';

// const Testimonials = () => {
//   const settings = {
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     speed: 300,
//     infinite: true,
//     autoplaySpeed: 5000,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="wrapper bg-blue-100 p-8 overflow-x-hidden">
//       <Slider {...settings} className="my-slider px-8">
//         <div className="slick-slide bg-red-500 text-white h-48 mr-4 flex items-center justify-center">
//           Slide 1
//         </div>
//         <div className="slick-slide bg-red-500 text-white h-48 mr-4 flex items-center justify-center">
//           Slide 2
//         </div>
//         <div className="slick-slide bg-red-500 text-white h-48 mr-4 flex items-center justify-center">
//           Slide 3
//         </div>
//         <div className="slick-slide bg-red-500 text-white h-48 mr-4 flex items-center justify-center">
//           Slide 4
//         </div>
//         <div className="slick-slide bg-red-500 text-white h-48 mr-4 flex items-center justify-center">
//           Slide 5
//         </div>
//         <div className="slick-slide bg-red-500 text-white h-48 flex items-center justify-center">
//           Slide 6
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;
