function maxProduct(nums){
    let minProd = nums[0], maxProd = nums[0], result = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i]<0) [minProd, maxProd] = [maxProd, minProd];
        minProd = Math.min(nums[i], minProd*nums[i]);
        maxProd = Math.max(nums[i], maxProd*nums[i]);
        result = Math.max(result, maxProd);
    }
    return result;
}

console.log(maxProduct([-1, -3, -10, 0, 6]));