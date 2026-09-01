function reverse(arr, start, end){
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function RotateAnArray(arr, k){
    const n = arr.length;
    k = k % n;
    reverse(arr, 0, k-1);
    reverse(arr, k, n-1);
    reverse(arr, 0, n-1);
    return arr;
}

console.log(RotateAnArray([2,4,6,7,8,9], 3)); // should return [ 7, 8, 9, 2, 4, 6 ]