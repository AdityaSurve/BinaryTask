import React from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="h-[48px] w-[90%] flex items-center justify-between mt-[24px] p-2">
      <div>
        <img src={Logo} alt="logo" className="h-[48px]" />
      </div>
      <div className="w-[50%] flex justify-evenly text-white font-pop">
        <button>About</button>
        <button>Features</button>
        <button>Integrations</button>
        <button>Clients</button>
        <button>Testimonials</button>
        <button className="text-[18px] font-semibold">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
