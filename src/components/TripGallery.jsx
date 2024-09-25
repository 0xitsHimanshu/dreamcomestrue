import tajImage from "../assets/taj-mahal.jpg";
import eifleImage from "../assets/eifle-tower.jpg";
import kajuruImage from "../assets/kajuru-castle.jpg";
import cardImg from "../assets/cardImage.png";
import { useNavigate } from "react-router-dom";

const TripCard = ({ preview, title, location, trips, className }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.45)] ${className}`}
    >
      <img
        src={preview}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        alt={title}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm">
          {location}, {trips} Trips
        </p>
      </div>
    </div>
  );
};

const TripGallery = () => {
  const navigate = useNavigate();

  const handleSeeAllJourneys = () => {
    navigate("/trip-gallery");
  };

  const trips = [
    {
      preview: eifleImage,
      title: "Eiffel Tower",
      location: "Paris",
      trips: 24,
    },
    {
      preview: kajuruImage,
      title: "Pryde mountains",
      location: "Prydelands",
      trips: 100,
    },
    {
      preview: cardImg,
      title: "Lao Lading Island",
      location: "Krabi",
      trips: 12,
    },
    {
      preview: tajImage,
      title: "Ton Kwen Temple",
      location: "Thailand",
      trips: 20,
    },
    { preview: tajImage, title: "Taj Mahal", location: "Thailand", trips: 50 },
  ];

  return (
    <div className="my-5 py-8 px-16 flex flex-col items-center justify-center max-md:px-8 max-sm:px-4 lg:mx-32">
      {/* Header Section */}
      <div className="text-blueGrey mb-10">
        <p className="font-playfair text-xl text-center">Trip Gallery</p>
        <h2 className="font-playfair text-3xl font-semibold text-center">
          Completed Journeys
        </h2>
      </div>

      {/* Trip Cards */}
      <div className="grid grid-cols-3 gap-12 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-2 max-sm:gap-6">
        <TripCard
          {...trips[0]}
          className="col-span-1 w-auto h-97 max-h-[500px] max-md:w-full max-md:h-[300px] max-sm:h-[250px]"
        />
        <TripCard
          {...trips[1]}
          className="col-span-2 w-auto h-97 max-h-[500px] max-md:col-span-1 max-md:w-full max-md:h-[300px] max-sm:h-[250px]"
        />
        <TripCard
          {...trips[2]}
          className="col-span-1 w-auto h-97 max-h-[500px] max-md:w-full max-md:h-[300px] max-sm:h-[250px]"
        />
        <TripCard
          {...trips[3]}
          className="col-span-1 w-auto h-97 max-h-[500px] max-md:w-full max-md:h-[300px] max-sm:h-[250px]"
        />
        <TripCard
          {...trips[4]}
          className="col-span-1 w-auto h-97 max-h-[500px] max-md:w-full max-md:h-[300px] max-sm:h-[250px] max-sm:col-span-2"
        />
      </div>

      {/* Button Section */}
      <div className="mt-10">
        <button
          className="bg-neonGreen text-black py-2 px-6 rounded-full font-semibold flex items-center max-sm:px-4 max-sm:py-3"
          onClick={handleSeeAllJourneys}
        >
          See all journeys
          <i className="fi fi-br-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default TripGallery;
