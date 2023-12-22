function merge(arr1, arr2) {
    let output = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }
    return output;
}
console.log(merge[1, 10, 50], [2, 14, 99, 100]);