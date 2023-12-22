function findNum (arr, num) {
    for (let i=1; i<arr.length; i++) {
        if (arr[i] == num) 
        return i;
    }
    return 0;
}
console.log(findNum([1,2,3,4], 4));