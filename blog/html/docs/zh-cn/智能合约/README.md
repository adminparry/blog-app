# 智能合约

> Remix

https://remix.ethereum.org/

> MetaMask

https://metamask.io/

> 以太坊浏览器

https://blockexplorer.one/eth/ropsten

> hello world

``` solidity
pragma solidity >=0.4.22 <0.6.0;
contract HelloWorld{
    string _name;
    function setName(string name) public{
        _name = name;
    }
    function getName() constant public returns(string){
        return _name;
    }
}
```

> 部署工具

Truffle 地址：https://truffleframework.com/

Remix 地址：https://studio.ethereum.org/


> 测试链

Truffle 地址：https://truffleframework.com/

Ganache 地址：https://www.trufflesuite.com/ganache

geth 地址：https://github.com/ethereum/go-ethereum

> 前端

web3.js 中文文档：https://web3.tryblockchain.org/Web3.js-api-refrence.html

web3.js 英文文档：https://web3js.readthedocs.io/en/v1.2.3/

> 节点搭建

geth 地址：https://github.com/ethereum/go-ethereum

geth 文档地址：https://learnblockchain.cn/2017/11/29/geth_cmd_options/


