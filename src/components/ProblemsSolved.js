import React from "react";
import data from "../data/problemData";

const ProblemsSolved = () => {
  return (
    <div className="h-auto md:h-screen w-screen bg-[#4716BA] flex flex-col gap-10 justify-center items-center p-10">
      <div className="text-4xl text-center text-white font-satoshi font-bold">
        Problems Solved by Kozo
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex h-[64px] w-[250px] md:w-[350px] mx-3 my-5 gap-3 items-center bg-white hover:bg-[#ddd] hover:cursor-pointer rounded p-5"
          >
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
