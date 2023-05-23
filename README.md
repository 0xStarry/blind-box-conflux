# Blind Box Contract


1.安装依赖
```shell
yarn install
```
2.导入私钥,在hardhat.config.js中配置私钥,在PK中配置

3.测试网部署脚本
```shell
#部署合约,需要在scripts/01deploy-contract.ts中配置合约参数,请确保你拥有足够的CFX
yarn deploy:test
#以下操作都需要将合约地址配置在scripts文件夹中的脚本中
#设置盲盒图片
yarn setBlindBoxImage:test
#开售
yarn startSale:test
#设置NFT图片
yarn setNFTImage:test
#开盒
yarn openBox:test
#赎回资金
yarn withdraw:test
```

4.主网部署脚本
```shell
#部署合约,需要在scripts/01deploy-contract.ts中配置合约参数,请确保你拥有足够的CFX
yarn deploy:main
#以下操作都需要将合约地址配置在scripts文件夹中的脚本中
#设置盲盒图片
yarn setBlindBoxImage:main
#开售
yarn startSale:main
#设置NFT图片
yarn setNFTImage:main
#开盒
yarn openBox:main
#赎回资金
yarn withdraw:main
```