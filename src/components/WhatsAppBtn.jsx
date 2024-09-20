import React from "react";
import { Link } from "react-router-dom";

const WhatsAppBtn = ({number, message}) => {
    const WhatsAppUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return (
    <div className="fixed bottom-4 left-4">
      <Link
        to={WhatsAppUrl}
        className="bg-green-500 w-16 flex items-center text-center h-16 text-white rounded-full p-4 drop-shadow-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <i className="fi fi-brands-whatsapp text-4xl"></i>
      </Link>
    </div>
  );
};

export default WhatsAppBtn;
