#  堆排序

构建大根堆

取出堆顶元素放到数组末尾

``` js

function heapSort(arr) {


    let len = arr.length;

    buildMaxHeap(arr);

    for(let i = len - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i)
    }
    return arr;

}

function buildMaxHeap(arr){
    let len = arr.length;
    for(let i = Math.floor(len / 2) -1; i >= 0; i--){
        heapify(arr, i, len);
    }
}

function heapify(arr, i , len){

    let left = 2*i + 1;
    let right = 2*i + 2;
    
    let largest = i;

    if(left < len && arr[left] > arr[largest]){
        largest = left;
    }

    if(right< len && arr[right] > arr[largest]){
        largest = right;
    }
    if(largest !== i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, len)
    }
}
```
