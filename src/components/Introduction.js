import React from "react";
import eCommerce from "../assets/introduction/eCommerce.png";
import IconCircle from "../assets/introduction/IconCircle.png";
import data from "../data/introductionData";
const Introduction = () => {
  return (
    <div
      id="about"
      className="h-screen w-screen justify-center gap-20 flex items-center"
    >
      <div>
        <img src={eCommerce} alt="" className="h-[200px] object-cover" />
      </div>
      <div className="max-w-[40%] flex flex-col gap-8">
        <div className="text-4xl font-satoshi font-bold content-between flex flex-col gap-4">
          <div>Simplified Expense</div>
          <div>Management</div>
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
              <div>
                <img src={IconCircle} alt="" />
              </div>
              <div className="text-[#5e596c] font-pop">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
