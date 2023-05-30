import React from "react";
import eCommerce from "../assets/introduction/eCommerce.png";
import IconCircle from "../assets/introduction/IconCircle.png";
import data from "../data/introductionData";
import { motion } from "framer-motion";
const Introduction = () => {
  return (
    <motion.div
      id="about"
      className="h-auto md:h-screen w-screen justify-center pt-20 md:pt-0 gap-20 flex flex-col md:flex-row items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <img src={eCommerce} alt="" className="h-[200px] object-cover" />
      </div>
      <div className="w-[70%] md:w-[40%] flex flex-col gap-8 text-justify md:text-left">
        <div className="text-4xl font-satoshi font-bold ">
          <div>Simplified Expense Management</div>
        </div>
        <div className="text-[#5e596c] font-pop">
          Kozo is an expense tracking app that will untangle all your financial
          woes and empower you to be your own accountant. Moreover, at Kozo, we
          are industry agnostic. This means that we welcome anyone from any
          industry to use this expense management solution. We have designed it
          so that Kozo can fit into any business model.
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <div className="h-[40px] md:h-auto w-[40px] md:w-auto">
                <img src={IconCircle} alt="" className="h-[20px] w-[20px]" />
              </div>
              <div className="text-[#5e596c] font-pop text-left">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
