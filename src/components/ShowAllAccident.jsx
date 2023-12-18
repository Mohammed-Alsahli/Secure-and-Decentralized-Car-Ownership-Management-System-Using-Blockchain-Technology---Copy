import React, { useState, useEffect } from "react";
import "./Styles.css";
import ShowAllAcci from "../assets/ShowAllAcci.png";
import { Link } from "react-router-dom";
import { useWallet } from "../Context/UseContext";
import { getAllAccidents } from "../api";
const ShowAllAccident = (props) => {
  const [accidents, setAccidents] = useState([]);

  useEffect(() => {
    const fetchAccident = async () => {
      try {
        const _allAccidents = await getAllAccidents();
        console.log("_allAccidents are : ", JSON.stringify(_allAccidents));
      
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchAccident();
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto text-center">
        <img src={ShowAllAcci} alt="Accident Info" className="mx-auto" />
        <h2 className="text-[#DE1F04] font-semibold text-[46px]">
          Total Accident
        </h2>
        <div className=" bg-[#838383] h-auto my-4 p-10">
          {props.data && (
            <table className="border-2 w-full">
              <thead className="">
                <tr className="border-2 ">
                  {Object.keys(props.data[0] ?? {}).map((key) => (
                    <th className="border-2 border-[#fff] py-4 text-[24px] font-semibold">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="border-2 border-gray-800 py-4 text-[24px] font-semibold">
                {props.data.map((accident) => (
                  <tr className="border-2 border-[#ffff] py-4 text-[24px] font-semibold">
                    {Object.values(accident).map((value) => (
                      <td className="border-2 border-[#fff] py-4 text-[24px] font-semibold">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowAllAccident;
