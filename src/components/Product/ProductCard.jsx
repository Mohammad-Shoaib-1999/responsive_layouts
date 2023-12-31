const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col w-full max-sm:w-full  p-10 rounded-30 bg-gray-300 shadow-2xl">
      <div className="w-[280px] h-[280px] bg-white">
        {/* <img src={imgURL} alt={name} className="w-[280px] h-[280px]" /> */}
      </div>
      <div className="mt-8 flex justify-center gap-2.5">
        <div className="w-[24px] h-[24px] bg-white">
          {/* <img src={star} alt="rating" width={24} height={24} /> */}
        </div>
        <p className=" text-xl leading-normal text-slate-gray">{/* (4.5) */}</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold ">{name}</h3>
      <p className="mt-2 font-semibold  text-2xl leading-normal">
        {/* Price */}
      </p>
    </div>
  );
};

export default ProductCard;
