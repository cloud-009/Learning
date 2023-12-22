function removeDuplicate (arr) {
    let unique =[];
    for (let i of arr) {
        if (unique.indexOf(i) === -1) 
        unique.push(i);
    }
    return unique;
}
console.log(removeDuplicate([1,1,1,2,3,4,4,4]));

function revereArray (arr) {
    let res =[];
    for (let i=arr.length -1; i>=0; i--) {
        res.push(arr[i]);
    }
    return res;
}
console.log(revereArray([1,2,3]));

function remove (arr) {
    return arr.filter((x,y)=> arr.indexOf(x)===y);
}
console.log(remove([1,1,2,3]))