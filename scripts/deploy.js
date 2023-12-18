import hre from "hardhat";

const ethers = hre.ethers;

async function deploy() {
  const [owner] = await ethers.getSigners();
  const factory = await ethers.getContractFactory("CarVerification");
  const contract = await factory.deploy();
  contract.waitForDeployment();

  console.log("owner . The government: ", await owner.getAddress());
  console.log("address: ", await contract.getAddress());
}

deploy().then(() => {
  console.log("deployed");
});
