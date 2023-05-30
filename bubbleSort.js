const array1 = [5, 3, 2, 4, 1];
const array2 = [1, 2, 3, 4, 5];
const array3 = [2, 3, 4, 5, 1];
const array4 = [2, 1, 3, 4, 5];

function bubbleSort(array) {
    const arr = array;
    const lastIdx = arr.length - 1;
    let isSorted;

    for (let i = 0; i < lastIdx; i++) {
        isSorted = true;
        for (let j = 0; j < lastIdx - i; j++) {
            if (arr[j] > arr[j + 1]) {
                isSorted = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

        if (isSorted) {
            break;
        }
    }
}

bubbleSort(array1);
bubbleSort(array2);
bubbleSort(array3);
bubbleSort(array4);
