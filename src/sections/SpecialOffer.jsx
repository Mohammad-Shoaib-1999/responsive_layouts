const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container bg-gray-200 shadow-2xl ">
      <div className="flex-1">
        {/* <div className="w-[673px] h-[687px] bg-gray-500"></div> */}
        {/* <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        /> */}
      </div>
      <div className="flex flex-1 flex-col items-center">
        <h1 className="text-4xl capitalize lg:max-w-lg font-bold">
          <span className="">Special</span> Offer
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on shopping journey that redefines your expriance with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparaleled value that sets us apart
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibiliteis designed to fulfill your unique
          desires, surpassing the loftiest expectations. YOur journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {/* <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          /> */}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
