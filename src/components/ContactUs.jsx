import { useNavigate } from "react-router-dom";


const ContactUs = () => {
  
  const navigate = useNavigate();
  
  const ContactUsNav = () => {
    const path = "/contact";
    navigate(path);
  }

  return (
    <div className="flex items-center justify-center max-md:px-8 max-sm:px-4 bg-blueGreen min-h-99">
      <div className="grid grid-cols-1  items-center justify-between text-center h-80">
        <div className="font-playfair text-center text-white">
          <p className="font-bold text-4xl">Ready to go?</p>
          <h1 className="text-5xl font-bold mt-4 font-playfair">
            Give us a quick call
          </h1>
        </div>
        <button className="bg-neonGreen px-4 py-2 rounded-full w-52 mx-auto" onClick={ContactUsNav} > 
          <span className="font-semibold">Contact us</span>
          <i className="fi fi-br-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
