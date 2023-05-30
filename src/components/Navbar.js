import React from "react";
import Logo from "../assets/logo.png";
import Links from "../data/navbarLinks";

const Navbar = () => {
  return (
    <div className="bg-[#4716BA] h-[64px] w-[100%] flex items-center justify-between px-[7%] fixed z-[10000]">
      <div
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="hover:cursor-pointer"
      >
        <img src={Logo} alt="logo" className="h-[48px]" />
      </div>
      <div className="w-[50%] flex justify-between text-white font-pop">
        {Links.map((item) => (
          <div
            key={item.id}
            className="text-white font-pop p-2 rounded-xl hover:font-semibold hover:bg-[#EF408C] hover:cursor-pointer"
            onClick={() => {
              document
                .getElementById(`${item.link}`)
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
