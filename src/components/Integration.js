import React from "react";
import IntegrationImage from "../assets/integration/IntegrationImage.png";
import { motion } from "framer-motion";

const Integration = () => {
  return (
    <motion.div
      id="integrations"
      className="h-auto md:h-screen w-screen flex flex-col md:flex-row justify-center items-center p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="p-5 flex justify-center items-center w-screen md:w-[50%] mt-5">
        <img
          src={IntegrationImage}
          alt=""
          className="h-[70%] w-[70%] object-cover md:object-contain"
        />
      </div>
      <div className="mt-10 md:mt-0 w-[60%] md:w-[30%] flex flex-col gap-5 text-center md:text-left">
        <div className="text-[#4716BA] font-pop font-semibold">
          Tons of Integrations
        </div>
        <div className="text-[#1A2237] text-4xl font-satoshi font-bold">
          Integrate with Your Tools
        </div>
        <div className="text-[#5E596C] font-pop">
          Kozo’s API makes it possible to integrate with a huge number of
          platforms. The tools you know and love can work perfectly alongside
          Kozo.
        </div>
      </div>
    </motion.div>
  );
};

export default Integration;
