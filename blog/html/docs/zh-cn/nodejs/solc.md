# solc

> package.json

``` json
{
  "name": "contract",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "help": "solcjs --help",
    "build": "solcjs --bin --include-path node_modules/ --base-path . main.sol",
    "deploy": "",
    "dev":"npx hardhat node",
    "test": "docker pull purestake/moonbeam:tutorial-v7",
    "rpc": "docker run --rm --name moonbeam_development -p 9944:9944 -p 9933:9933 purestake/moonbeam:v0.26.1 --dev --ws-external --rpc-external"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@openzeppelin/contracts": "^4.8.1",
    "hardhat": "^2.12.6",
    "solc": "^0.8.17",
    "web3": "^1.8.0"
  },
  "devDependencies": {
    "@nomicfoundation/hardhat-toolbox": "^2.0.1"
  }
}
```

> compile

``` js
const path = require("path");
const fs = require("fs");
const solc = require("solc");
// Compile contract
module.exports = (fileName) => {
  const contractPath = path.resolve(__dirname, fileName);
  const source = fs.readFileSync(contractPath, "utf8");

  const input = {
    language: "Solidity",
    sources: {
      "some.sol": {
        content: source
      }
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"]
        }
      }
    }
  };
  function findImports(relativePath) {
    //my imported sources are stored under the node_modules folder!
    const absolutePath = path.resolve(__dirname, "node_modules", relativePath);
    const source = fs.readFileSync(absolutePath, "utf8");
    return { contents: source };
  }
  const tempFile = JSON.parse(
    solc.compile(JSON.stringify(input), { import: findImports })
  );
  if (tempFile.errors) {
    console.log(tempFile);
    throw new Error(JSON.stringify(tempFile.errors));
  }
  const contractFile =
    tempFile.contracts["some.sol"][
      fileName.substring(0, fileName.lastIndexOf("."))
    ];

  if (!contractFile.evm) {
    throw new Error("sol构造方法与文件名字不一致");
  }
  return contractFile;
};

```

> deploy

``` js
const Web3 = require("web3");
const fs = require("fs");
const path = require("path");
const contractFileFn = require("./compile");
const address = require('./contractAddress')
// Initialization
const fileName = process.argv[2] || "Incrementer.sol";
const contractFile = contractFileFn(fileName);

const bytecode = contractFile.evm.bytecode.object;
const abi = contractFile.abi;

fs.writeFileSync(fileName + '.abi.json',JSON.stringify(abi, null, 2))
// const privKey =
//   "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342"; // Genesis private key
// const address = "0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b";
const web3 = new Web3(address.network);
// Deploy contract

const deploy = async () => {
  console.log("Attempting to deploy from account:", address.From);
  const incrementer = new web3.eth.Contract(abi);
  const incrementerTx = incrementer.deploy({
    data: bytecode,
    // arguments: [5]
  });
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      from: address.From,
      data: incrementerTx.encodeABI(),
      gas: "6242899"
    },
    address.privKey
  );
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log(createReceipt,"Contract deployed at address", createReceipt.contractAddress);

  let addrs = fs.readFileSync(
    path.resolve(__dirname, "contractAddress.js"),
    "utf8"
  );

  const index = addrs.indexOf(fileName.substring(0, fileName.lastIndexOf(".")));
  if(index > -1){
    const prev = addrs.substr(index, index + fileName.length + 47);

    addrs = addrs.replace(prev, `${fileName.substring(0, fileName.lastIndexOf("."))} = '${createReceipt.contractAddress}'`);
    fs.writeFileSync('contractAddress.js', addrs, 'utf8');
  }else{

    addrs += `
    module.exports.${fileName.substring(0, fileName.lastIndexOf("."))} = '${createReceipt.contractAddress}'`
    fs.writeFileSync('contractAddress.js', addrs, 'utf8');
  }

};
deploy();

```

> contractAddress

``` js

// 私钥对应的钱包地址
module.exports.From = "0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b";
module.exports.privKey = "99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";


// module.exports.From = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
// module.exports.privKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// module.exports.From = "0x65446CB149f3a41dD63e1519d5B1313C849F6366";
// module.exports.privKey = "ad8deb7f7bf147c82a2c163aa6af1927ac259bf12026719e8a2d2d9cbbe104a2";

// ============================purestake/moonbeam=====================================
module.exports.network = "http://localhost:9933";
// ===============================truffle==================================
// module.exports.network = "http://127.0.0.1:9545/";
// =============================hardhat====================================
// module.exports.network = "http://127.0.0.1:8545/";





module.exports.Primitives = "0x50275d3F95E0F2FCb2cAb2Ec7A231aE188d7319d";
module.exports.Constants = "0xD81C7319c85fcd6e1F0893b3988BeBab6247Adbc";
module.exports.Immutable = "0x596fB37d99bd679d1af76fBCB658f7a1a31A1205";
module.exports.Gas = "0x0AE9df8B24E2F3903441F84d632f655B6B93b9dF";
module.exports.First = "0xe9CC152481642D7a3Ea207E3930067B19663770F";

    module.exports.ERC20 = '0x904DBBD700eBabA3Aa56Df8c23fdd953ef225D5b'
    module.exports.Constructory = '0xC679Fe3200D0d3c53Ba5cd3dC8e7111eC2DF939b'

    module.exports.EtherWallet = '0x5FbDB2315678afecb367f032d93F642f64180aa3'


    module.exports.GLDToken = '0xb2A90505De5F3F14813e759ba81c1C6037741B89'

    module.exports.Vector = '0x0E8a7f15EB019CD58d35059962463b341fa1a7e0'
    module.exports.transferTest = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788'

    module.exports.Array = '0x63A1519eE99d1121780FFfa1726Ed2eCc6d1611B'
```

