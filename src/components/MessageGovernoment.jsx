import React from "react";
import MPageRegAcc from "../assets/MPageRegAcc.png";
import { Link } from "react-router-dom";

const MessageGovernoment = () => {
  return (
    <>
      <div className="flex h-[70vh] justify-center items-center flex-col">
        <h2 className="text-[#DE1F04] text-[50px] leading-[56px] font-semibold">
          Done
        </h2>
        <h2 className="text-[#DE1F04] text-[46px] leading-[56px] my-4">
          your Accident Number (12345) is registered
        </h2>
        <img src={MPageRegAcc} alt="" />
      </div>
      <div className="mx-auto text-center">
        <Link to="/" className="bg-[#121F93] text-[48px] rounded-[25px] py-8 px-[3rem] text-[#ffff]">
           Back to Home Page
        </Link>
      </div>
    </>
  );
};

export default MessageGovernoment;
