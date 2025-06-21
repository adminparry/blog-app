# 选择排序


从第0个元素开始遍历保存当前索引
遍历后面的元素 如果元素小于当前保存元素的值 保存这个元素的索引为最小索引

交换最小索引元素和当前元素


``` js

function selectionSort(arr){

    let len = arr.length;

    for(let i = 0 ; i < len - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < len; j++ ){

            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        [arr[minIndex] , arr[i]] = [arr[i], arr[minIndex]]
    }

    return arr;
}
```
