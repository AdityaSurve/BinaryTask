import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 h-[10%] w-[100%] flex justify-between items-center px-[5%] text-sm md:text-base">
      <div className="text-white font-pop w-[7em] font-semibold hover:cursor-pointer">
        © Kozo 2022
      </div>
      <div className="flex flex-row gap-5 md:gap-20  text-white text-center">
        <div className="hover:text-[#EF408C] hover:cursor-pointer">
          Privacy Policy
        </div>
        <div className="hover:text-[#EF408C] hover:cursor-pointer">
          Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default Footer;
