import React from "react";
import bannerImg from "../assets/banner/bannerImg.png";
const Banner = () => {
  return (
    <div className="bg-[#4716BA] h-screen w-screen flex justify-start items-center p-[7%]">
      <img
        src={bannerImg}
        alt=""
        className="absolute bottom-0 right-0 h-[450px] w-[340px] object-cover"
      />
      <div className="text-white">
        <div className="text-5xl  font-satoshi font-semibold flex flex-col gap-3">
          <div>The Quicker, Better,</div>
          <div>Smarter Expense</div>
          <div>Manangement Tool</div>
        </div>
        <div className="max-w-[45%] font-pop mt-10">
          Is your business caught in the red-tape of endless paper trails, the
          rigmarole of stuck approvals, faulty financial data entry and hours of
          number crunching? We’ve got you covered.
        </div>
      </div>
    </div>
  );
};

export default Banner;
