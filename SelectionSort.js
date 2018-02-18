// Selection Function
function swap(array, i, j) {
    // Compare the elements and check if the array is empty
    if(i == j || array.length < 1) {
        return;
    }
    
    // Swap the element of the array
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

}

// Display the array to the conSole
function display(array) {
    for (const elem of array) {
      console.log(elem);
    }
}

// Unsorted Array
const IntArray = [20, -22, 5, 55, -77, 30, 40];

// Implementation of the selectionSort Algorithm
function selectionSort(array) {
    for (let lastUnsortedIndex = array.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
        let largestElemIndex = 0;
        for (let index = 1; index <= lastUnsortedIndex; index = index + 1) {
            if (array[index] > array[largestElemIndex]) {
                largestElemIndex = index;   
            }
            
        } 
    
        swap(array, largestElemIndex, lastUnsortedIndex);
        
    }
    display(array);
    
}

console.log("==============================================");

selectionSort(IntArray);

