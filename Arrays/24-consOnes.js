// return the most count of most consecutive one in the array

function consecutiveOnes(arr){
    let count = 1;
    let maxCount = 0;

    for(let i=1; i<arr.length; i++){
        if(arr[i] === arr[i-1]){
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }

    return Math.max(maxCount, count);

}

console.log(consecutiveOnes([0,1,1,0,0,1,0,0,0]));