# 链表

``` js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 在链表尾部添加节点
  append(value) {
    const newNode = new ListNode(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }

  // 在链表头部添加节点
  prepend(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    
    if (!this.tail) {
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }

  // 在指定位置插入节点
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    
    if (index === 0) {
      return this.prepend(value);
    }
    
    const newNode = new ListNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    
    this.length++;
    return this;
  }

  // 删除指定位置的节点
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return removedNode;
    }
    
    const leader = this.traverseToIndex(index - 1);
    const removedNode = leader.next;
    leader.next = removedNode.next;
    
    if (index === this.length - 1) {
      this.tail = leader;
    }
    
    this.length--;
    return removedNode;
  }

  // 查找节点
  find(value) {
    let currentNode = this.head;
    
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    
    return null;
  }

  // 遍历到指定索引位置
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    
    return currentNode;
  }

  // 反转链表
  reverse() {
    if (!this.head.next) return this;
    
    let prev = null;
    let curr = this.head;
    this.tail = this.head;
    
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    
    this.head = prev;
    return this;
  }

  // 转换为数组
  toArray() {
    const result = [];
    let currentNode = this.head;
    
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    return result;
  }

  // 打印链表
  print() {
    console.log(this.toArray().join(' -> '));
  }
}
```