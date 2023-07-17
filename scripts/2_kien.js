const hre = require("hardhat");
const { ethers } = hre;
async function main() {

    const ERC20= await hre.ethers.getContractFactory("ERC20");
    const ERC20Deployed = await ERC20.deploy("kien","kien_intern");
    await ERC20Deployed.deployed();
    console.log("erc20 was deployed to:", ERC20Deployed.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});