function findPivot(arr){
    const n = arr.length;
    let totalSUm = 0;

    for(let i=0; i<n; i++){
        totalSUm += arr[i];
    }

    let leftSum = 0;

    for(let i=0; i<n; i++){
        let rightSum = totalSUm - leftSum - arr[i];

        if(leftSum === rightSum){
            return [i, arr[i]];
        }

        leftSum += arr[i];

    }

    return -1;
}

console.log(findPivot([2,4,3,5,3,12,2])); // return [4, 3]