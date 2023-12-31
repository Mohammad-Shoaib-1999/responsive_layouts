const SuperQuality = () => {
  return (
    <section className="  ">
      <div className="flex flex-1 flex-col items-center">
        <h1 className="text-4xl capitalize lg:max-w-lg font-bold">
          Super Quality{" "}
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium confort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with inmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          {/* {" "}
          <Button label="View Details" /> */}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        /> */}
        <div className="w-[570px] h-[522px] bg-black"></div>
      </div>
    </section>
  );
};

export default SuperQuality;
