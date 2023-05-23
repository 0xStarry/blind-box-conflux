import {ethers} from "hardhat";
import {BigNumber} from "ethers";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('部署者地址为:', deployer.address)
    const BOX_ADDRESS = '0x5E7C3dc783f812C2a14fE9f1de0d7Ff95d112CBc'
    const box = await ethers.getContractAt('Box', BOX_ADDRESS)
    await box.flipReveal()
    console.log('开盒成功')



}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
