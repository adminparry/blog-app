# 链表快慢指针法

链表中是否存在环

``` java
public boolean hasCycle(ListNode head) {
     if (head == null)
        return false;
     //快慢两个指针，初始时都指向链表的头结点
     ListNode slow = head;
     ListNode fast = head;
     while (fast != null && fast.next != null) {
         //慢指针每次走一步
         slow = slow.next;
        //快指针每次走两步
        fast = fast.next.next;
        //如果相遇，说明有环，直接返回true
        if (slow == fast)
           return true;
    }
    //否则就是没环
    return false;
}
```


``` js
function hasCycle(head) {
    if(!head || !head.next)return false;

    let slow = head,fast = head.next;

    while(fast != null && fast.next != null){
        if(!fast || !fast.next)return false;
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)return true
    }
    return false;
}

```

> 寻找链表中间节点

``` js
function middleNode(head) {

    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;

}
```