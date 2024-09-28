import React from "react";
import { useNavigate } from "react-router-dom";

const PackageCard = ({pkg}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/package/${pkg.id}`);
  }

  return (
    <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={pkg.image}
        alt={pkg.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
        <p className="text-blueGrey font-semibold mb-4">{pkg.location}</p>
        <div className="flex justify-between items-center">
          <span className="text-blueGrey text-2xl font-bold">
            INR {pkg.price.toLocaleString()}
          </span>
          <button className="bg-blueGrey/90 text-white px-4 py-2 rounded-md hover:bg-blueGreen transition" 
              onClick={handleClick}
          >
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
