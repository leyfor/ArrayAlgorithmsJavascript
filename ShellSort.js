/* Shell Sort Algorithm. An improvement to Insertion Sort */

function shellSort(array) {

    for (let gap = array.length / 2; gap > 0; gap = gap / 2) {

        for (let i = gap; i < array.length; i = i + 1) {
            let newElement = array[i];
            let j = i;

            while(j >= gap && array[j - gap] > newElement) {
                array[j] = array[j - gap];
                j = j - gap;
            }
            array[j] = newElement;
        }
    }
    display(array);
}

let sheArray = [70, 4, -34, 9, 15, 80, -6, -88];

shellSort(sheArray);
console.log(sheArray);