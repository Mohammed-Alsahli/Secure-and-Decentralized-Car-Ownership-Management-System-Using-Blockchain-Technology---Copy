import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Abi } from "../components/Abi";
import { ethers } from "ethers";
const contractContext = createContext();

export const useWallet = () => {
  return useContext(contractContext);
};

export const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState();
  const [contract, setContract] = useState();
  const [address, setAddress] = useState();
  const [supply, setSupply] = useState(0);

  async function connectWallet() {
    let _provider = new ethers.BrowserProvider(window.ethereum);
    try {
      if (_provider) {
        setProvider(_provider);
        const _contract = new ethers.Contract(
          "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          Abi,
          await _provider.getSigner()
        );
        setContract(_contract);
        setAddress((await _provider.getSigner()).address);
      } else {
        setProvider(undefined);
        setContract(undefined);
        setAddress(undefined);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    connectWallet().then(() => {
      console.log("connected");
    });
  }, []);

  return (
    <contractContext.Provider
      value={{ provider, contract, address, connectWallet }}
    >
      {children}
    </contractContext.Provider>
  );
};
