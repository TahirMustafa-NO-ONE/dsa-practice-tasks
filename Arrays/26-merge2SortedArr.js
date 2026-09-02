function merge2sortedArray(arr1, arr2){
    let merged = [];
    const n = arr1.length;
    const m = arr2.length;
    let i = 0; j = 0;

    while(i < n && j < m){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }

    while(i < n){
        merged.push(arr1[i]);
        i++;
    }

    while(j < m){
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

console.log(merge2sortedArray([3,6,8,9],[2,4,7,10]));