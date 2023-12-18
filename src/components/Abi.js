export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export let Abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "carVin",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "partHit",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "faultPercentage",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dateAccident",
        "type": "uint256"
      }
    ],
    "name": "AccidentOccurred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "vin",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ownerName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "priceBought",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "accidentInvolvement",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dateMade",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "color",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "carBrand",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "numberPlate",
        "type": "string"
      }
    ],
    "name": "CarRegisteredByUser",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "accidentsByVin",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "carVin",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "partHit",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "faultPercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "dateAccident",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allAccidents",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "carVin",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "partHit",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "faultPercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "dateAccident",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "carByUser",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "vin",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "ownerName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "priceBought",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "accidentInvolvement",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "dateMade",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "color",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "carBrand",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "numberPlate",
            "type": "string"
          }
        ],
        "internalType": "struct CarVerification.Car",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vin",
        "type": "uint256"
      }
    ],
    "name": "carByVin",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "vin",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "ownerName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "priceBought",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "accidentInvolvement",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "dateMade",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "color",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "carBrand",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "numberPlate",
            "type": "string"
          }
        ],
        "internalType": "struct CarVerification.Car",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vin",
        "type": "uint256"
      }
    ],
    "name": "carExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vin",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_ownerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_priceBought",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_accidentInvolvement",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "_dateMade",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_color",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_carBrand",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_numberPlate",
        "type": "string"
      }
    ],
    "name": "carVerificationByGovernment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vin",
        "type": "uint256"
      }
    ],
    "name": "getAccidentsByVin",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "carVin",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "partHit",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "faultPercentage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dateAccident",
            "type": "uint256"
          }
        ],
        "internalType": "struct CarVerification.Accident[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllAccidentDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "carVin",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "partHit",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "faultPercentage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dateAccident",
            "type": "uint256"
          }
        ],
        "internalType": "struct CarVerification.Accident[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalAccidents",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "government",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vin",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_partHit",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_faultPercentage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_dateAccident",
        "type": "uint256"
      }
    ],
    "name": "registerAccident",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vin",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_ownerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_priceBought",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_accidentInvolvement",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "_dateMade",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_color",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_carBrand",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_numberPlate",
        "type": "string"
      }
    ],
    "name": "registerCar",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "verifiedCarsByGovernment",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "vin",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "ownerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "priceBought",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "accidentInvolvement",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "dateMade",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "color",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "carBrand",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "numberPlate",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
