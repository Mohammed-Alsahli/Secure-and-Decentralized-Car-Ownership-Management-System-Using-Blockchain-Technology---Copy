import React, { useState } from "react";
import "./Styles.css";
import registerAccident from "../assets/RegisterAccident.png";
import { Link } from "react-router-dom";
import { useWallet } from "../Context/UseContext";
import { registerCar, registeraccident } from "../api";
const RegisterAccident = () => {
  const [loading, setLoading] = useState(false);
  const [accident, setAccident] = useState({
    vin: "",
    part_hit: "",
    fault: "",
    time: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { vin, part_hit, fault, time } = accident;
    const _date = +time.split("-").join("");

    const response = await registeraccident({
      vin,
      part_hit,
      fault,
      time: _date,
    });

    if (response !== true) {
      alert(response["reason"]);
    } else {
      alert("Accident Registered");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="accident-registration-form ">
        <img  src={registerAccident} alt="Accident Image" className="accident-image mx-auto" />
        <form className="  w-[90%] mx-auto" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-y-[2rem] ">
            {[
              { name: "vin", title: "VIN NUMBER", type: "number" },
              { name: "part_hit", title: "damagePart", type: "text" },
              { name: "fault", title: "percentage", type: "number" },
              { name: "time", title: "date", type: "date" },
            ].map(({ name, title, type }, index) => {
              return (
                <div key={index}>
                  <label htmlFor={name}></label>
                  <input
                    type={type} id="" name={name} value={accident[name]}
                    onChange={(e) => {
                      setAccident({
                        ...accident,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder={title}  className="py-[2rem] my-auto shadow-lg" required />
                </div>
              );
            })}
            <button disabled={loading} type="submit" className="mx-auto py-6 text-[28px]  bg-[#1C0D73] text-[#fff] px-12 rounded-[20px] shadow-lg " >
              {loading ? "Registering the accident" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="ml-[10rem] text-[28px] text-[#fff]">
        <Link to="/viewgovermentside" type="button" className="bg-[#606060] py-4 px-10 rounded-[20px]  transition-all  ease-in delay-150 hover:bg-blue-700 shadow-lg " > 
          Previous
        </Link>
      </div>
    </>
  );
};

export default RegisterAccident;
