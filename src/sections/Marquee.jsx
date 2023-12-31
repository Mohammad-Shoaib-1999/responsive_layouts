import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img1, img2, img3, img4, img5, img6, img7 } from "../assets/images";
// import "./marquee.css";

const data = [
  { img: img1, name: "company1" },
  { img: img2, name: "company2" },
  { img: img3, name: "company3" },
  { img: img4, name: "company4" },
  { img: img5, name: "company5" },
  { img: img6, name: "company6" },
  { img: img7, name: "company7" },
  { img: img7, name: "company8" },
  { img: img6, name: "company9" },
  { img: img1, name: "company11" },
  { img: img1, name: "company10" },
  { img: img2, name: "company12" },
  { img: img3, name: "company13" },
  { img: img4, name: "company14" },
  { img: img5, name: "company15" },
  { img: img6, name: "company16" },
  { img: img7, name: "company17" },
  { img: img7, name: "company18" },
  { img: img6, name: "company19" },
];

const Marquee = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="  ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            // className="flex justify-center items-center gap-4 text-center "
          >
            <div className="flex justify-center items-center flex-col p-4  shadow-2xl ">
              {/* <img
                src={review.imgURL}
                alt={review.name}
                className="mx-auto rounded-full object-cover w-[120px] h-[120px] bg-white"
              /> */}
              <div className=" w-16 h-16 rounded-full bg-black flex"></div>
              {/* <p className="mt-6 max-w-sm text-center info-text">
                {review.feedback}
              </p>
              <p className="text-xl font-montserrat text-slate-gray">
                ({review.rating})
              </p>
              <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                {review.customerName}
              </h3> */}
              <div className="">{item.name}</div>
            </div>
            {/* <p>{review.name}</p> */}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Marquee;
