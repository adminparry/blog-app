# 实例

https://solidity-by-example.org/

https://docs.openzeppelin.com/contracts/4.x/

> 获取当前合约地址

``` sol
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract Token {

    function getAddress() external view returns (address) {
        return address(this);
    }
    
}
```

> 获取当前链接的钱包地址

``` sol
function getOwner() external view returns (address) {
        return msg.sender;
}

```

> 获取合约账户余额

``` sol
function getBalanceOfContract() public view returns (uint256) {
        return address(this).balance;
    }
```

> 向合约转账
``` sol
function transderToContract() public payable {
        payable(address(this)).transfer(msg.value);
    }
```
> 向钱包账户转账

``` sol
function transderToWallet(address payable addr, uint256 amount) public {
        payable(addr).transfer(amount);
    }
```

> 合约的主人（也就是部署者）才能调用它

``` sol

```
> 分页

``` sol
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;
    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

    contract ArrayPagination is ERC20 {
        struct Info {
            string text;
            bool completed;
            uint256 num;
        }
        Info[] arr;

        function add(Info memory data) public {
            arr.push(data);
        }

        function get(uint256 i) public view returns (Info memory) {
            return arr[i];
        }

        function getLength() public view returns (uint256) {
            return arr.length;
        }

        function all() public view returns (Info[] memory) {
            return arr;
        }

        function timestamp() public view returns (uint256) {
            return block.timestamp;
        }

        address private owner;

        constructor() ERC20("GGname", "GG") {
            owner = msg.sender;
            _mint(msg.sender, 100 * 10**decimals());
        }

        modifier onlyOwner() {
            require(msg.sender == owner, "not authorized");
            _;
        }

        function transferContractToWallet(address _addr, uint256 _amount)
            public
            onlyOwner
        {
            require(_amount > 0, "amount = 0");
            _transfer(owner, _addr, _amount);
        }

        function current() public view returns (address) {
            return msg.sender;
        }

        function withdraw(uint256 _amount) public {
            require(_amount > 0, "amount = 0");

            _mint(msg.sender, _amount);
        }

        function fetchPage(uint256 pageNumber, uint256 pageSize)
            public
            view
            returns (Info[] memory values, uint256 total)
        {
            require(pageNumber >= 1, "gt and equal one");
            require(pageSize > 0, "gt zero");
            uint256 from = (pageNumber - 1) * pageSize;
            uint256 to = pageNumber * pageSize;
            if (to > arr.length) {
                to = arr.length;
            }
            if (from > arr.length) {
                from = arr.length;
            }

            values = new Info[](to - from);
            for (uint256 i = from; i < to; i++) {
                values[i] = arr[i];
            }

            return (values, (arr.length + pageSize - 1) / pageSize);
        }
    }

```
> ERC20
``` sol

interface IERC20 {
    //总量
    function totalSupply() external view returns (uint);
    //余额
    function balanceOf(address account) external view returns (uint);
    //交易
    function transfer(address recipient, uint amount) external returns (bool);
    // 
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}

contract ERC20 is IERC20 {
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    string public name = "Solidity by Example";
    string public symbol = "SOLBYEX";
    uint8 public decimals = 18;

    function transfer(address recipient, uint amount) external returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool) {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(uint amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}
```

> ERC721

``` sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC165 {
    function supportsInterface(bytes4 interfaceID) external view returns (bool);
}

interface IERC721 is IERC165 {
    function balanceOf(address owner) external view returns (uint balance);

    function ownerOf(uint tokenId) external view returns (address owner);

    function safeTransferFrom(address from, address to, uint tokenId) external;

    function safeTransferFrom(
        address from,
        address to,
        uint tokenId,
        bytes calldata data
    ) external;

    function transferFrom(address from, address to, uint tokenId) external;

    function approve(address to, uint tokenId) external;

    function getApproved(uint tokenId) external view returns (address operator);

    function setApprovalForAll(address operator, bool _approved) external;

    function isApprovedForAll(
        address owner,
        address operator
    ) external view returns (bool);
}

interface IERC721Receiver {
    function onERC721Received(
        address operator,
        address from,
        uint tokenId,
        bytes calldata data
    ) external returns (bytes4);
}

contract ERC721 is IERC721 {
    event Transfer(address indexed from, address indexed to, uint indexed id);
    event Approval(address indexed owner, address indexed spender, uint indexed id);
    event ApprovalForAll(
        address indexed owner,
        address indexed operator,
        bool approved
    );

    // Mapping from token ID to owner address
    mapping(uint => address) internal _ownerOf;

    // Mapping owner address to token count
    mapping(address => uint) internal _balanceOf;

    // Mapping from token ID to approved address
    mapping(uint => address) internal _approvals;

    // Mapping from owner to operator approvals
    mapping(address => mapping(address => bool)) public isApprovedForAll;

    function supportsInterface(bytes4 interfaceId) external pure returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
    }

    function ownerOf(uint id) external view returns (address owner) {
        owner = _ownerOf[id];
        require(owner != address(0), "token doesn't exist");
    }

    function balanceOf(address owner) external view returns (uint) {
        require(owner != address(0), "owner = zero address");
        return _balanceOf[owner];
    }

    function setApprovalForAll(address operator, bool approved) external {
        isApprovedForAll[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function approve(address spender, uint id) external {
        address owner = _ownerOf[id];
        require(
            msg.sender == owner || isApprovedForAll[owner][msg.sender],
            "not authorized"
        );

        _approvals[id] = spender;

        emit Approval(owner, spender, id);
    }

    function getApproved(uint id) external view returns (address) {
        require(_ownerOf[id] != address(0), "token doesn't exist");
        return _approvals[id];
    }

    function _isApprovedOrOwner(
        address owner,
        address spender,
        uint id
    ) internal view returns (bool) {
        return (spender == owner ||
            isApprovedForAll[owner][spender] ||
            spender == _approvals[id]);
    }

    function transferFrom(address from, address to, uint id) public {
        require(from == _ownerOf[id], "from != owner");
        require(to != address(0), "transfer to zero address");

        require(_isApprovedOrOwner(from, msg.sender, id), "not authorized");

        _balanceOf[from]--;
        _balanceOf[to]++;
        _ownerOf[id] = to;

        delete _approvals[id];

        emit Transfer(from, to, id);
    }

    function safeTransferFrom(address from, address to, uint id) external {
        transferFrom(from, to, id);

        require(
            to.code.length == 0 ||
                IERC721Receiver(to).onERC721Received(msg.sender, from, id, "") ==
                IERC721Receiver.onERC721Received.selector,
            "unsafe recipient"
        );
    }

    function safeTransferFrom(
        address from,
        address to,
        uint id,
        bytes calldata data
    ) external {
        transferFrom(from, to, id);

        require(
            to.code.length == 0 ||
                IERC721Receiver(to).onERC721Received(msg.sender, from, id, data) ==
                IERC721Receiver.onERC721Received.selector,
            "unsafe recipient"
        );
    }

    function _mint(address to, uint id) internal {
        require(to != address(0), "mint to zero address");
        require(_ownerOf[id] == address(0), "already minted");

        _balanceOf[to]++;
        _ownerOf[id] = to;

        emit Transfer(address(0), to, id);
    }

    function _burn(uint id) internal {
        address owner = _ownerOf[id];
        require(owner != address(0), "not minted");

        _balanceOf[owner] -= 1;

        delete _ownerOf[id];
        delete _approvals[id];

        emit Transfer(owner, address(0), id);
    }
}

contract MyNFT is ERC721 {
    function mint(address to, uint id) external {
        _mint(to, id);
    }

    function burn(uint id) external {
        require(msg.sender == _ownerOf[id], "not owner");
        _burn(id);
    }
}
```

> safe math

``` sol
pragma solidity ^0.4.11;


/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {
  function mul(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal constant returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal constant returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

```
