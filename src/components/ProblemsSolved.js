import React from "react";
import Icon1 from "../assets/problems/Icon1.png";
import Icon2 from "../assets/problems/Icon2.png";
import Icon3 from "../assets/problems/Icon3.png";
import Icon4 from "../assets/problems/Icon4.png";
import Icon5 from "../assets/problems/Icon5.png";
import Icon6 from "../assets/problems/Icon6.png";
import Icon7 from "../assets/problems/Icon7.png";
import Icon8 from "../assets/problems/Icon8.png";
import Icon9 from "../assets/problems/Icon9.png";

const ProblemsSolved = () => {
  const data = [
    {
      id: 1,
      title: "Disjointed Communication",
      imageURL: Icon1,
    },
    {
      id: 2,
      title: "Budget Overrun",
      imageURL: Icon2,
    },
    {
      id: 3,
      title: "Project Time Overrun",
      imageURL: Icon3,
    },
    {
      id: 4,
      title: "Cost Tracking Difficulty",
      imageURL: Icon4,
    },
    {
      id: 5,
      title: "Financial Closure Delays",
      imageURL: Icon5,
    },
    {
      id: 6,
      title: "Expenses Bills Duplication",
      imageURL: Icon6,
    },
    {
      id: 7,
      title: "Mismatched Forecasts",
      imageURL: Icon7,
    },
    {
      id: 8,
      title: "Approval on Ad Hoc Basis",
      imageURL: Icon8,
    },
    {
      id: 9,
      title: "Auditing Issues",
      imageURL: Icon9,
    },
  ];
  return (
    <div className="h-screen w-screen bg-[#4716BA] flex flex-col gap-10 justify-center items-center">
      <div className="text-4xl text-white font-satoshi font-bold">
        Problems Solved by Kozo
      </div>
      <div className="grid grid-cols-3">
        {data.map((item) => (
          <div className="flex h-[64px] w-[350px] mx-3 my-5 gap-3 items-center bg-white rounded p-5">
            <div style={{ flex: 1 }}>
              <img src={item.imageURL} alt="" />
            </div>
            <div
              className="text-[#1A2237] font-pop font-bold text-left"
              style={{ flex: 5 }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsSolved;
