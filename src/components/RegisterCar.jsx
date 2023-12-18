import React, { useState } from "react";
// import "./Styles.css";
import RegisterCarImage from "../assets/RegisterCar.png";
import { Link, useNavigate } from "react-router-dom";
import { useWallet } from "../Context/UseContext";
import { carExists, getCarByVin, registerCar } from "../api";
const RegisterCar = () => {
  const [loading, setLoading] = useState(false);
  const { contract } = useWallet();
  const navigate = useNavigate();

  const [car, setCar] = useState({
    vin: "",
    owner_name: "",
    price_bought: "",
    accident_involvement: "",
    date_made: "",
    color: "",
    brand: "",
    number_plate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      vin,
      owner_name,
      price_bought,
      accident_involvement,
      date_made,
      color,
      brand,
      number_plate,
    } = car;
    const _date = +date_made.split("-").join("");
    console.log("_date", _date);
    console.log("date_made,typeof date_made", date_made, typeof date_made);
    const _exists = await carExists({ vin });
    if (_exists) {
      alert("Car is already registered");
      return;
    }
    console.log({
      vin,
      owner_name,
      price_bought,
      accident_involvement,
      date_made: _date,
      color,
      brand,
      number_plate,
    });
    const response = await registerCar({
      vin,
      owner_name,
      price_bought,
      accident_involvement,
      date_made: _date,
      color,
      brand,
      number_plate,
    });
    if (response.status === 1) {
      navigate("/afterregister");
    }
    console.log("receipt", response);
    setLoading(false);
  };

  return (
    <>
      <div className="text-center">
        <img src={RegisterCarImage} alt="Car Image" className="car-image mx-auto hover:scale-110 transition-all ease-in-out delay-200"/>
        <div className="  md:w-[80%] w-[100%] mx-auto ">
          <h2 className="md:text-[48px] text-[25px] text-[#fff] font-semibold my-4 py-4">
            Register Car
          </h2>
          <form className="flex flex-col gap-8 justify-center items-center mx-auto"
            onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[2rem] ">
              {[
                { name: "vin", title: "VIN", type: "number" },
                { name: "owner_name", title: "Owner Name", type: "text" },
                { name: "price_bought", title: "Price Bought", type: "number" },
                { name: "date_made", title: "Date Made", type: "date" },
                { name: "color", title: "Color", type: "text" },
                { name: "brand", title: "Brand", tysspe: "text" },
                { name: "number_plate", title: "Number Plate", type: "text" },
                { name: "accident_involvement", title: "Accident Involvement",type: "checkbox",},
              ].map(({ title, name, type }, index) => (
                <div className="" key={index}>
                  <label htmlFor={name} className="label-vin-number"></label>
                  <input type={type} name={name} value={car[name]}
                    onChange={(e) => {
                      setCar({
                        ...car,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    className="w-[100%]  text-[24px] mx-auto h-[6vh] px-4 placeholder:text-gray-200 bg-[#2CCCC3] border-none text-[#000] shadow-lg hover:outline-none" placeholder={`Enter ${title}`} required />
                </div>
              ))}
            </div>
            <button
              disabled={loading} to="/afterregister" type="submit" className="bg-[#BDAEE8] md:text-[30px] text-[22px] col-span-1 py-4 font-semibold hover:bg-[#9584c4] transition-all ease-in-out delay-150 rounded-[30px] w-[35%] text-[#fff]" >
              {loading ? "Registering the car..." : "Submit"}
            </button>
          </form>
        </div>

        <Link to="/viewgovermentside" type="button" className="previous-button bg-[#606060] p-4 rounded-[15px] md:text-[30px] text-[20px]">
          Previous
        </Link>
      </div>
    </>
  );
};

export default RegisterCar;
