# 快速排序

``` js

function quickSort(arr) {

    if(arr.length <= 1)return arr;

    let p = arr[0],left = [],right= [];
    for(let i = 1; i< arr.length; i++){
        if(arr[i] <p){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), p, ...quickSort(right)]

}
```



``` js

class QuickSort {


    exec(arr, low = 0, high = arr.length -1) {

        if(low < high) {
            let p = this.partition(arr, low, high);

            this.exec(arr, low , p - 1);
            this.exec(arr, p + 1, high);
        }

        return arr;
    }

    partition(arr, low, high){
        let p = arr[high];

        let ret = low;
        for(let i = low; i < high; i++){
            if(arr[i] < p){
                [arr[ret], arr[i]] = [arr[i], arr[ret]];
                ret ++;
            } 
        }

        [arr[ret], arr[high]] = [arr[high], arr[ret]];

        return ret;
    }
}

```