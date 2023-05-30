import React from "react";
import Footer from "./Footer";
import mail from "../assets/contact/mail.png";
import phone from "../assets/contact/phone.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen w-screen bg-[#4716BA] justify-center items-center flex overflow-x-hidden relative"
    >
      <div className="flex flex-col text-white gap-10 justify-center items-center">
        <div className="text-4xl text-center font-satoshi font-bold">
          Ready to Simplify your Finances
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex gap-2 items-center justify-center">
            <img src={mail} alt="" className="h-[18px] object-cover" />
            <span className="font-pop">hello@gokozo.com</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img src={phone} alt="" className="h-[18px] object-cover" />
            <span className="font-pop">9123134092</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
