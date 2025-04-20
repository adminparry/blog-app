# truffle


https://learnblockchain.cn/docs/truffle/index.html

> install

``` bash
npm install -g truffle
mkdir project

cd project

truffle init
```
> Openzeppelin

``` bash
npm install @openzeppelin/contracts
vi contracts/Token.sol
```

``` sol
pragma solidity ^0.5.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
contract ExampleToken is ERC20, ERC20Detailed {
  constructor () public
  ERC20Detailed("CuiToken", "CUI", 18){
    _mint(msg.sender,10000000000 * (10 ** uint256(decimals())));
  }
}
```

> compiler

``` bash
truffle compile
```

> deploy

``` bash
vim migrations/2_deploy_contracts.js
```

``` sol
const ExampleToken = artifacts.require("ExampleToken");

module.exports = function(deployer) {
  deployer.deploy(ExampleToken);
};
```

``` bash
truffle develop
migrate
```

> 合约调用

``` sol
var myCoin
ExampleToken.deployed().then(function(instance){myCoin=instance})
```

> ganache

``` bash
vim truffle-config.js
```
``` js

module.exports = {
  	networks: {
      development: {
        host: "192.168.1.30",     // Localhost (default: none)
        port: 7545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
      },
    }
};
```
``` bash
truffle console
migrate
```
``` 
var myCoin
ExampleToken.deployed().then(function(instance){myCoin=instance})
```

> Ropsten

``` bash
npm install @truffle/hdwallet-provider
```
 

