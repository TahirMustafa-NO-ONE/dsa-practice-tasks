function sortColor(nums){
    let lo=0; md=0, hi=nums.length-1;
    while(md<=hi){
        if(nums[md]===0){
            [nums[lo], nums[md]] = [nums[md], nums[lo]];
            lo++;
            md++;
        }else if(nums[md]===1){
            md++
        }else{
            [nums[md], nums[hi]] = [nums[hi], nums[md]];
            hi--;
        }
    }

    return nums;
}

console.log(sortColor([2,1,0,1,0,2,1,2,1,1,0,0]));