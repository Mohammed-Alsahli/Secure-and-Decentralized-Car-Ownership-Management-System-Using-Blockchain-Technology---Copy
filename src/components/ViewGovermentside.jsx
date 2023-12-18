import React, { useEffect } from "react";
import UserFuncOp from "../assets/UserFuncOp.png";
import { Link, useNavigate } from "react-router-dom";
import { useGovernment } from "../api";
import { useWallet } from "../Context/UseContext";

const ViewGovermentside = () => {
  const navigate = useNavigate();
  const { address } = useWallet();
  const gov = useGovernment();

  useEffect(() => {
    const check = async () => {
      try {
        const gov_address = await gov;
        if (address === gov_address) {
          navigate("/viewgovermentside");
        } else {
          navigate("/viewfunpage");
        }
      } catch (error) {
        console.log("error occur", error);
      }
    };
    check();
  }, []);
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="my-2 w-[50%]">
        <img src={UserFuncOp} alt="" className="w-[100%] mx-auto" />
      </div>

      <div className="grid grid-cols-2 gap-6">
  <Link to="/searchGov" className="bg-[#BDAEE8] py-[4rem] px-[5rem] text-[48px] font-semibold rounded-[40px] text-center">
    <button type="button">Search</button>
  </Link>
  <Link to="/registercar" className="bg-[#BDAEE8] py-[4rem] px-[5rem] text-[48px] font-semibold rounded-[40px] text-center">
    <button type="button">Register Car</button>
  </Link>
  <Link to="/verify" className="bg-[#BDAEE8] py-[4rem] px-[5rem] text-[48px] font-semibold rounded-[40px] text-center">  
    <button type="button">Verify Car</button>
  </Link>
  <Link to="/registeraccident" className="bg-[#BDAEE8] py-[4rem] px-[5rem] text-[48px] font-semibold rounded-[40px] text-center">
    <button type="button">Register Accident</button>
  </Link>
</div>

    </div>
  );
};

export default ViewGovermentside;
