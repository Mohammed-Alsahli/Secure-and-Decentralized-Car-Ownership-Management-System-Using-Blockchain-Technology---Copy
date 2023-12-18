// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.18;

contract CarVerification {
    struct Car {
        uint256 vin;
        string ownerName;
        uint256 priceBought;
        bool accidentInvolvement;
        uint256 dateMade;
        string color;
        string carBrand;
        string numberPlate;
    }

    struct Accident {
        uint256 carVin;
        string partHit;
        uint256 faultPercentage;
        uint256 dateAccident;
    }

    address public government;

    mapping(address => Car) internal registeredCarsByUser;
    mapping(uint256 => Car) internal registeredCarsByVin;

    mapping(uint256 => Accident[]) public accidentsByVin;
    mapping(uint256 => Car) public verifiedCarsByGovernment;

    Accident[] public allAccidents;

    event AccidentOccurred(
        uint256 carVin,
        string partHit,
        uint256 faultPercentage,
        uint256 dateAccident
    );

    event CarRegisteredByUser(
        uint256 vin,
        string ownerName,
        uint256 priceBought,
        bool accidentInvolvement,
        uint256 dateMade,
        string color,
        string carBrand,
        string numberPlate
    );

    constructor() {
        government = msg.sender;
    }

    modifier onlyGovernment() {
        require(msg.sender == government, "Only government can call this");
        _;
    }

    function carByVin(uint256 _vin)
        public
        view
        onlyGovernment
        returns (Car memory)
    {
        Car memory car = registeredCarsByVin[_vin];
        return car;
    }
    function carExists(uint256 _vin)
        public
        view
        returns (bool)
    {
        return registeredCarsByVin[_vin].vin == _vin;
    }

    function carByUser(address _user)
        public
        view
        onlyGovernment
        returns (Car memory)
    {
        Car memory car = registeredCarsByUser[_user];
        return car;
    }

    function registerCar(
        uint256 _vin,
        string memory _ownerName,
        uint256 _priceBought,
        bool _accidentInvolvement,
        uint256 _dateMade,
        string memory _color,
        string memory _carBrand,
        string memory _numberPlate
    ) public {
        Car memory newCar = Car(
            _vin,
            _ownerName,
            _priceBought,
            _accidentInvolvement,
            _dateMade,
            _color,
            _carBrand,
            _numberPlate
        );
        registeredCarsByVin[_vin] = newCar;
        registeredCarsByUser[msg.sender] = newCar;
        emit CarRegisteredByUser(
            _vin,
            _ownerName,
            _priceBought,
            _accidentInvolvement,
            _dateMade,
            _color,
            _carBrand,
            _numberPlate
        );
    }

    function registerAccident(
        uint256 _vin,
        string memory _partHit,
        uint256 _faultPercentage,
        uint256 _dateAccident
    ) public onlyGovernment {
        require(
            verifiedCarsByGovernment[_vin].vin == _vin,
            "Car with this VIN is not verified yet"
        );
        Accident memory newAccident = Accident(
            _vin,
            _partHit,
            _faultPercentage,
            _dateAccident
        );
        accidentsByVin[_vin].push(newAccident);
        allAccidents.push(newAccident);
        // Update the accident involvement status of the car
        registeredCarsByVin[_vin].accidentInvolvement = true;

        emit AccidentOccurred(_vin, _partHit, _faultPercentage, _dateAccident);
    }

    function carVerificationByGovernment(
        uint256 _vin,
        string memory _ownerName,
        uint256 _priceBought,
        bool _accidentInvolvement,
        uint256 _dateMade,
        string memory _color,
        string memory _carBrand,
        string memory _numberPlate
    ) public onlyGovernment returns (bool) {
        require(
            registeredCarsByVin[_vin].vin == _vin,
            "User needs to register his car first with VIN"
        );
        Car memory newVerifiedCar = Car(
            _vin,
            _ownerName,
            _priceBought,
            _accidentInvolvement,
            _dateMade,
            _color,
            _carBrand,
            _numberPlate
        );
        verifiedCarsByGovernment[_vin] = newVerifiedCar;
        return true;
    }

    function getTotalAccidents() public view returns (uint256) {
        return allAccidents.length;
    }

    function getAccidentsByVin(uint256 _vin)
        public
        view
        returns (Accident[] memory)
    {
        return accidentsByVin[_vin];
    }

    function getAllAccidentDetails() public view returns (Accident[] memory) {
        return allAccidents;
    }
}
