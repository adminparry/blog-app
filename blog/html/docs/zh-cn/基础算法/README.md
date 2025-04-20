# 基础算法

## 排序

> 堆排序

``` js
//堆排序
 let array = [24,1,6,45,23,11,2,34,8,54,14];
 let nodeHeapSort = (i,arrayLength)=>{
   //对节点i进行小顶堆排序
   let leftChild = i*2+1;
   let rightChild = i*2+2;

   if(leftChild < arrayLength && array[leftChild] < array[i]){
     [array[leftChild], array[i]] = [array[i], array[leftChild]];
   }
   if(rightChild < arrayLength && array[rightChild] < array[i]){
     [array[rightChild], array[i]] = [array[i], array[rightChild]];
   }
 }
 let HeapSort = (length)=>{
 //对所有的非叶子节点进行排序
   for (let i=length;i>=0;i--){
     nodeHeapSort(i,length*2+1);
   }
 }
 //提取元素
 for(let j=array.length;j>0;j--){
   HeapSort((j-1) >> 1);
   [array[0], array[j - 1]] = [array[j - 1], array[0]];
 }
 console.log([...array]);
```
> 希尔排序

``` js
/*
* 希尔排序 时间复杂度 o（nlog2n）.
* 开始时针对无序序列，步长大，交换速度有提升，当数组基本有序的时候，步长少，交换次数少，速度快
*/

//不使用temp,交换数据信息
function swap(arr,i,j){
    arr[i]=arr[i]+arr[j];
    arr[j]=arr[i]-arr[j];
    arr[i]=arr[i]-arr[j];
    return arr;
}

//希尔排序，自组采用直接插入排序 针对有序序列在插入时采用交换法
function shellSort(arr){
    //逐步降低步长直至为1为止
    for(let shellWidth = arr.length/2;shellWidth>0;shellWidth/2){
        //根据步长，将数组进行分组，并使用插入排序法进行交换排序
        //从增量大小的那组数据进行插入排序
        for(let atom =shellWidth ;atom<arr.length ;atom++ ){
            //atom-shellWidth  表示和该元素同组的隔壁相邻的元素，对于同一组的元素，进行插入排序
            while(atom-shellWidth>0&&arr[atom-shellWidth]>arr[atom]){
                swap(arr,atom-shellWidth,atom);
                atom=atom-shellWidth;
            }
        }
    }        
}
```
> 基数排序

``` js
var counter = [];
function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
}
```
> 快速排序

``` js
function quickSort(arr) {
	if(arr.length <= 1)return arr;

	let pivotIndex = arr.length >> 1;
	let pivot = arr.splice(pivotIndex, 1)[0];
	
	let left = [],right = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i])
		}else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([pivot], quickSort(right))
}

const arr = [1,3,6,3,5,6,8,4,3,6,8]
console.log(quickSort(arr));
```

> 冒泡排序


## 查找

> 二分查找
找中间位置 从中间位置分成两个 依次找中间位置
``` js
function binarySearch(arr, target){
	let low = 0, high = arr.length - 1;
	while(low <= high){
		let mid = (low + high) >> 1;
		
		if(arr[mid] == target){
			return target;
		}else if(arr[mid] > target){
			high = mid + 1;
		}else if(arr[mid] < target){
			low = mid - 1;
		}else {
			return -1;
		}
	}
}

console.log(binarySearch([1,2,3,4,5,6,6,78], 2))
```