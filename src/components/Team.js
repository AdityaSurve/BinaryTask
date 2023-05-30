import React from "react";
import data from "../data/teamData";

const Team = () => {
  return (
    <div
      id="clients"
      className="bg-[#F8FBFF] h-screen w-screen flex gap-20 justify-center items-center"
    >
      <div className="w-[30%] flex flex-col gap-10">
        <div className="text-[#1A2237] font-bold text-4xl font-satoshi">
          Our Team & Values
        </div>
        <div className="text-[#5E596C] font-pop">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dapibus odio at varius vestibulum. Nam sollicitudin justo sed nibh
          viverra, id consectetur lacus semper.
        </div>
      </div>
      <div className="grid grid-cols-2">
        {data.map((item) => (
          <div className="flex gap-3 items-center mx-3 my-7">
            <div>
              <img src={item.imageURL} alt="" />
            </div>
            <div>
              <div className="text-[#1A2237] font-bold font-pop">
                {item.name}
              </div>
              <div className="text-[#5e596c] font-pop">{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
