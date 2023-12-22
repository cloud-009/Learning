function unique(arr) {
    let i=0;
    for (let j= 1; j<arr.length; j++) {   
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}                     
console.log(unique([1,3,3,2,2,4,5,5,5]));
                        