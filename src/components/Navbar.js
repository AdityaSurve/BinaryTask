import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Links from "../data/navbarLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#4716BA] h-auto w-[100%] flex flex-col items-center justify-between px-[7%] fixed z-[10000] py-2">
      <div className="h-[100%] w-[100%] flex flex-row items-center justify-between">
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
        <div className="hidden md:w-[50%] md:flex md:justify-between md:text-white md:font-pop">
          {Links.map((item) => (
            <motion.div
              key={item.id}
              className="text-white font-pop p-2 rounded-xl  hover:cursor-pointer"
              whileHover={{ color: "#ef408c", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                document
                  .getElementById(`${item.link}`)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.name}
            </motion.div>
          ))}
        </div>

        <div className="md:hidden text-white" onClick={() => setShow(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
      {show && (
        <div className="grid grid-cols-3 text-center mt-5 mb-5">
          {Links.map((item) => (
            <motion.div
              key={item.id}
              className="text-white font-pop p-2 rounded-xl hover:cursor-pointer"
              whileHover={{ color: "#ef408c", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                document
                  .getElementById(`${item.link}`)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.name}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
