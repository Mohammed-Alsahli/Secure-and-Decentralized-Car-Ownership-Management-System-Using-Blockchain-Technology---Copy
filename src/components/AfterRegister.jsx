import React from "react";
import "./Styles.css";
import cat from "../assets/cat.png";
import { Link } from "react-router-dom";

const AfterRegister = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-4xl text-red-600 font-semibold">Thank you!</h1>
    <p className="text-red-600 text-3xl leading-4xl">
      Please wait for Government Verification
    </p>
    <div>
      <img src={cat} alt="" className="w-1/2 mx-auto my-20" />
    </div>
    <div>
      <Link to="/" className="bg-[#BDAEE8] text-white md:text-3xl text-xl font-semibold p-10 rounded-3xl mx-auto">
        Back to Home Page
      </Link>
    </div>
  </div>
);

export default AfterRegister;
