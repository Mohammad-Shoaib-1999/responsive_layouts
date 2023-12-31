const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-16 rounded-30 bg-gray-300 shadow-2xl">
      <div className="w-11 h-11 flex justify-center items-center bg-white rounded-full">
        {/* <img src={imgURL} alt="label" width={24} height={24} /> */}
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
