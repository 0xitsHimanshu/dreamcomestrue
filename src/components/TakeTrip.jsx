import cardImg from "../assets/cardImage.png";

const TakeTrip = () => {
  return (
    <>
      {/* Take trip btn with p  */}
      <div className="my-5 py-4 px-16 flex items-center justify-between max-sm:text-center max-md:px-8 max-sm:grid max-sm:grid-cols-1 lg:mx-32">
        {/* heading */}
        <div className="text-blueGrey text-left my-10">
          <span className="font-bold text-lg">Where do you want to go?</span>
          <h1 className="text-5xl font-bold mt-4 font-playfair">
            Lets us worry about your plans,
          </h1>
          <h1 className="text-5xl font-bold font-playfair">Just get packed</h1>
        </div>

        {/* Take trip btn*/}
        <div className="max-sm:flex max-sm:justify-center">
          <button className="bg-neonGreen text-blueGrey py-3 px-9 rounded-full font-semibold flex items-center justify-center gap-3">
            <span>Take a trip</span>
            <span className="flex items-center">
              <i className="fi fi-rr-arrow-right text-xl"></i>
            </span>
          </button>
        </div>
      </div>

      {/* Rent a car and get a hotel */}
      <div className="my-5 py-4 px-16 flex items-center justify-between max-md:px-8 max-md:flex-col max-sm:px-4 max-sm:grid max-sm:grid-cols-1 max-sm:gap-16 lg:mx-32">
        <div className="flex max-md:flex-col max-md:items-center md:gap-4 lg:gap-8">
          {/* Image */}
          <div className="w-99 h-100 max-sm:w-full max-sm:h-auto">
            <img src={cardImg} className="w-full h-full object-cover " alt="" />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 py-5 my-10 gap-6 max-sm:my-5 max-sm:mx-5  max-sm:gap-4 max-md:py-0 max-md:my-5">
            {/* Rent a car */}
            <div className="text-blueGrey">
              <i className="fi fi-rs-taxi text-4xl max-sm:text-4xl"></i>
              <h2 className="text-4xl font-semibold font-playfair max-sm:text-2xl">
                Rent a car
              </h2>
              <p className="text-xl font-normal line-clamp-2 max-sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id
                culpa quaerat adipisci.
              </p>
              <button className="underline mt-2 font-bold">
                Lets Go
                <i className="fi fi-br-arrow-right"></i>
              </button>
            </div>

            {/* Get a hotel */}
            <div className="text-blueGrey">
              <i className="fi fi-rr-bed text-4xl max-sm:text-4xl"></i>
              <h2 className="text-4xl font-semibold font-playfair max-sm:text-2xl">
                Get a hotel
              </h2>
              <p className="text-xl font-normal line-clamp-2 max-sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id
                culpa quaerat adipisci.
              </p>
              <button className="underline mt-2 font-bold">
                Lets Go
                <i className="fi fi-br-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeTrip;
