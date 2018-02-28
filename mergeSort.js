
/* Merge Sort Algorithms */

function mergeSort(array, start, end) {

    if(end - start < 2) {
        return;
    }

    const mid = (start + end) / 2;

        mergeSort(array, start, mid);
        mergeSort(array, mid, end);
        merge(array, start, mid, end);

    }

    function merge(array, start, mid, end) {

     // Check if the first element of the partition(right and right - 1) are equal
     if (array[mid - 1] <= array[mid]) {
        return;
    }

    let i = start;
    let j = mid;
    let tempIndex = 0;

    let temp = [];

    while (i < mid && j < end) {
        temp[tempIndex++] = (array[i] <= array[j]) ? array[i++] : array[j++];
    }

    
        temp.copyWithin(array, i, array, start + tempIndex, mid - i);
        array.copyWithin(temp, 0, array, start, tempIndex);

}

let megArray = [70, 4, -34, 9, 15, 80, -6, -88];

mergeSort(megArray, 0, megArray.length);
display(megArray);
console.log(megArray);