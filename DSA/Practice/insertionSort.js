function insertionSort(arr) {
    let current;
    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort([8, 5, 1, 3]));