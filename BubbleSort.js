function bubbleSort(array, i, j) {
    if (i == j) {
        return;
    }
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    
}

let array = [55, -22, 20, -15, 30, -3, 7];

for (let lastUnsortedIndex = array.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex-- ) {
    for (let index = 0; index < lastUnsortedIndex; index++) {
        if (array[index] > array[index + 1]) {
            bubbleSort(array, index, index + 1); // Call our bubbleSort function
        }
        
    }
}   

console.log(array);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}