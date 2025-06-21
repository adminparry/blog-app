# 插入排序

从第一个元素开始 
保存当前元素和前一个元素的索引
比较当前值和前一个元素值大小
当前一个值大于后一个值
后一个值等于前一个值 
前一个值等于保存的当前值
``` js

function insertionSort(arr) {
    let len = arr.length;

    for(let i = 1; i < len ; i ++){
        console.log(`${arr} from to :${i} index start`)
        let key = arr[i];
        console.log(`${arr} save key:${key}`)
        let j = i -1;
        console.log(`${arr} save j:${j} value \r compare j:${j} >= 0 && arr[j]:${arr[j]} > key:${key}`)
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            console.log(`${arr} array j + 1 :${j + 1} index value = index j :${j} `)
            j--;
            console.log(`${arr} j--:${j}`)
        }
        arr[j + 1] = key;

        console.log(`${arr} array j + 1 :${j + 1} value = :${key}`)

    }

    return arr;
}
```