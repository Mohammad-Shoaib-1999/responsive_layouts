
import { useState } from "react";
import ReactPlayer from "react-player";

const VideoTestimonialCard = ({ name, message, videoUrl }) => {
  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    

    <div className="flex justify-center items-center flex-col p-4 bg-gray-300 shadow-2xl ">
      <ReactPlayer
        url={videoUrl}
        playing={isPlaying}
        controls
        width="100%"
        height="auto"
      />
      <p className="mt-6 max-w-sm text-center info-text">{message}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        {/* <img
          src={star}
          alt=""
          className="Object-contain m-0"
          width={24}
          height={24}
        /> */}
        {/* <p className="text-xl font-montserrat text-slate-gray">({rating})</p> */}
      </div>

      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {name}
      </h3>

      {/* <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
   

  );
};

export default VideoTestimonialCard;
  {/* <VideoTestimonialCard
          key={review.customerName}
          videoUrl={review.videoURL} 
          name={review.customerName} 
          message={review.feedback} 
        /> */}