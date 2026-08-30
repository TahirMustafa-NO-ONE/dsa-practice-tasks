function subArraySum(arr, target){
    let start = 0, end = 0;
    let currSum = 0;

    const result = [];

    for(let i=0; i<arr.length; i++){
        currSum += arr[i];

        if(currSum >= target){
            end = i;

            while(currSum > target && start < end){
                currSum -= arr[start];
                start++;
            }

            if(currSum === target){
                result.push(start+1);
                result.push(end+1);
                return result;
            }
        }
    }
    return -1;
}

console.log(subArraySum([15, 2, 4, 8, 9, 5, 10, 23], 23)); // works only for positive elements