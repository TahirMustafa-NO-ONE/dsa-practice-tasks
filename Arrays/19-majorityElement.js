function majorityElement(nums){
    let candidate = null, count = 0;

    for(let num of nums){
        if(count === 0){
            candidate = num;
            count = 1;
        } else if(candidate === num){
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

console.log(majorityElement([2,4,1,2,5,2,2]));