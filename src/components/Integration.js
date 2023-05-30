import React from "react";
import IntegrationImage from "../assets/integration/IntegrationImage.png";

const Integration = () => {
  return (
    <div
      id="integrations"
      className="h-screen w-screen flex justify-center items-center "
    >
      <div>
        <img
          src={IntegrationImage}
          alt=""
          className="h-[70%] w-[70%] object-cover"
        />
      </div>
      <div className="w-[30%] flex flex-col gap-5">
        <div className="text-[#4716BA] font-pop font-semibold">
          Tons of Integrations
        </div>
        <div className="text-[#1A2237] text-4xl font-satoshi font-bold">
          Integrate with Your Tools
        </div>
        <div className="text-[#5E596C] font-pop">
          Kozo’s API makes it possible to integrate with a huge number of
          platforms. The tools you know and love can work perfectly alongside
          Kozo.
        </div>
      </div>
    </div>
  );
};

export default Integration;
