import React from "react";
import "./Styles.css";
import Homepage from "../assets/HomePage.png";
import Homepage2 from "../assets/HomePage2.png";
import { useWallet } from "../Context/UseContext";
import { useGovernment } from "../api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gov = useGovernment();
  const { provider, contract, address, connectWallet } = useWallet();

  return (
    <>
      <div className="welcome">
        <h1>welcome</h1>
        <h2>please Connect your MetaMask Wallet</h2>
      </div>

      <div className="meta-btn">
        <button
          onClick={async () => {
            connectWallet().then(async () => {
              const gov_address = await gov;
              console.log("address", address);
              console.log("gov_address", gov_address);
              if (address === gov_address) {
                navigate("/viewgovermentside");
              } else {
                navigate("/viewfunpage");
              }
            });
          }}
        >
          <img src={Homepage2} />
        </button>
      </div>
      <div className="Meta-Logo w-[60%] mx-auto overflow-hidden">
        <img src={Homepage} alt="" className="w-[100%]" />
      </div>
    </>
  );
};

export default Home;
