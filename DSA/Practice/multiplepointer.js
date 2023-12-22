function pointer(arr) {
    let l = 0;
    let r = arr.length -1;
    while (l < r) {
        let sum = arr[l] + arr[r];
        if (sum ===0) 
        return `${arr[l]} ${arr[r]}`;
        else if (sum > 0) 
        r--
        else 
        l++
    }
}
console.log(pointer([-3,-2,-1,0,1,2,3]));