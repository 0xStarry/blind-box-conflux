import {ethers} from "hardhat";
import {BigNumber} from "ethers";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('部署者地址为:', deployer.address)
    const BOX_ADDRESS = '0x5E7C3dc783f812C2a14fE9f1de0d7Ff95d112CBc'
    const box = await ethers.getContractAt('Box', BOX_ADDRESS)
    // 设置盲盒的图片
    await box.setNotRevealedURI('ipfs://QmRSAFfHPWV3DLehc7Q5T3rJ29ygazf4FZG5dU5v7KPSVX')
    console.log('设置盲盒的图片成功')


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
