import React from "react";
import termsAndConditions from "../lib/term&Condition.js"; // Adjust the path as necessary

const TermsAndConditions = () => {
  return (
    <div className="relative bg-cover bg-center flex flex-col items-center justify-center px-6 py-10 sm:px-12 md:px-20 lg:px-28 sm:py-12 md:py-20 lg:py-28">
      <div className="text-justify w-full max-w-4xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">{termsAndConditions.title}</h1>
        {termsAndConditions.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3 font-semibold text-lg sm:text-xl">
              <span>{section.number}.</span>
              <span>{section.title}</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 px-3 sm:px-4 md:px-6 pb-4 sm:pb-5 md:pb-6">
              {section.content}
            </p>
            <div className="border-b border-gray-300 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
