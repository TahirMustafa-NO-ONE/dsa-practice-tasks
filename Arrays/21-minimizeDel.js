function minimizeDeletion(arr){
    const n = arr.length;
    let minIndex = 0; maxIndex = 0;

    for(let i=0; i<n; i++){
        if(arr[i] < arr[minIndex]){
            minIndex = i;
        }
        if(arr[i] > arr[maxIndex]){
            maxIndex = i;
        }
    }

    const left = Math.min(minIndex, maxIndex);
    const right = Math.max(minIndex, maxIndex);

    const fromLeft = right + 1;
    const fromRight = n - left;
    const fromBothSide = ((left+1)+(n-right));

    return Math.min(fromLeft, fromRight, fromBothSide);
}

console.log(minimizeDeletion([2, 10, 7, 5, 4, 1, 8, 6]));