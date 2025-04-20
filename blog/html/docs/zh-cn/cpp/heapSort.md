# 堆排序

``` cpp
#include <stdlib.h>

void display(int array[], int size){

	for (int i = 0; i < size; i++)
	{
		printf("%d ", array[i]);
	}
	printf("\n");

}
void swap(int array[], int a, int b){
	int key = array[a];
	array[a] = array[b];
	array[b] = key;
}

// build the heap
void Down(int array[], int i, int n){
	int parent = i;
	int child = i * 2 + 1;

	while(child < n){
		if(child + 1 < n && array[child] < array[child + 1]){
			child++;

		}

		if(array[parent] < array[child]){
			swap(array, parent, child);
			parent = child;
		}

		child = child * 2 + 1;
	}
}


void buildHeap(int array[], int size){
	for (int i = size / 2 - 1; i >= 0 ; i--)
	{
		Down(array, i, size);
	}

}

void heapSort(int array[], int size){
	buildHeap(array, size);

	display(array, size);
	for (int i = size - 1; i >= 0 ; i--)
	{
		swap(array, 0, i);
		Down(array, 0, i);
		
	}

	display(array, size);
}
int _tmain(int argc, _TCHAR* argv[])
{

	int array[] = {45,34,23645,767,78,86,987,96,88,5435,324,32,76};

	int size = sizeof(array) / sizeof(int);

	heapSort(array, size);

	system("pause");

	return 0;
}
```