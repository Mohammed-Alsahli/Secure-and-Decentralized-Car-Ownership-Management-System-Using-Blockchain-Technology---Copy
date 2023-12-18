import React from "react";
import UserFuncOpp from "../assets/UserFuncOpp.png";
import { Link } from "react-router-dom";

const ViewFunPage = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="my-2 w-[50%]">
          <img src={UserFuncOpp} alt="" className="w-[100%] mx-auto" />
        </div>

        <div className=" flex justify-center items-center gap-[3rem]  ">
          <Link to="/searchpage" className="bg-[#BDAEE8]  py-[4rem] px-[8rem] text-[48px] font-semibold rounded-[40px]">
            <button type="button">Search</button>
          </Link>

          <Link to="/registercar" className="bg-[#BDAEE8]  py-[4rem] px-[5rem] text-[48px] font-semibold rounded-[40px] ">
            <button type="button">Register Car</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ViewFunPage;
