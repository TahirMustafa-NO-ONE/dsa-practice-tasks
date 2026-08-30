function subArraySum(arr, target){
    const seenSum = new Map();
    seenSum.set(0, -1);

    let currSum = 0;

    for(let i=0; i<arr.length; i++){
        currSum += arr[i];

        if(seenSum.has(currSum-target)){
            const start = seenSum.get(currSum-target) + 1;
            return [start+1, i+1];
        }

        if(!seenSum.has(currSum)){
            seenSum.set(currSum, i);
        }
    }

    return -1;
}

console.log(subArraySum([2, 3, -8, 7, -1, 2, 3], 11)); // this works for both positive ad negitive numbers
console.log(subArraySum([15, 2, 4, 8, 9, 5, 10, 23], 23));