/*
  This is quicksort. Big-O is (n log(n)) for time and space complexity
  we can avoid doing the sort every time we update the list
  and achieveing Big-O (n) for insertion and removing:

  for example, changing addAppToHosts in the model for Big-O (n):
  addAppToHosts(newApp) {
    for (let i = 0; i < this.apps.length; i++) {
        if (i === this.apps.length -,1) {
          // is the last postion
          this.apps.push(newApp)
          break;
        }

      if (this.apps.apdex < newApp.apdex) {
        this.apps.splice(i, 0, newApp);
        break;
      }
    }
  }

*/

export default class SortObjectsInArray {
  constructor(arr, key = "apdex") {
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

export function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

export const escapeForHTML = s =>
  s.replace(/[&<]/g, c => (c === "&" ? "&amp;" : "&lt;"));
