import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from 'hardhat/types';
import "@tenderly/hardhat-tenderly";
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-typechain';
import 'hardhat-gas-reporter';
import "hardhat-abi-exporter"
import "hardhat-deploy";
import "hardhat-log-remover";
import "@openzeppelin/hardhat-upgrades";


const dotenv = require('dotenv');// thư viện dotenv là 1 thue viện quản lí biến môi trường 
dotenv.config();// goi phương thức config của thư viện dotenv để đọc và cấu hình biens môi trường từ tệp tin .env,
// tệp tin .env là 1 tệp cáu hình đc sử dụng để chứa các biến môi trường như các khóa bí mật, cái đặt mạng, cấu hình ứng dụng, phương thưc config sẽ đọc các biến môi trg
// từ tệp .env và thêm chúng vào quá trình môi trường của ứng dụn nodejs, cho phép bạn sủ dụng chúng thông qua 'process.env'


const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

const config: HardhatUserConfig & { namedAccounts: any } = {
    abiExporter: {
        path: "./abi",
        clear: true,
        flat: true
    },
    solidity: {
        compilers: [
            {
                version: "0.8.0",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            },
        ]
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
    gasReporter: {
        currency: "USD",
        enabled: (process.env.REPORT_GAS) ? true : false,
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
    },
    mocha: {
        timeout: 600000
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // forking: {
            //   url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}` || "",
            //   blockNumber: 12618875
            // }
        },
        mainnet: {
            accounts: [DEPLOYER_PRIVATE_KEY as string],
            url: 'https://mainnet.infura.io/v3/' + INFURA_API_KEY,
            chainId: 1
        },
        goerli: {
            accounts: [DEPLOYER_PRIVATE_KEY as string],
            url: 'https://goerli.infura.io/v3/' + INFURA_API_KEY,
            chainId: 5
        }
    },
    typechain: {
        outDir: "./types",
        target: "ethers-v5",
    },
    namedAccounts: {
        deployer: {
            default: 0
        }
    },
    paths: {
        artifacts: "artifacts",
        cache: "cache",
        deploy: "deploy",
        deployments: "deployments",
        imports: "imports",
        sources: "contracts",
        tests: "test",
    },
}

export default config;
