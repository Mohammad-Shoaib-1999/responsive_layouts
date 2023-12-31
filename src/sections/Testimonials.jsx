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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <div
          key={index}
          // className="flex justify-center items-center gap-4 text-center "
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
