import React from "react";
import data from "../data/reviewData";
import star from "../assets/review/star.png";

const Reviews = () => {
  return (
    <div
      id="testimonials"
      className="h-screen w-screen justify-center items-center flex flex-col p-20"
    >
      <div className="text-4xl text-[#1A2237] font-bold">
        Read Our Rave Reviews
      </div>
      <div className="grid grid-cols-3 mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 items-center w-[350px] p-5"
          >
            <div>
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="text-[#000] font-semibold font-pop">
              {item.name}
            </div>
            <div className="text-[#5e596c] font-pop">{item.company}</div>
            <div className="flex gap-2">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="text-[#5e596c] font-pop text-center">
              {item.review}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
