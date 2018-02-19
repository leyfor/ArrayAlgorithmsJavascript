/* SELECTION SORT ALGORITHM */


// Unsorted Array
let intArray = [20, -22, 5, 55, -77, 30, 40];

// Implementation of the selectionSort Algorithm
function selectionSort(IntArray) {

    for (let lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
        let largestElemIndex = 0; // First index
        for (let i = 1; i <= lastUnsortedIndex; i = i + 1) {
            if (intArray[i] > intArray[largestElemIndex]) {
                largestElemIndex = i;
            }
        }
        swap(intArray, largestElemIndex, lastUnsortedIndex);
    } 
        display(IntArray);
        
    }
    
    


selectionSort(intArray);
console.log("==============================================");
console.log(intArray);



