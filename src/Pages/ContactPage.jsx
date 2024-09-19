import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import background from "../assets/video.mp4"

const ContactPage = () => {
    const heading  = "Conctact Us"
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

  return (
    <div className="max-sm:h-[70%] ">
      <section className="relative bg-cover bg-center">

        <HeroSection background={background} heading={heading}  height={"h-100"}/>

        <div className="min-h-screen bg-gray-200/50  flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Experience the unique Nature Stays offered by Dream Comes True Travels
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="1 person"
                  value={formData.numberOfPerson}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-neonGreen hover:bg-neonGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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

          <div className="fixed bottom-4 left-4">
            <button className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
