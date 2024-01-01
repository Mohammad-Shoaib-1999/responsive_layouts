
import { reviews } from "../constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { review1, review2, review3 } from "../assets/videos";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick} />;
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick} />;
};

const videoReviews = [
    {
      videoURL: review1,
      customerName: 'Morich Brown',
      rating: 4.5,
      feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
      videoURL: review2,
      customerName: 'Lota Mongeskar',
      rating: 4.5,
      feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
      videoURL: review3,
      customerName: 'John doe',
      rating: 4.5,
      feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
  ];
const CustomerVideoReviews = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
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
      {videoReviews.map((review, index) => (
        <div
          key={index}
          // className="flex justify-center items-center gap-4 text-center "
        >
          <div className="flex justify-center items-center flex-col p-4  shadow-2xl ">
          <video width="320" height="240" controls >
  <source src={review.videoURL} type="video/mp4"/>
  
  </video>
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

export default CustomerVideoReviews;
