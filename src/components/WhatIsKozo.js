import React from "react";
import WhatIsKozoImg from "../assets/WhatIsKozo.png";

const WhatIsKozo = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-5">
      <div className="text-4xl font-satoshi font-bold">What is Kozo?</div>
      <div>
        <img src={WhatIsKozoImg} alt="" />
      </div>
    </div>
  );
};

export default WhatIsKozo;
