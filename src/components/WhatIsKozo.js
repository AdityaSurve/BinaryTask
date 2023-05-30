import React from "react";
import WhatIsKozoImg from "../assets/whatIsKozo/WhatIsKozo.png";

const WhatIsKozo = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-5 pt-20 md:pt-0">
      <div className="text-4xl font-satoshi font-bold">What is Kozo?</div>
      <div className="mt-[20%] md:mt-0">
        <img src={WhatIsKozoImg} alt="" />
      </div>
    </div>
  );
};

export default WhatIsKozo;
