function findMissing(nums){
    let result = nums.length;
    for(let i=0; i<nums.length; i++){
        result ^= i ^ nums[i];
    }

    return result;
}

console.log(findMissing([2,6,5,3,1,0]));