# 遍历

> 深度优先
``` js
const treeData = {
  "id": 1, "name": "根节点", "children": [
    {
      "id": 2, "name": "节点2", "children": [
        {
          "id": 4, "name": "节点4", "children": [
            { "id": 6, "name": "节点6", "children": [] }
          ]
        }
        ,
        { "id": 5, "name": "节点5", "children": [] }]
    },
    { "id": 3, "name": "节点3", "children": [] }
  ]
}
// 深度优先
while2(treeData)
function while2(treeData) {
  let stack = [];
  stack.push(treeData)
  while (stack.length > 0) {
    const item = stack.pop();

    console.log(item.id, item.name);

    if (item.children) {

      for (const child of item.children.slice().reverse()) {
        stack.push(child)
      }
    }
  }
}
// 深度优先
recursion1(treeData)
function recursion1(item) {
  if (!item) return;

  console.log(item.id, item.name);

  if (item.children) {
    for (const child of item.children) {
      recursion1(child)
    }
  }
}
```
> 广度优先

``` js

const treeData = {
  "id": 1, "name": "根节点", "children": [
    {
      "id": 2, "name": "节点2", "children": [
        {
          "id": 4, "name": "节点4", "children": [
            { "id": 6, "name": "节点6", "children": [] }
          ]
        }
        ,
        { "id": 5, "name": "节点5", "children": [] }]
    },
    { "id": 3, "name": "节点3", "children": [] }
  ]
}
// 广度优先
while1(treeData)
function while1(treeData) {
  let stack = [];
  stack.push(treeData)
  while (stack.length > 0) {
    const item = stack.pop();

    console.log(item.id, item.name);

    if (item.children) {

      for (const child of item.children) {
        stack.push(child)
      }
    }
  }
}
// 广度优先
recursion2([treeData])
function recursion2(stack) {


  let nextLevel = []
  for (const child of stack) {
    console.log(child.id, child.name);
    if (child.children) {
      nextLevel = nextLevel.concat(child.children)

    }


  }
  if(nextLevel.length > 0){recursion2(nextLevel);}


}


```
