import React from "react";
import termsAndConditions from "../lib/term&Condition.js" // Adjust the path as necessary


const TermsAndConditions = () => {
    return (
        <div className="relative bg-cover bg-center flex flex-col items-center justify-center px-6 py-28 text-justify">
            <div>
                <h1>{termsAndConditions.title}</h1>
                {termsAndConditions.sections.map((section, index) => (
                    <div key={index} className="line-clamp-2 text-2xl">
                        <div className=" flex gap-3">
                            <span>{section.number}.</span>
                            <span>{section.title}</span>
                        </div>
                        <p
                            className="px-6"
                        >{section.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TermsAndConditions;