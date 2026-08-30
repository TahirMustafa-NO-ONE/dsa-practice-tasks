function twoSum(nums, target){
    const seen = new Map();

    for(let i=0; i<nums.length; i++){
        let complient = target - nums[i];
        if(seen.has(complient)) return [complient, nums[i]];
        seen.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([0, -1, 2, -3, 1], -2));