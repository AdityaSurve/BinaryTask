import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 h-[10%] w-[100%] flex justify-between items-center px-[5%]">
      <div className="text-white font-pop">© Kozo 2022</div>
      <div className="flex flex-col md:flex-row gap-2 text-white">
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
