const HDWalletProvider = require("truffle/hdwallet-provider");

const Web3 = require("web3");

const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider("mnemonic", "infura");
const web3 = Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("trying to deploy from account", accounts[0]);
  result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });
  console.log("Contract deployed to : ", results);
  provider.engine.stop();
};
deploy();
