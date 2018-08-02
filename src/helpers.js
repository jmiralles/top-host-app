/*
  This is quicksort. Big-O is (n log(n)) for time and space complexity
*/

export default class SortObjectsInArray {
  constructor(arr, key = 'apdex') {
    this.arr = arr;
    this.key = key;
  }
  sort(arr = this.arr, left = 0, right = arr.length - 1) {
    var len = arr.length,
      pivot,
      partitionIndex;

    if (left < right) {
      pivot = right;
      partitionIndex = this.partition(arr, pivot, left, right);

      this.sort(arr, left, partitionIndex - 1);
      this.sort(arr, partitionIndex + 1, right);
    }
    return arr;
  }
  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot][this.key],
      partitionIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i][this.key] < pivotValue) {
        this.swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    this.swap(arr, right, partitionIndex);
    return partitionIndex;
  }
}