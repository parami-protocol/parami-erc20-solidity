import { ethers, upgrades } from "hardhat";

async function main() {
  // Deploying

  const factory = await ethers.getContractFactory("AD3Token");
  // let contract = await upgrades.deployProxy(
  //   factory, [domainID, relayers, relayerThreshold, fee, expiry])
  const AD3Token = await factory.deploy();
  console.log('AD3Token address', AD3Token.address);
  console.log(AD3Token.deployTransaction.hash);
  const res = await AD3Token.deployed();
  console.log('AD3Token deployed');
}

main();

