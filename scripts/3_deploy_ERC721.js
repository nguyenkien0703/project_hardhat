const hre = require("hardhat");
const { ethers } = hre;
async function main() {

    const ERC721= await hre.ethers.getContractFactory("CreateErc721");
    const ERC721Deployed = await ERC721.deploy();
    await ERC721Deployed.deployed();
    console.log("erc721 was deployed to:", ERC721Deployed.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});