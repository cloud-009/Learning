function recursive(n) {
    if (n<=0) {
        console.log("All done!");
        return;
    }
    console.log(n);
    n--;
    recursive(n);
    
}
console.log(recursive(5));