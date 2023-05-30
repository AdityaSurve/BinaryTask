import React from "react";
import Phone from "../assets/features/FeaturePhone.png";
import { leftData, rightData } from "../data/featuresData";

const Features = () => {
  return (
    <div
      id="features"
      className="h-auto md:h-screen w-screen flex flex-col justify-center items-center gap-5 md:gap-10 "
    >
      <div className="text-4xl font-satoshi font-bold">Tons of Features</div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-1 md:gap-3">
          {leftData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row h-[200px] justify-center items-center md:h-[100px] gap-1 md:gap-3 hover:bg-[#E4E4E4] hover:cursor-pointer rounded-md"
            >
              <div className="flex gap-2 items-center flex-col font-pop w-[250px] text-center md:text-right">
                <div className="text-[#1A2237] font-bold w-[100%] ">
                  {item.title}
                </div>
                <div className="text-[#5e596c] w-[100%] ">
                  {item.description}
                </div>
              </div>
              <div className="h-[75px] w-[75px] flex justify-center items-center">
                <img src={item.imageUrl} alt="" className="h-[50px] w-[50px]" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-[100%] justify-center items-center">
          <img src={Phone} alt="" className="h-[400px]" />
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          {rightData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row h-[200px] justify-center items-center md:h-[100px] gap-1 md:gap-3 hover:bg-[#E4E4E4] hover:cursor-pointer rounded-md"
            >
              <div className="h-[75px] w-[75px] flex justify-center items-center">
                <img src={item.imageUrl} alt="" className="h-[50px] w-[50px]" />
              </div>
              <div className="flex gap-2 items-center flex-col font-pop w-[250px] text-center md:text-left">
                <div className="text-[#1A2237] font-bold w-[100%] text-center">
                  {item.title}
                </div>
                <div className="text-[#5e596c] w-[100%]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
