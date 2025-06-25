# 有序数组和为K的组合


> 回溯算法

``` js

function combinationSum(nums, target) {
  const result = [];
  
  function backtrack(start, path, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    
    for (let i = start; i < nums.length; i++) {
      // 剪枝：如果当前数字已经大于剩余值，跳过
      if (nums[i] > remaining) break;
      
      path.push(nums[i]);
      backtrack(i, path, remaining - nums[i]); // 注意这里传入i而不是i+1，表示可以重复使用
      path.pop();
    }
  }
  
  backtrack(0, [], target);
  return result;
}
```

``` js

function combinationSumFixedLength(nums, target, k) {
  const result = [];
  
  function backtrack(start, path, remaining) {
    if (remaining === 0 && path.length === k) {
      result.push([...path]);
      return;
    }
    
    for (let i = start; i < nums.length; i++) {
      if (nums[i] > remaining || path.length >= k) break;
      
      path.push(nums[i]);
      backtrack(i + 1, path, remaining - nums[i]);
      path.pop();
    }
  }
  
  backtrack(0, [], target);
  return result;
}
```