import React from "react";
import eCommerce from "../assets/eCommerce.png";
import IconCircle from "../assets/IconCircle.png";
const Introduction = () => {
  const data = [
    {
      id: 1,
      content:
        "Streamline your budgeting, expenses and billing all on one platform.",
    },
    {
      id: 2,
      content:
        "The dashboard can be customized and it’s hosted on a secure cloud.",
    },
    {
      id: 3,
      content: "Start now and experience hassle-free finance management.",
    },
  ];
  return (
    <div className="h-screen w-screen justify-center gap-[5%] flex items-center">
      <div>
        <img src={eCommerce} alt="" className="h-[200px] object-cover" />
      </div>
      <div className="max-w-[40%] flex flex-col gap-5">
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
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <div className="flex gap-3 items-center">
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
