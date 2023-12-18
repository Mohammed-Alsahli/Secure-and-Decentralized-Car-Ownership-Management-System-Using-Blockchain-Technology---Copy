import { ethers } from "ethers";
import { Abi, CONTRACT_ADDRESS } from "../components/Abi";

async function connect() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);

  return {
    provider,
    signer,
    contract,
  };
}

export async function registerCar({
  vin,
  owner_name,
  price_bought,
  accident_involvement,
  date_made,
  color,
  brand,
  number_plate,
}) {
  const { provider, signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);

  //  Send a transaction to register a new car
  try {
    console.log("await contract.getAddress()", await contract.getAddress());

    console.log("car", {
      vin,
      owner_name,
      price_bought,
      accident_involvement,
      date_made,
      color,
      brand,
      number_plate,
    });
    const trx = await contract.registerCar(
      vin,
      owner_name,
      price_bought,
      accident_involvement,
      date_made,
      color,
      brand,
      number_plate
    );
    console.log("trx", trx);
    const receipt = await trx.wait();
    return receipt;
  } catch (error) {
    return error;
  }
}
//verify
export async function verifyByGoverment({
  vin,
  owner_name,
  price_bought,
  accident_involvement,
  date_made,
  color,
  brand,
  number_plate,
}) {
  const { provider, signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);

  // Example: Send a transaction to register a new car
  try {
    console.log("await contract.getAddress()", await contract.getAddress());

    console.log("car", {
      vin,
      owner_name,
      price_bought,
      accident_involvement,
      date_made,
      color,
      brand,
      number_plate,
    });
    const trx = await contract.carVerificationByGovernment(
      vin,
      owner_name,
      price_bought,
      accident_involvement,
      date_made,
      color,
      brand,
      number_plate
    );
    console.log("trx", trx);
    const receipt = await trx.wait();
    return true || receipt.status;
  } catch (error) {
    return error;
  }
}

export async function getCarByVin({ vin }) {
  const { signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);
  try {
    const response = (await contract.carByVin(vin)).flat();
    console.log("response", response);

    const car = {
      vin: Number(response[0]),
      owner_name: response[1],
      price_bought: Number(response[2]),
      accident_involvement: response[3] ? "Yes" : "No",
      date_made: Number(response[4]),
      color: response[5],
      brand: response[6],
      number_plate: response[7],
    };
    console.log("car", car);
    return car;
  } catch (error) {
    return error;
  }
}

export async function carExists({ vin }) {
  const { signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);
  try {
    const exists = (await contract.carExists(vin))[0];
    console.log("response", exists);
    return exists;
  } catch (error) {
    alert(error["reason"]);
    return true;
  }
}

export async function getVerifiedCar({ vin }) {
  const { signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);
  try {
    const response = (await contract.verifiedCarsByGovernment(vin)).flat();
    console.log("response", response);

    const car = {
      vin: Number(response[0]),
      owner_name: response[1],
      price_bought: Number(response[2]),
      accident_involvement: response[3] ? "Yes" : "No",
      date_made: Number(response[4]),
      color: response[5],
      brand: response[6],
      number_plate: response[7],
    };
    console.log("car", car);
    return car;
  } catch (error) {
    return error;
  }
}

export async function getAccidentsByVin({ vin }) {
  const { signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);
  try {
    const response = (await contract.getAccidentsByVin(vin)).flat(2);
    console.log("response", response);

    const sets = [];

    // Calculate the number of sets based on the array length and set size
    const numberOfSets = Math.ceil(response.length / 4);

    // Iterate through the array to create sets
    for (let i = 0; i < numberOfSets; i++) {
      // Calculate the start index of the current set
      const startIndex = i * 4;

      // Calculate the end index of the current set
      const endIndex = startIndex + 3;

      // Extract the values for the current set
      const currentSet = response.slice(startIndex, endIndex + 1);
      const data = {
        Vin: Number(currentSet[0]),
        "Part Hit": currentSet[1],
        "Fault Percentage": Number(currentSet[2]),
        "Accident Date": Number(currentSet[3]),
      };
  
      sets.push(data);
    }

    console.log("accidents", sets);
    return sets;
  } catch (error) {
    console.log("error", error);
    return error;
  }
}
//for user side search

export async function getAllAccidents() {
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);
  const accidents = await contract.getAllAccidentDetails();
  console.log("All Accidents:", accidents);
  return accidents;
}

// register accident
export async function registeraccident({ vin, part_hit, fault, time }) {
  const { signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);
  console.log(contract);

  try {
    const registerAccidentTx = await contract.registerAccident(
      vin,
      part_hit,
      fault,
      time
    );
    const trx = await registerAccidentTx.wait();
    console.log("Accident registered successfully!");
    return true;
  } catch (error) {
    return error;
  }
}

//get adderess

export async function useGovernment() {
  const { signer } = await connect();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);
  try {
    const govtAddress = await contract.government();
    console.log("govtAddress", govtAddress);
    return govtAddress;
  } catch (error) {
    console.log("error", JSON.stringify(error));
    return false;
  }
}

