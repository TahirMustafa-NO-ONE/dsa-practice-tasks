function maxArray(arr){
    let maxSoFar = arr[0];
    let maxRes = arr[0];

    for(let i=1; i<arr.length; i++){
        maxSoFar = Math.max(maxSoFar+arr[i], arr[i]);
        maxRes = Math.max(maxRes, maxSoFar);
    }

    return maxRes
}

console.log(maxArray([2, 3, -8, 7, -1, 2, 3]));
