import {ethers} from "hardhat";
import {BigNumber} from "ethers";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('部署者地址为:', deployer.address)
    const Box = await ethers.getContractFactory("Box");
    // 盲盒的名称
    const name = 'Blind Box'
    // 盲盒的符号
    const symbol = 'BB'
    // 盲盒的总量
    const totalSupply = 10000
    // 盲盒的价格
    const mintPrice = ethers.utils.parseEther('0.1')
    const box = await Box.deploy(name, symbol, totalSupply, mintPrice);
    await box.deployed();
    console.log("Box合约部署地址为:", box.address);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
