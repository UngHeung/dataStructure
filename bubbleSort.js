const array = [6, 5, 7, 8, 3, 4, 2, 1, 9, 0];

function bubbleSort(array) {
    const arr = array;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        console.log(arr);
    }
}

bubbleSort(array);
