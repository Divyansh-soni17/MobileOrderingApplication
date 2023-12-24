import React from "react";
import { Link } from "react-router-dom";

const MobileCard = ({ mobile }) => {
  const { name, price, type, processor, memory, os, images } = mobile;

  // Use the first image from the images array
  const imageUrl = images.length > 0 ? images[0].url : "";

  return (
    <div className="max-w-md mx-2 my-4 p-4 bg-gray-200 rounded-md overflow-hidden shadow-md transform hover:translate-y-[-7px] transition-transform duration-200">
      <Link to={mobile._id}>
        <img src={imageUrl} alt="Mobile" className="w-full h-36 object-cover mb-2" />

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
          <p className="text-gray-600 mb-2">₹{price}</p>

          <div className="flex flex-wrap mb-2 text-sm">
            <div className="w-1/2 pr-2  mb-1">
              <p className="text-gray-500">Type:</p>
              <p className="font-semibold">{type}</p>
            </div>
            <div className="w-1/2 pl-2 mb-1">
              <p className="text-gray-500">Processor:</p>
              <p className="font-semibold">{processor}</p>
            </div>
            <div className="w-1/2 pr-2 mb-1">
              <p className="text-gray-500">Memory:</p>
              <p className="font-semibold">{memory}</p>
            </div>
            <div className="w-1/2 pl-2 mb-1">
              <p className="text-gray-500">OS:</p>
              <p className="font-semibold">{os}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MobileCard;
