Array.prototype.duplicate = function () {
    let res = this.filter((x,y) => y !== this.indexOf(x));
    let count = res.length;
    return [res, count];    
}
let arr = [1,4,2,3,4,4,4];
console.log(arr.duplicate());