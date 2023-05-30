import React from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="bg-[#4716BA] h-[64px] w-[100%] flex items-center justify-between px-[7%] fixed z-[10000]">
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
