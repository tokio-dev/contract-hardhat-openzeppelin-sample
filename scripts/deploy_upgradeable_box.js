const { ethers, upgrades } = require('hardhat');

async function main () {
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [50], { initializer: 'initialize' });
  await box.deployed();
  console.log('Box deployed to:', box.address);
}

main();