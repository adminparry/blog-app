# web3

> install

``` bash
npm i @walletconnect/web3-provider web3
```

> example

``` ts


import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import Web3 from "web3/dist/web3.min.js";
import { showToast } from "vant";
import { useAppStoreWithAnyWhere } from "@/stores/modules/app";

class Wallet {
  constructor() {
    if (!window.web3 || !window.walletProvider) {
      this.init();
    } else {
      console.log(window.web3);
    }
  }
  init() {
    // const store = useAppStoreWithAnyWhere();
    if (window.ethereum) {
      window.walletProvider = window.ethereum;
    } else if (window.web3) {
      window.walletProvider = window.web3.currentProvider;
    } else {
      window.walletProvider = new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed.binance.org",
        },
        chainId: 56,
      });
    }
    window.walletProvider.on("chainChanged", this.chainChanged);
    window.walletProvider.on("accountsChanged", this.accountsChanged);
    window.walletProvider.on("disconnect", this.disconnect);
    window.web3 = new Web3(window.walletProvider);
    window.web31 = new Web3("https://bsc-dataseed1.ninicoin.io");
  }
  async chainChanged(chainId) {
    if (chainId != "0x38") {
      const store = useAppStoreWithAnyWhere();
      store.setBscChain(true);
      // showToast({
      //   message: "Please switch to Binance Smart Chain.",
      //   confirmButtonText: "OK",
      //   confirmButtonColor: "#2D2C26",
      //   className: "dialogTips",
      // });
      return false;
    }
  }
  async accountsChanged(accounts) {
    const store = useAppStoreWithAnyWhere();
    if (accounts.length <= 0) {
      store.setUserAddress("");
      window.location.reload();
    } else {
      store.setUserAddress(accounts[0]);
    }
  }
  async disconnect(code, reason) {
    const store = useAppStoreWithAnyWhere();
    localStorage.removeItem("walletconnect");
    store.setUserAddress("");
    window.walletProvider = false;
    window.location.reload();
  }
  async connect() {
    const store = useAppStoreWithAnyWhere();
    try {
      if (!window.web3 || !window.walletProvider) {
        this.init();
      }
      var accounts = [];
      if (window.web3.currentProvider instanceof WalletConnectProvider) {
        accounts = await window.walletProvider.enable();
      } else {
        const chinId = await window.web3.eth.getChainId();
        if (chinId != 56) {
          showToast({
            message: "Please switch to Binance Smart Chain.",
            confirmButtonText: "OK",
            confirmButtonColor: "#2D2C26",
            className: "dialogTips",
          });
          return false;
        }

        if (window.ethereum) {
          accounts = await window.walletProvider.request({
            method: "eth_requestAccounts",
          });
        } else {
          accounts = await window.walletProvider.enable();
        }
      }
      // const accounts = await window.web3.eth.getAccounts();
      console.log(accounts);
      if (accounts.length > 0) {
        store.setUserAddress(accounts[0]);
      }
    } catch (err) {
      if (err !== undefined) {
        window.web3 = false;
        window.walletProvider = false;
        return;
      }
    }
  }
}

const webThree = new Wallet();

export default webThree;

```
> normal abi
``` json
[
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]
```
> solidity 在nodejs下的测试与发布

moonbeam举例子


## install

``` bash

docker run --rm --name moonbeam_development -p 9944:9944 -p 9933:9933 purestake/moonbeam:v0.26.1 --dev --ws-external --rpc-external

mkdir incrementer && cd incrmenter && npm init -y

npm i web3 solc

```

## main.sol

``` sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract Incrementer {
    uint256 public number;

    constructor(uint256 _initialNumber) public {
        number = _initialNumber;
    }

    function increment(uint256 _value) public {
        number = number + _value;
    }

    function reset() public {
        number = 0;
    }
}
```

## compile.js

``` js
const path = require('path');
const fs = require('fs');
const solc = require('solc');
// Compile contract
const contractPath = path.resolve(__dirname, 'main.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
   language: 'Solidity',
   sources: {
      'Incrementer.sol': {
         content: source,
      },
   },
   settings: {
      outputSelection: {
         '*': {
            '*': ['*'],
         },
      },
   },
};
const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
const contractFile = tempFile.contracts['Incrementer.sol']['Incrementer'];
module.exports = contractFile;
```

## deploy.js

``` js
const Web3 = require("web3");
const contractFile = require("./compile");
// Initialization
const bytecode = contractFile.evm.bytecode.object;
const abi = contractFile.abi;
const privKey =
  "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342"; // Genesis private key
const address = "0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b";
const web3 = new Web3("http://localhost:9933");
// Deploy contract
const deploy = async () => {
  console.log("Attempting to deploy from account:", address);
  const incrementer = new web3.eth.Contract(abi);
  const incrementerTx = incrementer.deploy({
    data: bytecode,
    arguments: [5]
  });
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      from: address,
      data: incrementerTx.encodeABI(),
      gas: "6242899"
    },
    privKey
  );
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log("Contract deployed at address", createReceipt.contractAddress);
};
deploy();

```

## get.js

``` js
const Web3 = require('web3');
const { abi } = require('../compile');
// Initialization
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');
const contractAddress = require('./contractAddress')
// Contract Call
const incrementer = new web3.eth.Contract(abi, contractAddress);

const get = async () => {
   console.log(JSON.stringify(abi, null, 2));
   const data = await incrementer.methods
      .number()
      .call({ from: address });
   console.log(`The current number stored is: ${data}`);
};
get();
```

## increate.js

``` js
const Web3 = require('web3');
const { abi } = require('../compile');
// Initialization
const privKey =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342'; // Genesis private key
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');
const contractAddress = require('./contractAddress')
const _value = 3;
// Contract Tx
const incrementer = new web3.eth.Contract(abi);
const encoded = incrementer.methods.increment(_value).encodeABI();
const increment = async () => {
   console.log(
      `Calling the increment by ${_value} function in contract at address ${contractAddress}`
   );
   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: address,
         to: contractAddress,
         data: encoded,
         gas: '6242899',
      },
      privKey
   );
const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(`Tx successfull with hash: ${createReceipt.transactionHash}`);
};
increment();
```

## reset.js

``` js
const Web3 = require('web3');
const { abi } = require('../compile');
// Initialization
const privKey =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342'; // Genesis private key
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');
const contractAddress = require('./contractAddress')
// Contract Tx
const incrementer = new web3.eth.Contract(abi);
const encoded = incrementer.methods.reset().encodeABI();
const reset = async () => {
   console.log(
      `Calling the reset function in contract at address ${contractAddress}`
   );
   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: address,
         to: contractAddress,
         data: encoded,
         gas: '6242899',
      },
      privKey
   );
const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(`Tx successfull with hash: ${createReceipt.transactionHash}`);
};
reset();
```

