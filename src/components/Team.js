import React from "react";
import data from "../data/teamData";

const Team = () => {
  return (
    <div
      id="clients"
      className="bg-[#F8FBFF] pt-10 h-auto md:h-screen w-screen flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center"
    >
      <div className="w-[60%] md:w-[30%] text-center md:text-left flex flex-col gap-10">
        <div className="text-[#1A2237] font-bold text-4xl font-satoshi">
          Our Team & Values
        </div>
        <div className="text-[#5E596C] font-pop">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dapibus odio at varius vestibulum. Nam sollicitudin justo sed nibh
          viverra, id consectetur lacus semper.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.map((item) => (
          <div key={item.id} className="flex gap-3 items-center mx-3 my-7">
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
