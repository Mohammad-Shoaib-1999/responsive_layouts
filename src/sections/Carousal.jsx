import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img1, img2, img3, img4, img5, img6, img7 } from "../assets/images";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick} />;
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick} />;
};

const data = [
  { img: img1, name: "company1" },
  { img: img2, name: "company2" },
  { img: img3, name: "company3" },
  { img: img4, name: "company4" },
  { img: img5, name: "company5" },
  { img: img6, name: "company6" },
  { img: img7, name: "company7" },
];

const Carousel = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

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
      {data.map((item, index) => (
        <div key={index} className="flex justify-center items-center gap-4 text-center ">
          <img
            src={item.img}
            alt={item.name}
            className="mx-auto rounded-full bg-white"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            }}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;


