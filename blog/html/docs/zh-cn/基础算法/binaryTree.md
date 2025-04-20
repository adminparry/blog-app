# 二叉树



``` js
function BinaryTree(){

	let node = function(val){
		this.val = val;
		this.left = null;
		this.right = null;
		
	}

	let root = null;
#插入节点
	let insertNode = function(parentNode, childNode){
		if(childeNode.val < parentNode.val){
			if(parentNode.val === null){
				parentNode.val = childNode;
			}else {
				insertNode(parentNode.left, childNode);
			}
		}else {
			if(parentNode.right === null){
				parentNode.val = childNode;
			}else {
				insertNode(parentNode.right, childNode);
			}
		}
	}
#获取根节点
	this.getRoot = () => root;
#构建二叉树
	this.insert = function(val){
		let node = new Node(val);
		if(root === null){
			root =  node;
		} else {
			insertNode(root, node);
		}
	}

#	中序遍历
#	查询最小值
	this.minNode = function(node){
		if(node != null){
			while(node.left != null){
				node = node.left;
			}
			return node.val;
		}
		return null;
	}
#查询最大值
	this.maxNode = function(node){
		if(node != null){
			while(node.right != null){
				node = node.right;
			}
			return node.val;
		}
	}
#查询指定值
	this.searchNode = function(node, val){
		if(node == null)return false;
		if(val < node.val){
			return this.searchNode(node.left, val)
		} else if(val > node.val) {
			return this.searchNode(node.right, val)
		} else {
			return true;
		}
	}
#	删除节点
	this.removeNode = function(){
		
	}
}
```