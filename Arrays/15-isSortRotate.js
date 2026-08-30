function isSortRotate(arr){
    let count = 0;
    let n = arr.length;
    for(let i=0; i<n; i++){
        if(arr[i]>arr[(i+1)%n]){
            count++;
        }
    }

    if(count === 1){
        return true;
    } else {
        return false;
    }
}

console.log(isSortRotate([2,3,5,6,8,10]));