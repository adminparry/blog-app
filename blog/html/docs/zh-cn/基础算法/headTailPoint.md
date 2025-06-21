# 首尾指针法

## 1. 双指针

### 1.1 两个指针分别从两端向中间移动

```js
function findMiddle(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    console.log(arr[left], arr[right]);
    left++;
    right--;
  }
}
```
> 两数之和
前提是必须有序


``` js
function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [left + 1, right + 1]; // 返回1-based索引
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1]; // 未找到
}

// 示例
console.log(twoSum([2, 7, 11, 15], 9)); // 输出: [1, 2]
```

> 移除有序数组中的重复项

``` js

function removeDuplicates(arr) {

    if(arr.length == 0)return 0;
    let slow = 0;

    for(let fast = 1; fast < arr.length; fast++){
        if(arr[fast] != arr[slow]){
            slow++;
            arr[slow] = arr[fast]
        }
    }

    return slow + 1;
}
```