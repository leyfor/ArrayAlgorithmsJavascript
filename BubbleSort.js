/* BUBBLE SORT ALGORITHM */


//Function to swap the elements
function swap(array, i, j) {
    if (i === j) {
        return;
    }
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

// Initialize Array
let array = [55, -22, 20, -15, 30, -3, 7];

function bubbleSort(array) {

    for (let lastUnsortedIndex = array.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex-- ) {
        for (let index = 0; index < lastUnsortedIndex; index++) {
            if (array[index] > array[index + 1]) {
                swap(array, index, index + 1); // Call our swap function
            }
            
        }
    } 
    display(array);
}

  


bubbleSort(array);
console.log(array);


