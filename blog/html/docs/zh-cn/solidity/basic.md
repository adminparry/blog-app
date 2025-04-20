# 基本语法


> 地址类型 Address

## balance

## transfer

## send

> 合约类型

> 时间单位

秒是缺省时间单位，在时间单位之间，数字后面带有 seconds、 minutes、 hours、 days 和 weeks 的可以进行换算，基本换算关系如下：

1 == 1 seconds

1 minutes == 60 seconds

1 hours == 60 minutes

1 days == 24 hours

1 weeks == 7 days

> map

``` sol
pragma solidity >=0.4.0 <0.9.0;

contract C {
    mapping(uint => uint) data;

    function f() public {
        set({value: 2, key: 3});
    }

    function set(uint key, uint value) public {
        data[key] = value;
    }

}
```

> 解构

``` sol
pragma solidity >=0.5.0 <0.9.0;

contract C {
    uint index;

    function f() public pure returns (uint, bool, uint) {
        return (7, true, 2);
    }

    function g() public {
        //基于返回的元组来声明变量并赋值
        (uint x, bool b, uint y) = f();
        //交换两个值的通用窍门——但不适用于非值类型的存储 (storage) 变量。
        (x, y) = (y, x);
        //元组的末尾元素可以省略（这也适用于变量声明）。
        (index,,) = f(); // 设置 index 为 7
    }
}
```

> 方法定义

``` sol
pragma solidity >=0.4.16 <0.9.0;

function sum(uint[] memory arr) pure returns (uint s) {
    for (uint i = 0; i < arr.length; i++)
        s += arr[i];
}

contract C {
    uint private data;

    function f(uint a) private returns(uint b) { return a + 1; }
    function setData(uint a) public { data = a; }
    function getData() public returns(uint) { return data; }
    function compute(uint a, uint b) internal returns (uint) { return a+b; }
}
```
> interface

``` sol
pragma solidity >=0.6.2 <0.9.0;

interface Token {
    enum TokenType { Fungible, NonFungible }
    struct Coin { string obverse; string reverse; }
    function transfer(address recipient, uint amount) external;
}
```

> 全局变量

abi.decode(bytes memory encodedData, (...)) returns (...): ABI- 对提供的数据进行解码，类型在括号中作为第二个参数给出。 示例: (uint a, uint[2] memory b, bytes memory c) = abi.decode(data, (uint, uint[2], bytes))

abi.encode(...) returns (bytes memory): ABI - 对给定的参数进行编码

abi.encodePacked(...) returns (bytes memory): 给指定的参数执行 packed encoding ， 请注意，这种编码可能会有歧义!（参数和编码可能出现多对一的情况）

abi.encodeWithSelector(bytes4 selector, ...) returns (bytes memory): ABI- 为给定的 4 字节选择器和随后的参数进行编码。

abi.encodeCall(function functionPointer, (...)) returns (bytes memory): 对 functionPointer 指向的函数调用及元组中的参数进行编码，执行完整的类型检查，确保类型与函数签名相符。结果等于 abi.encodeWithSelector(functionPointer.selector, (...))

abi.encodeWithSignature(string memory signature, ...) returns (bytes memory): 等于 abi.encodeWithSelector(bytes4(keccak256(bytes(signature)), ...)

bytes.concat(...) returns (bytes memory): 将可变数量的参数串联成一个字节数组

string.concat(...) returns (string memory): 将可变数量的参数串联成一个字符串

block.basefee (uint): 当前区块的基础gas fee ， 参考 (EIP-3198 和 EIP-1559)

block.chainid (uint): 当前 chain id

block.coinbase (address payable): 当前区块矿工的地址

block.difficulty (uint): 当前区块难度

block.gaslimit (uint): 当前区块gaslimit

block.number (uint): 当前区块号

block.timestamp (uint): 当前区块时间戳（以Unix epoch依赖的秒数）

gasleft() returns (uint256): 剩余 gas

msg.data (bytes): 完整的 calldata 数据

msg.sender (address): 消息调用者 (当前调用)

msg.sig (bytes4): calldata的前 4 个字节 (如：函数签名)

msg.value (uint): 与消息一起发送的以太币（wei为单位）

tx.gasprice (uint): 交易的gas 价格

tx.origin (address): 交易的发起者 (完整的调用链下，最初的发起者)

assert(bool condition): 如果条件为 false ， 终止执行并回退状态改变 (用于内部错误)

require(bool condition): 如果条件为 false ， 终止执行并回退状态改变 (用于检查错误输入，或外部组件的错误)

require(bool condition, string memory message): 如果条件为 false ， 终止执行并回退状态改变 (用于检查错误输入，或外部组件的错误)，同时提供错误信息。

revert(): 终止执行并回退状态改变

revert(string memory message): 终止执行并回退状态改变，同时提供错误解释信息。

blockhash(uint blockNumber) returns (bytes32): 指定块的区块hash - 仅最近 256 个区块有效

keccak256(bytes memory) returns (bytes32): 计算输入参数的 Keccak-256 哈希

sha256(bytes memory) returns (bytes32): 计算输入参数的 SHA-256 哈希

ripemd160(bytes memory) returns (bytes20): 计算输入参数的 RIPEMD-160 哈希

ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address): 从椭圆曲线签名中恢复出与公钥关联的地址，出错时返回零。

addmod(uint x, uint y, uint k) returns (uint): 计算 (x + y) % k ，其中加法以任意精度执行，不会在 2**256 处溢出。从 0.5.0 开始要求 k != 0 。

mulmod(uint x, uint y, uint k) returns (uint): 计算 (x * y) % k ，其中乘法以任意精度执行，不会在 2**256 处溢出。从 0.5.0 开始要求 k != 0 。

this (current contract’s type): 当前合约，可以显式转换为 address 或 address payable

super: 继承树的上层合约

selfdestruct(address payable recipient): 销毁合约，把合约的剩余资金（以太币）发送到指定的地址。

<address>.balance (uint256): 地址类型 Address 的余额，以 wei 为单位

<address>.code (bytes memory): 地址类型 Address 的代码 (可以为空)

<address>.codehash (bytes32): 地址类型 Address 的代码 hash

<address payable>.send(uint256 amount) returns (bool): 发送 amount 数量（单位wei）的以太币到 地址类型 Address ， 失败返回 false 。

<address payable>.transfer(uint256 amount): 发送 amount 数量（单位wei）的以太币到 地址类型 Address ， 失败时抛出异常。

type(C).name (string): 合约的名称

type(C).creationCode (bytes memory): 合约的创建字节码，参考 类型信息.

type(C).runtimeCode (bytes memory): 合约的运行时字节码，参考 类型信息.

type(I).interfaceId (bytes4): 包含给定接口的EIP-165接口标识符 , 参考 类型信息.

type(T).min (T): 所在整型 T 的最小值, 参考 类型信息.

type(T).max (T): 所在整型 T 的最大值, 参考 类型信息.
