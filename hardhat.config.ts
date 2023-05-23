import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {HttpNetworkUserConfig} from "hardhat/types";

const PK = '0xaeaa81a6f67973d86470b11a473160984a2fd82b6f4f06e4d418021d8cab01eb'
const userNetworkConfig: HttpNetworkUserConfig = {};
if (PK) {
    // @ts-ignore
    userNetworkConfig.accounts = [PK];
}

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.18",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        espace: {
            ...userNetworkConfig,
            url: "https://conflux-espace-public.unifra.io",
            chainId: 1030
        },
        espaceTest: {
            ...userNetworkConfig,
            url: "https://evmtestnet.confluxrpc.com",
            chainId: 71,
        },

    }
};

export default config;
