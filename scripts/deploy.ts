import { ethers } from "ethers"; // changed to import instead of require
import hre from "hardhat"; // this was missing, needed for getting the artifacts for the contract
import "dotenv/config.js"; // load the config from .env - import version

async function main() {

  const url = process.env.SEPOLIA_RPC_URL; // Changed to match how default hardhat config names vars

  let artifacts = await hre.artifacts.readArtifact("Faucet");

  const provider = new ethers.JsonRpcProvider(url); // JsonRpcProvider is directly off ethers object now

  let privateKey = process.env.SEPOLIA_PRIVATE_KEY; // Changed to match how default hardhat config names vars

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let faucet = await factory.deploy();

  console.log("Deploying faucet...");
  await faucet.waitForDeployment(); // This call is different

  // This is also different now, getAddress() returns a promise instead of accessing .address directly
  const address = await faucet.getAddress();
  console.log("Faucet address:", address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

