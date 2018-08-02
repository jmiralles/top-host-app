
export default class SortObjectsInArray {
    static sort(items, left = 0, right = items.length - 1) {
        var index;
    
        if (items.length > 1) {
    
            left = typeof left != "number" ? 0 : left;
            right = typeof right != "number" ? items.length - 1 : right;
    
            index = SortObjectsInArray.partition(items, left, right);
    
            if (left < index - 1) {
                SortObjectsInArray.sort(items, left, index - 1);
            }
    
            if (index < right) {
                SortObjectsInArray.sort(items, index, right);
            }
    
        }
    
        return items;
    }
    static swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    static partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)],
            i       = left,
            j       = right;
    
        while (i <= j) {
    
            while (items[i] < pivot) {
                i++;
            }
    
            while (items[j] > pivot) {
                j--;
            }
    
            if (i <= j) {
                SortObjectsInArray.swap(items, i, j);
                i++;
                j--;
            }
        }
    
        return i;
    }
}    
