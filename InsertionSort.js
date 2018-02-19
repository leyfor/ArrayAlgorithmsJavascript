/* INSERTION SORT */

// Unsorted Array
let inserArray = [20, -22, 5, 55, -77, 30, -80];

// Insertion Sort implementation
function insertionSort(array)  {

    for (let firstUnsortedIndex = 1; firstUnsortedIndex < array.length; firstUnsortedIndex++) {
        let newElement = array[firstUnsortedIndex];

        let i;
        for (i = firstUnsortedIndex; i > 0 && array[i - 1] > newElement; i = i - 1) {
           
                array[i] = array[i - 1];
        }
        array[i] = newElement;
    }
    // Display function from InsertionSort  to the console
    display(array);
}
    


insertionSort(inserArray);
console.log(inserArray);