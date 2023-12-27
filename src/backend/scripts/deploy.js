const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  const Marketplace = await hre.ethers.getContractFactory(
    "MusicNFTMarketplace"
  );
  const marketplace = await Marketplace.deploy();

  const data = {
    address: marketplace.target,
    abi: marketplace.interface.format("json"),
  };

  //This writes the ABI and address to the mktplace.json
  fs.writeFileSync(
    "./src/frontend/contractsData/Marketplace.json",
    JSON.stringify(data)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
