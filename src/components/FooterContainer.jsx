const FooterCard = ({ icon, heading, text }) => {
  return (
    <div className="w-full mt-5 grid grid-cols-1 gap-4 mx-2 px-3 text-center sm:text-left">
      <span className="flex justify-center sm:justify-start">
        <i
          className={`fi fi-bs-${icon} text-4xl sm:text-6xl text-neonGreen`}
          aria-hidden="true"
        ></i>
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{heading}</h2>
      <p className="line-clamp-2 text-sm sm:text-base md:text-xl">{text}</p>
    </div>
  );
};

const FooterContent = () => {
  // Example data
  const footerData = [
    {
      icon: "shield-check",
      heading: "Enjoy some flexibility",
      text: "Stays with flexible cancellation make it easy to re-book if your plans change.",
    },
    {
      icon: "plane-alt",
      heading: "Over 2000+ trips",
      text: "Stays with flexible cancellation make it easy to re-book if your plans change.",
    },
    {
      icon: "settings-sliders",
      heading: "Flexible rates",
      text: "Stays with flexible cancellation make it easy to re-book if your plans change.",
    },
  ];

  return (
    <div className="relative w-full bg-[#1e1e1e] text-white overflow-hidden py-10 z-10">
      <div className="flex flex-col sm:flex-row items-center justify-center max-sm:my-10 max-sm:py-10 px-10 py-28">
        {footerData.map((data, index) => (
          <FooterCard
            key={index}
            icon={data.icon}
            heading={data.heading}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
