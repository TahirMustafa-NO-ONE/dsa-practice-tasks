function maxArea(arr){
    let left = 0, right = arr.length-1;
    let max = 0;

    for(let i=0; i<arr.length; i++){
        let curMax = Math.min(arr[left], arr[right]) * (right - left);
        max = Math.max(max, curMax);

        if(arr[left] < arr[right]) left++;
        else right--;
    }

    return max;
}

console.log(maxArea([1, 5, 4, 3]));