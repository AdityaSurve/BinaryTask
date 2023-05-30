import React from "react";
import Phone from "../assets/features/FeaturePhone.png";
import { leftData, rightData } from "../data/featuresData";

const Features = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-5 pt-10">
      <div className="text-4xl font-satoshi font-bold">Tons of Features</div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3">
          {leftData.map((item) => (
            <div className="flex flex-row h-[100px] gap-3">
              <div className="flex gap-2 items-center flex-col font-pop w-[250px]">
                <div className="text-[#1A2237] font-bold w-[100%] text-right">
                  {item.title}
                </div>
                <div className="text-[#5e596c] w-[100%] text-right">
                  {item.description}
                </div>
              </div>
              <div className="h-[75px] w-[75px] flex justify-center items-center">
                <img src={item.imageUrl} alt="" className="h-[50px] w-[50px]" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src={Phone} alt="" className="h-[400px]" />
        </div>
        <div className="flex flex-col gap-3">
          {rightData.map((item) => (
            <div className="flex flex-row h-[100px] gap-3">
              <div className="h-[75px] w-[75px] flex justify-center items-center">
                <img src={item.imageUrl} alt="" className="h-[50px] w-[50px]" />
              </div>
              <div className="flex gap-2 items-center flex-col font-pop w-[250px]">
                <div className="text-[#1A2237] font-bold w-[100%] text-left">
                  {item.title}
                </div>
                <div className="text-[#5e596c] w-[100%] text-left">
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
