# 归并排序

``` js
function mergeSort(arr){

    if(arr.length <= 1)return arr;

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);

    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){

    let ret = [], i = 0,j=0;

    while(i <  left.length && j < right.length ){
        if(left[i] < right[j]){
            ret.push(left[i++])
        }else{
            ret.push(right[j++])
        }

    }

    return ret.concat(left.slice(i)).concat(right.slice(j))
}

```