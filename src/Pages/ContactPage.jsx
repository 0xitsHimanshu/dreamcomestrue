import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import background from "../assets/video.mp4";
import { Link, useNavigate } from "react-router-dom";
import WhatsAppBtn from "../components/WhatsAppBtn";

const ContactPage = () => {
  const heading = (
    <>
      "Ready for a trip. <span className="text-neonGreen">Connect</span> with
      Us!"
    </>
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interestedIn: "Goa Trip",
    numberOfPerson: "1 person",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setMessageSent(true);
    // Here you would typically send the data to a server
  };

  const destinations = [
    "Goa Trip",
    "Kerala Backwaters",
    "Rajasthan Tour",
    "Himalayan Trek",
  ];

  const contactNum = "+919899066493";

  return (
    <div className="max-sm:h-[70%] ">
      <section className="relative bg-cover bg-center">
        <HeroSection
          background={background}
          heading={heading}
          height={"h-100"}
        />

        <div className="relative top-0 w-full min-h-[15vh] max-sm:min-h-[15vh] bg-[#1e1e1e] z-20 flex items-center justify-center">
          <div className="w-full h-auto py-5 px-3 absolute left-0 bg-[#1e1e1e] z-10 flex items-center justify-center">
            <div className="w-[50%] my-1 flex flex-col items-center justify-center text-justify text-white max-md:w-[70%] max-sm:w-[90%] max-sm:px-4 overflow-wrap break-word font-playfair">
              <h1 className="text-4xl pb-2 font-bold max-md:text-3xl max-sm:text-xl line-clamp-1 text-White">
                Connect with us!
              </h1>
            </div>
          </div>
        </div>

        <div className="min-h-[85%] bg-gray-200/50  flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
            <h1 className="text-5xl font-bold text-center text-blueGrey mb-2 font-playfair">
              Contact Us
            </h1>
            <p className="text-center text-blueGrey font-semibold mb-8 pb-6 border-b border-gray-300 bottom-shadow font-playfair">
              Experience the unique Nature Stays offered by Dream Comes True
              Travels
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  className="input-box"
                  placeholder="Enter Your Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="input-box"
                  placeholder="Enter Your Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  className="input-box"
                  placeholder="Enter Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="interestedIn"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interested In
                </label>
                <select
                  name="interestedIn"
                  id="interestedIn"
                  required
                  className="mt-1 block w-full h-12 pl-3 pr-10 mr-12 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  //   className="input-box pl-3 pr-10 py-2 text-base"
                  value={formData.interestedIn}
                  onChange={handleChange}
                >
                  {destinations.map((destination) => (
                    <option key={destination} value={destination}>
                      {destination}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="numberOfPerson"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Person
                </label>
                <input
                  type="text"
                  name="numberOfPerson"
                  id="numberOfPerson"
                  required
                  className="input-box placeholder-opacity-80"
                  placeholder="1 person"
                  value={formData.numberOfPerson}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1e1e1e] hover:bg-[#1e1e1e]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Send Message
                </button>
              </div>
            </form>

            {messageSent && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your message. It has been sent.
              </div>
            )}
          </div>

          {/* Contact us through call or whatsApp */}
          <div className="border-b border-gray-300 w-full"></div>
          <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8 mt-8">
            <h2 className="text-3xl font-bold text-center text-blueGrey mb-2 font-playfair">
              Or Call Us
            </h2>
            <p className="text-center text-gray-600 mb-8 font-playfair">
              Prefer to speak with us directly? Give us a call at:
            </p>
            <div className="flex justify-center items-center font-mono">
              <a
                href={`tel:${contactNum}`}
                className="text-2xl font-bold text-blueGrey hover:underline mx-auto gap-2 "
              >
                <i className="fi fi-sr-phone-call"></i>
                <span>{contactNum}</span>
              </a>
            </div>
          </div>
          <WhatsAppBtn
            number={"918860726472"}
            message={"Hi Dream Comes True Travel"}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
