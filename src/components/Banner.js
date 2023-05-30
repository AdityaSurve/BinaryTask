import React from "react";
import bannerImg from "../assets/banner/bannerImg.png";
const Banner = () => {
  return (
    <div
      id="home"
      className="bg-[#4716BA] h-screen w-screen flex justify-start items-center p-[7%] pt-[10%] md:pt-[10%]"
    >
      <img
        src={bannerImg}
        alt=""
        className="block absolute bottom-0 right-0 h-[500px] w-[370px] object-cover opacity-30 md:opacity-100"
      />
      <div className="text-white z-[10000] md:z-0">
        <div className="text-4xl md:text-5xl  font-satoshi font-semibold flex flex-col gap-3">
          <div className="w-[90%] md:w-[50%]">
            The Quicker, Better, Smarter Expense Manangement Tool
          </div>
        </div>
        <div className="w-[100%] md:w-[45%] font-pop mt-10 text-justify md:text-left">
          Is your business caught in the red-tape of endless paper trails, the
          rigmarole of stuck approvals, faulty financial data entry and hours of
          number crunching? We’ve got you covered.
        </div>
      </div>
    </div>
  );
};

export default Banner;
