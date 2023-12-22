function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let guess = Math.floor((left + right) / 2);
    while (arr[guess] !== value && left <= right) {
        if (value < arr[guess]) {
            right = guess - 1;
        }
        else {
            left = guess + 1;
        }
        guess = Math.floor((left + right) / 2);
    }
    return arr[guess] === value ? guess : -1;
}
console.log(binarySearch([1, 2, 3, 4, 6, 7], 9));