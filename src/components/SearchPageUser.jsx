import React, { useState } from "react";
import "./Styles.css";
import SearchCar from "../assets/SearchCar.png";
import { Link } from "react-router-dom";
import { getAccidentsByVin, getCarByVin, getVerifiedCar } from "../api";
import ShowAllAccident from "./ShowAllAccident";

const SearchPageUser = () => {
  const [vin, setVin] = useState();
  const [car, setCar] = useState({});
  const [accidents, setAccidents] = useState([]);

  const getCar = async () => {
    const _car = await getVerifiedCar({ vin });
    const _accidents = await getAccidentsByVin({ vin });

    setCar(_car);
    console.log("accidents", _accidents);
    setAccidents(_accidents);
  };
  return (
    <div>
      <img src={SearchCar} alt="M Image" className="mx-auto" />

      <div className="  w-[80%] mx-auto">
        <h2 className="text-[35px] font-semibold text-red-600 text-center">
          Find The Accident History car
        </h2>
        <div className="form-group">
          <label for="vinNumber">Enter VIN number:</label>
          <input type="number" id="vinNumber" name="vinNumber" placeholder="Enter VIN Number"
            onChange={(e) => {
              setVin(+e.target.value);
            }} className=" p-[4rem] bg-[#FFFF] text-center text-[3rem]"
            required
          />
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              getCar();
            }}
            type="submit" className=" bg-blue-800 text-[22px] px-8 py-4 rounded-[15px] text-[#fff] ">
            Search
          </button>
        </div>
      </div>
      <div className=" ">
        <table className="border-2 w-[100%] mx-auto bg-#00FF94 ">
          <thead>
            <tr className="w-[100%] ">
              {Object.keys(car).map((key) => (
                <th className="border-4 py-4 border-[#fff] bg-green-600 text-[#000]   text-center text-[24px] ">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(car).map((value) => (
                <td className="py-4 border-4 border-[#fff] text-[#00FF94] text-center text-[20px] font-semibold">
                  {value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {accidents.length > 0 && <ShowAllAccident data={accidents} />}
      <div className="text-center">
        <br />
        <Link to="/viewgovermentside" type="button" className="bg-[#9c9a9a] text-[22px] px-8 py-4 rounded-[15px] text-[#fff]">
          Previous
        </Link>
      </div>
    </div>
  );
};

export default SearchPageUser;
