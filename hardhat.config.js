require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/TxatcWTpLgJXbzvm3xsrCFhGoUpyB1jt",
      accounts:[`6cfad738e5ca21c8d13bf6f553b9804a9198aa71e90817f5d0fa8e64f8f38e8c`],
    },
  },
};
