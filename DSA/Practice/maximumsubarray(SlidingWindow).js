function maxSubarraySum(arr, n) {
    let tempSum = 0, maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let j = n; j < arr.length; j++) {
        tempSum = tempSum - arr[j - n] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([1,2,3], 3));