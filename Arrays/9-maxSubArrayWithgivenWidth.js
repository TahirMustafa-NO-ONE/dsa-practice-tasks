function maxSubArray(arr, w){

    let currMax = 0;
    for(let i=0; i<w; i++){
        currMax += arr[i];
    }

    let max = currMax;

    for(let i=1; i<arr.length-w; i++){
        currMax = currMax - arr[i-1] + arr[w+i-1];
        max = Math.max(max, currMax);
    }

    return max;
}

console.log(maxSubArray([1, 2, 3, 1, 4, 6, 2, 3, 6], 3))