function containDup(nums){
    return new Set(nums).size !== nums.length;
}

console.log(containDup([1,4,5,2,7]));